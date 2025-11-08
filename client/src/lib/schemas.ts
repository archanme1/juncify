import * as z from "zod";
import { ContractorTypeEnum } from "@/lib/constants";

export const contractorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  hourlyRate: z.coerce.number().positive().min(0).int(),
  advancePayment: z.coerce.number().positive().min(0).int(),
  installationFee: z.coerce.number().positive().min(0).int(),
  isEmergencyAvailable: z.boolean(),
  offersOnSiteParking: z.boolean(),
  photoUrls: z
    .array(z.instanceof(File))
    .min(1, "At least one photo is required"),
  amenities: z.string().min(1, "Amenities are required"),
  highlights: z.string().min(1, "Highlights are required"),
  teamSize: z.coerce.number().positive().min(0).max(10).int(),
  serviceAreaCoverage: z.coerce.number().positive().min(0).max(1000000).int(),
  yearsOfExperience: z.coerce.number().int().positive(),
  contractorType: z.nativeEnum(ContractorTypeEnum),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  postalCode: z.string().min(1, "Postal code is required"),
});

export type ContractorFormData = z.infer<typeof contractorSchema>;

export const applicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

export const settingsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
});

export type SettingsFormData = z.infer<typeof settingsSchema>;

export const commentSchema = z.object({
  desc: z
    .string()
    .trim()
    .min(1, "Reply cannot be empty!!")
    .max(255, "Max 255 chars"),
});

export type CommentFormData = z.infer<typeof commentSchema>;

export const postSchema = z.object({
  desc: z
    .string()
    .trim()
    .min(1, "Post cannot be empty!!")
    .max(510, "Post must be less than 510 characters"),
});

export type PostFormData = z.infer<typeof postSchema>;
