"use server";

import { CreateEventParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Events from "../database/models/event.model";
import { revalidatePath } from "next/cache";
import Category from "../database/models/category.model";

export const createEvent = async ({
  userId,
  event,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);
    if (!organizer) throw new Error("Organizer not found");

    const newEvent = await Events.create({
      ...event,
      organizer: userId,
      category: event.categoryId,
    });

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
};
