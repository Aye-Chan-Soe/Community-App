import Account from "@/database/account.model";
import User from "@/database/user.model";
import dbConnect from "@/lib/dbConnect";
import { handleSuccessResponse } from "@/lib/response";
import signinWithOauthSchema from "@/lib/schemas/signinWithOauthSchema";
import SignnWithOauthSchema from "@/lib/schemas/signinWithOauthSchema";
import ValidateBody from "@/lib/validateBody";
import slugify from "slugify";

export async function POST(request: Request) {
  let { provider, providerAccountId, user } = await request.json();
  await dbConnect();

  // set up session
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const validatedData = ValidateBody(
      {
        provider,
        providerAccountId,
        user,
      },
      signinWithOauthSchema
    );

    let { email, image, name, username } = validatedData.data.user;

    // find user
    let existingUser = await User.findOne({
      email,
    }).session(session);

    if (!existingUser) {
      [existingUser] = await User.create(
        [
          {
            email,
            image,
            name,
            username: slugify(username, {
              lower: true,
              strict: true,
              trim: true,
            }),
          },
        ],
        { session }
      );
    } else {
      await User.updateOne(
        {
          _id: existingUser._id,
        },
        {
          $set: {
            image,
            name,
          },
        }
      ).session(session);
    }

    // find account
    const existingAccount = await Account.findOne({
      userId: existingUser._id,
      provider,
      providerAccountId,
    }).session(session);

    if (!existingAccount) {
      await Account.create(
        [
          {
            userId: existingUser._id,
            provider,
            providerAccountId,
            name,
            image,
          },
        ],
        { session }
      );
    }

    // commit transaction
    await session.commitTransaction();
    return handleSuccessResponse({
      existingUser,
    });
  } catch (error: unknown) {
    console.log(error);
    session.abortTransaction();
  } finally {
    session.endSession();
  }
}
