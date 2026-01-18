import User from "@/database/user.model";
import dbConnect from "@/lib/dbConnect";
import { handleSuccessResponse, handleErrorResponse } from "@/lib/response";
import userSchema from "@/lib/userSchema";
import ValidateBody from "@/lib/validateBody";

export async function GET() {
  try {
    await dbConnect();
    let users = await User.find();
    return handleSuccessResponse(users);
  } catch (e: unknown) {
    return handleErrorResponse(e);
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    let body = await request.json();

    ValidateBody(body, userSchema);

    let existingEmail = await User.findOne({ email: body.email });
    if (existingEmail) throw new Error("Email already exist!");

    const existingUsername = await User.findOne({ username: body.username });
    if (existingUsername) throw new Error("Username already exist!");

    const newUser = await User.create(body);
    return handleSuccessResponse(newUser, 201);
  } catch (e: unknown) {
    return handleErrorResponse(e);
  }
}
