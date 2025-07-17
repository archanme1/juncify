import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";
import { S3Client } from "@aws-sdk/client-s3";
import { Location } from "@prisma/client";
import { Upload } from "@aws-sdk/lib-storage";
import axios from "axios";

const prisma = new PrismaClient();

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
});

export const getContractors = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving contractors: ${error.message}` });
  }
};

export const getContractor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error retrieving contractor: ${err.message}` });
  }
};

export const createContractor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error creating contractor: ${err.message}` });
  }
};
