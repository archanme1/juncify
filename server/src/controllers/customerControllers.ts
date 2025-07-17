import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();

export const getCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const customer = await prisma.customer.findUnique({
      where: { cognitoId },
      include: {
        favorites: true,
      },
    });

    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving customer: ${error.message}` });
  }
};

export const createCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, name, email, phoneNumber } = req.body;

    const customer = await prisma.customer.create({
      data: {
        cognitoId,
        name,
        email,
        phoneNumber,
      },
    });

    res.status(201).json(customer);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating customer: ${error.message}` });
  }
};

export const updateCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const { name, email, phoneNumber } = req.body;

    const updateCustomer = await prisma.customer.update({
      where: { cognitoId },
      data: {
        name,
        email,
        phoneNumber,
      },
    });

    res.status(204).json(updateCustomer);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating customer: ${error.message}` });
  }
};

export const getServiceRecords = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const properties = await prisma.contractor.findMany({
      where: { customers: { some: { cognitoId } } },
      include: {
        location: true,
      },
    });

    const serviceRecordsWithFormattedLocation = await Promise.all(
      properties.map(async (contractor) => {
        const coordinates: { coordinates: string }[] =
          await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${contractor.location.id}`;

        const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
        const longitude = geoJSON.coordinates[0];
        const latitude = geoJSON.coordinates[1];

        return {
          ...contractor,
          location: {
            ...contractor.location,
            coordinates: {
              longitude,
              latitude,
            },
          },
        };
      })
    );

    res.status(200).json(serviceRecordsWithFormattedLocation);
  } catch (err: any) {
    res.status(500).json({
      message: `Error retrieving manager contractors for service records: ${err.message}`,
    });
  }
};

export const addFavoriteContractor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, contractorId } = req.params;
    const customer = await prisma.customer.findUnique({
      where: { cognitoId },
      include: { favorites: true },
    });

    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    const contractorIdNumber = Number(contractorId);
    const existingFavorites = customer.favorites || [];

    if (!existingFavorites.some((fav) => fav.id === contractorIdNumber)) {
      const updatedCustomer = await prisma.customer.update({
        where: { cognitoId },
        data: {
          favorites: {
            connect: { id: contractorIdNumber },
          },
        },
        include: { favorites: true },
      });
      res.json(updatedCustomer);
    } else {
      res.status(409).json({ message: "Contractor already added as favorite" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error adding favorite contractor: ${error.message}` });
  }
};

export const removeFavoriteContractor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, contractorId } = req.params;
    const customer = await prisma.customer.findUnique({
      where: { cognitoId },
      include: { favorites: true },
    });

    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    const contractorIdNumber = Number(contractorId);
    const existingFavorites = customer.favorites || [];

    if (!existingFavorites.some((fav) => fav.id === contractorIdNumber)) {
      const updatedCustomer = await prisma.customer.update({
        where: { cognitoId },
        data: {
          favorites: {
            disconnect: { id: contractorIdNumber },
          },
        },
        include: { favorites: true },
      });
      res.json(updatedCustomer);
    } else {
      res.status(409).json({ message: "Contractor already added as favorite" });
    }
  } catch (error: any) {
    res.status(500).json({
      message: `Error removing favorite contractor: ${error.message}`,
    });
  }
};
