import Account from "@/database/account.model";
import accountSchema from "@/lib/schemas/accountSchema";
import dbConnect from "@/lib/dbConnect";
import { handleSuccessResponse, handleErrorResponse } from "@/lib/response";
import ValidateBody from "@/lib/validateBody";

// get all accounts
export async function GET() {
  try {
    await dbConnect();
    let accounts = await Account.find();
    return handleSuccessResponse(accounts);
  } catch (e: unknown) {
    return handleErrorResponse(e);
  }
}

// create an account
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { provider, providerAccountId } = body;

    ValidateBody(body, accountSchema);

    const existingAccount = await Account.findOne({
      provider,
      providerAccountId,
    });
    if (existingAccount) throw new Error("Account already exist!");

    const newAccount = await Account.create(body);
    return handleSuccessResponse(newAccount, 201);
  } catch (e: unknown) {
    return handleErrorResponse(e);
  }
}
