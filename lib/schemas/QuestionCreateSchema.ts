import { z } from "zod";

export const QuestionCreateSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),

  content: z.string().min(1, { message: "Title is required" }),

  tags: z.array(z.string()).min(1, { message: "Tag is required" }),
});

export type SignInInput = z.infer<typeof QuestionCreateSchema>;

export default QuestionCreateSchema;
