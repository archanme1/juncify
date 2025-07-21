import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBookings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        customer: true,
        contractor: true,
      },
    });
    res.json(bookings);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving bookings: ${error.message}` });
  }
};

export const getBookingPayments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const payments = await prisma.payment.findMany({
      where: { bookingId: Number(id) },
    });
    res.json(payments);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving booking payments: ${error.message}` });
  }
};
