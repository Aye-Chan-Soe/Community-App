import { z } from "zod";
import { Types } from "mongoose";

// Validation schema for account
export const accountSchema = z.object({
  userId: z.string().min(1, {
    message: "User Id is required",
  }),
  name: z.string().min(1, { message: "Name is required" }),
  image: z.string().url({ message: "Image must be a valid URL" }).optional(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .optional(),
  provider: z.string().min(1, { message: "Provider is required" }),
  providerAccountId: z
    .string()
    .min(1, { message: "providerAccountId is required" }),
});

export default accountSchema;
