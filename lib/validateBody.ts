import { ZodError, ZodSchema } from "zod";
import userSchema from "./userSchema";

const ValidateBody = (body: unknown, schema: ZodSchema) => {
  //Validation
  const validatedData = schema.safeParse(body);
  if (!validatedData.success) {
    throw new ZodError(validatedData.error.issues);
  }
  return validatedData;
};

export default ValidateBody;
