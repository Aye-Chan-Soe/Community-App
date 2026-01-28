import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(100),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(30, { message: "Username must be at most 30 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can contain letters, numbers and underscores only",
    }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(128, { message: "Password must be at most 128 characters" }),
});

export type SignupInput = z.infer<typeof SignupSchema>;

export default SignupSchema;
