import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(128, { message: "Password must be at most 128 characters" }),
});

export type SignInInput = z.infer<typeof SignInSchema>;

export default SignInSchema;
