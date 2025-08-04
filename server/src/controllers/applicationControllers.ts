import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listApplications = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, userType } = req.query;

    let whereClause = {};

    if (userId && userType) {
      if (userType === "customer") {
        whereClause = { customerCognitoId: String(userId) };
      } else if (userType === "manager") {
        whereClause = {
          contractor: {
            managerCognitoId: String(userId),
          },
        };
      }
    }

    const applications = await prisma.application.findMany({
      where: whereClause,
      orderBy: {
        applicationDate: "desc",
      },
      include: {
        contractor: {
          include: {
            location: true,
            manager: true,
          },
        },
        customer: true,
      },
    });

    function calculateNextPaymentDate(startDate: Date): Date {
      const today = new Date();
      const nextPaymentDate = new Date(startDate);
      while (nextPaymentDate <= today) {
        nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
      }
      return nextPaymentDate;
    }

    const formattedApplications = await Promise.all(
      applications.map(async (app) => {
        const booking = await prisma.booking.findFirst({
          where: {
            customer: {
              cognitoId: app.customerCognitoId,
            },
            contractorId: app.contractorId,
          },
          orderBy: { startDate: "desc" },
        });

        return {
          ...app,
          contractor: {
            ...app.contractor,
            address: app.contractor.location.address,
          },
          manager: app.contractor.manager,
          booking: booking
            ? {
                ...booking,
                nextPaymentDate: calculateNextPaymentDate(booking.startDate),
              }
            : null,
        };
      })
    );

    res.json(formattedApplications);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving applications: ${error.message}` });
  }
};

export const createApplication = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      applicationDate,
      status,
      contractorId,
      customerCognitoId,
      name,
      email,
      phoneNumber,
      message,
    } = req.body;

    const contractor = await prisma.contractor.findUnique({
      where: { id: contractorId },
      select: { installationFee: true, advancePayment: true },
    });

    if (!contractor) {
      res.status(404).json({ message: "Contractor not found" });
      return;
    }

    // Initiating new application

    const newApplication = await prisma.$transaction(async (prisma) => {
      // Create booking first
      const booking = await prisma.booking.create({
        data: {
          startDate: new Date(), // Today
          endDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ), // 1 year from today
          totalFee: contractor.installationFee,
          advanceFee: contractor.advancePayment,
          contractor: {
            connect: { id: contractorId },
          },
          customer: {
            connect: { cognitoId: customerCognitoId },
          },
        },
      });

      // Then create application with booking connection
      const application = await prisma.application.create({
        data: {
          applicationDate: new Date(applicationDate),
          status,
          name,
          email,
          phoneNumber,
          message,
          contractor: {
            connect: { id: contractorId },
          },
          customer: {
            connect: { cognitoId: customerCognitoId },
          },
          booking: {
            connect: { id: booking.id },
          },
        },
        include: {
          contractor: true,
          customer: true,
          booking: true,
        },
      });

      return application;
    });

    res.status(201).json(newApplication);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating application: ${error.message}` });
  }
};

export const updateApplicationStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    console.log("status:", status);

    const application = await prisma.application.findUnique({
      where: { id: Number(id) },
      include: {
        contractor: true,
        customer: true,
      },
    });

    if (!application) {
      res.status(404).json({ message: "Application not found." });
      return;
    }

    if (status === "Approved") {
      const newBooking = await prisma.booking.create({
        data: {
          startDate: new Date(),
          endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
          totalFee: application.contractor.installationFee,
          advanceFee: application.contractor.advancePayment,
          contractorId: application.contractorId,
          customerCognitoId: application.customerCognitoId,
        },
      });

      // Update the contractor to connect the customer
      await prisma.contractor.update({
        where: { id: application.contractorId },
        data: {
          customers: {
            connect: { cognitoId: application.customerCognitoId },
          },
        },
      });

      // Update the application with the new booking ID
      await prisma.application.update({
        where: { id: Number(id) },
        data: { status, bookingId: newBooking.id },
        include: {
          contractor: true,
          customer: true,
          booking: true,
        },
      });
    } else {
      // Update the application status (for both "Denied" and other statuses)
      const updatedApp = await prisma.application.update({
        where: { id: Number(id) },
        data: { status },
      });

      // If application already has a booking, update its endDate to today
      if (updatedApp.bookingId) {
        await prisma.booking.update({
          where: { id: updatedApp.bookingId },
          data: {
            endDate: new Date(),
          },
        });
      }
    }

    // Respond with the updated application details
    const updatedApplication = await prisma.application.findUnique({
      where: { id: Number(id) },
      include: {
        contractor: true,
        customer: true,
        booking: true,
      },
    });

    res.json(updatedApplication);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating application status: ${error.message}` });
  }
};
