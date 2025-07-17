import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();

export const getManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const manager = await prisma.manager.findUnique({
      where: { cognitoId },
    });

    if (manager) {
      res.status(200).json(manager);
    } else {
      res.status(404).json({ message: "Manager not found" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving manager: ${error.message}` });
  }
};

export const createManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, name, email, phoneNumber } = req.body;

    const manager = await prisma.manager.create({
      data: {
        cognitoId,
        name,
        email,
        phoneNumber,
      },
    });

    res.status(201).json(manager);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating manager: ${error.message}` });
  }
};

export const updateManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const { name, email, phoneNumber } = req.body;

    const updateManager = await prisma.manager.update({
      where: { cognitoId },
      data: {
        name,
        email,
        phoneNumber,
      },
    });

    res.status(204).json(updateManager);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating manager: ${error.message}` });
  }
};

export const getManagerContractors = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const contractors = await prisma.contractor.findMany({
      where: { managerCognitoId: cognitoId },
      include: {
        location: true,
      },
    });

    const contractorsWithFormattedLocation = await Promise.all(
      contractors.map(async (contractor) => {
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

    res.status(200).json(contractorsWithFormattedLocation);
  } catch (err: any) {
    res.status(500).json({
      message: `Error retrieving manager contractors: ${err.message}`,
    });
  }
};
