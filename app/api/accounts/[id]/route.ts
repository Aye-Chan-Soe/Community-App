import Account from "@/database/account.model";
import { handleErrorResponse, handleSuccessResponse } from "@/lib/response";
import accountSchema from "@/lib/accountSchema";
import validateBody from "@/lib/validateBody";
import { Types } from "mongoose";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid account id!");
    }
    const account = await Account.findById(id);
    if (!account) {
      throw new Error("Account not found!");
    }
    return handleSuccessResponse(account);
  } catch (e) {
    return handleErrorResponse(e);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid account id!");
    }
    const account = await Account.findByIdAndDelete(id);
    if (!account) {
      throw new Error("Account not found!");
    }
    return handleSuccessResponse(account);
  } catch (e) {
    return handleErrorResponse(e);
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid account id!");
    }

    const validatedData = validateBody(body, accountSchema, true);
    const account = await Account.findByIdAndUpdate(id, validatedData.data, {
      new: true,
    });
    if (!account) {
      throw new Error("Account not found!");
    }
    return handleSuccessResponse(account);
  } catch (e) {
    return handleErrorResponse(e);
  }
}
