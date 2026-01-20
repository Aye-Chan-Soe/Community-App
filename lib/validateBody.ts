import { ZodError, ZodSchema } from "zod";

const ValidateBody = (
  body: unknown,
  schema: ZodSchema,
  partial: boolean = false
) => {
  //Validation
  const validatedData = partial
    ? schema.partial().safeParse(body)
    : schema.safeParse(body);
  if (!validatedData.success) {
    throw new ZodError(validatedData.error.issues);
  }
  return validatedData;
};

export default ValidateBody;
