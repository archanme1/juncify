import * as z from "zod";

export const eventFormSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be less than 150 characters"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(750, "Description must be less than 500 characters"),
  location: z.string(),
  imageUrl: z.string().min(1, "Please provide an image for the junction"),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string().min(1, "Category must be at least 3 characters"),
  cityId: z.string().min(1, "City must be at least 3 characters"),
  available: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string(),
});

export const contactFormSchema = z.object({
  username: z.string().min(3, "Name should Be atleast 3 characters"),
  email: z.string().email(),
  message: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(400, "Description must be less than 400 characters"),
});
