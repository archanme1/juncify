import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBookings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
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
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving booking payments: ${error.message}` });
  }
};
