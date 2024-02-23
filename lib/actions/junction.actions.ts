"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "@/lib/database";
import Junction from "@/lib/database/models/junction.model";
import User from "@/lib/database/models/user.model";
import Category from "@/lib/database/models/category.model";
import { handleError } from "@/lib/utils";

import {
  CreateJunctionParams,
  UpdateJunctionParams,
  DeleteJunctionParams,
  GetAllJunctionsParams,
  GetJunctionsByUserParams,
  GetRelatedJunctionsByCategoryParams,
} from "@/types";
import { ObjectId } from "mongodb";
import Order from "../database/models/order.model";
import City from "../database/models/city.model";

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

const getCityByName = async (name: string) => {
  return City.findOne({ name: { $regex: name, $options: "i" } });
};

const populateJunction = (query: any) => {
  return query
    .populate({
      path: "organizer",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({ path: "category", model: Category, select: "_id name" })
    .populate({ path: "city", model: City, select: "_id name" });
};

// CREATING Junction
export async function createJunction({
  userId,
  junction,
  path,
}: CreateJunctionParams) {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);
    if (!organizer) throw new Error("Organizer not found");

    const newJunction = await Junction.create({
      ...junction,
      category: junction.categoryId,
      city: junction.cityId,
      organizer: userId,
    });
    revalidatePath(path);

    return JSON.parse(JSON.stringify(newJunction));
  } catch (error) {
    handleError(error);
  }
}

// GET ONE JUNCTION BY ID
export async function getJunctionById(junctionId: string) {
  try {
    await connectToDatabase();

    const junction = await populateJunction(Junction.findById(junctionId));

    if (!junction) throw new Error("junction not found");

    return JSON.parse(JSON.stringify(junction));
  } catch (error) {
    handleError(error);
  }
}

// UPDATING junction
export async function updateJunction({
  userId,
  junction,
  path,
}: UpdateJunctionParams) {
  try {
    await connectToDatabase();

    const junctionToUpdate = await Junction.findById(junction._id);
    if (
      !junctionToUpdate ||
      junctionToUpdate.organizer.toHexString() !== userId
    ) {
      throw new Error("Unauthorized or junction not found");
    }

    const updatedJunction = await Junction.findByIdAndUpdate(
      junction._id,
      { ...junction, category: junction.categoryId },
      { new: true }
    );
    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedJunction));
  } catch (error) {
    handleError(error);
  }
}

// DELETING Junction AND ORDER CONSEQUENTLY
export async function deleteJunction({
  junctionId,
  path,
}: DeleteJunctionParams) {
  try {
    await connectToDatabase();

    if (!junctionId) throw new Error("Junction ID is required");
    const junctionObjectId = new ObjectId(junctionId);

    const deletedJunction = await Junction.findByIdAndDelete(junctionId);
    if (deletedJunction) {
      await Order.deleteMany({ junction: junctionObjectId });

      revalidatePath(path);
    }
  } catch (error) {
    handleError(error);
  }
}

// GET ALL Junctions
export async function getAllJunctions({
  query,
  limit = 6,
  page,
  category,
  city,
}: GetAllJunctionsParams) {
  try {
    await connectToDatabase();

    const titleCondition = query
      ? { title: { $regex: query, $options: "i" } }
      : {};
    const categoryCondition = category
      ? await getCategoryByName(category)
      : null;
    const cityCondition = city ? await getCityByName(city) : null;

    const conditions = {
      $and: [
        titleCondition,
        categoryCondition ? { category: categoryCondition._id } : {},
        cityCondition ? { city: cityCondition._id } : {},
      ],
    };

    const skipAmount = (Number(page) - 1) * limit;
    const junctionsQuery = Junction.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const junctions = await populateJunction(junctionsQuery);
    const junctionsCount = await Junction.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(junctions)),
      totalPages: Math.ceil(junctionsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

// GET junctions BY ORGANIZER
export async function getJunctionsByUser({
  userId,
  limit = 6,
  page,
}: GetJunctionsByUserParams) {
  try {
    await connectToDatabase();

    const conditions = { organizer: userId };
    const skipAmount = (page - 1) * limit;

    const junctionsQuery = Junction.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const junctions = await populateJunction(junctionsQuery);
    const junctionsCount = await Junction.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(junctions)),
      totalPages: Math.ceil(junctionsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

// GET RELATED junctionS: junctionS WITH SAME CATEGORY
export async function getRelatedJunctionsByCategory({
  categoryId,
  junctionId,
  limit = 3,
  page = 1,
}: GetRelatedJunctionsByCategoryParams) {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;
    const conditions = {
      $and: [{ category: categoryId }, { _id: { $ne: junctionId } }],
    };

    const junctionsQuery = Junction.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const junctions = await populateJunction(junctionsQuery);
    const junctionsCount = await Junction.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(junctions)),
      totalPages: Math.ceil(junctionsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}
