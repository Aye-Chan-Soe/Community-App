"use server";

import dbConnect from "../dbConnect";
import mongoose from "mongoose";
import { actionError } from "../response";
import ValidateBody from "../validateBody";
import SignupSchema from "../schemas/SignupSchema";
import User from "@/database/user.model";
import Account from "@/database/account.model";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";

export async function SignUpWithCredentials(params: {
  name: string;
  username: string;
  email: string;
  password: string;
}) {
  await dbConnect();
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const validatedData = ValidateBody(params, SignupSchema);
    const { name, username, email, password } = validatedData.data;

    const exisitingUser = await User.findOne({ email });
    if (exisitingUser) {
      throw new Error("Email already exists");
    }

    const exisitingUserName = await User.findOne({ username });
    if (exisitingUserName) {
      throw new Error("Username already exists");
    }

    const [newUser] = await User.create([
      {
        name,
        username,
        email,
      },
      { session },
    ]);

    await Account.create([
      {
        userId: newUser._id,
        name,
        provider: "credentials",
        providerAccountId: email,
        password: await bcrypt.hash(password, 10),
      },
      { session },
    ]);

    await session.commitTransaction();
    await signIn("credentials", { email, password, redirect: false });
    return { success: true };
  } catch (error) {
    await session.abortTransaction();
    return actionError(error);
  } finally {
    await session.endSession();
  }
}
