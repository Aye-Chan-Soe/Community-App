import { NextResponse } from "next/server";
import { ZodError } from "zod";

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
  let status = 500;
  let message = e instanceof Error ? e.message : "Internal Server Error!";
  let details = null;

  //Validation Error
  if (e instanceof ZodError) {
    details = e.flatten().fieldErrors;
    message = "Validation Error!";
    status = 400;
  }

  return NextResponse.json(
    {
      message,
      success: false,
      details,
      status: 500,
    },
    { status }
  );
};

export const actionError = (e: unknown) => {
  let message = e instanceof Error ? e.message : "Internal Server Error!";
  let details = null;

  //Validation Error
  if (e instanceof ZodError) {
    details = e.flatten().fieldErrors;
    message = "Validation Error!";
  }

  return;
  {
    message;
    success: false;
    details;
  }
};
