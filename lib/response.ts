import { NextResponse } from "next/server";

export const handleSuccessResponse = (data: unknown, status: number = 200) => {
  return NextResponse.json(
    {
      data,
      success: true,
    },
    { status }
  );
};

export const handleErrorResponse = (e: unknown) => {
  return NextResponse.json(
    {
      message: e instanceof Error ? e.message : "Something went wrong",
      success: false,
      status: 500,
    },
    { status: 500 }
  );
};
