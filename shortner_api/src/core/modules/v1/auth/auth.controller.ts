import { Request, Response } from "express";
import { loginInput, registerInput } from "./auth.validator";
import { ApiError } from "../../../error/ApiError";
import { initUser, retrieveUser } from "./auth.service";
import { sendSuccess } from "../../../../utils/apiResponse";
import jwt from "jsonwebtoken";
import { config } from "../../../../config";

export async function registerUser(req: Request, res: Response) {
  const validation = registerInput.safeParse(req.body);
  if (!validation.success) {
    throw new ApiError(400, "BAD_REQUEST", "Invalid Input");
  }

  try {
    const { email, username, password } = validation.data;

    const createdUser = await initUser(email, username, password);

    sendSuccess(
      res,
      {
        createdUser,
      },
      "Your account has been created!",
      200,
    );
  } catch (error: any) {
    throw new ApiError(
      500,
      "INTERNAL_SERVER_ERROR",
      `We ran on to a error: ${error}`,
    );
  }
}

export async function loginUser(req: Request, res: Response) {
  const validation = loginInput.safeParse(req.body);
  if (!validation.success) {
    throw new ApiError(400, "BAD_REQUEST", "Invalid Input");
  }

  try {
    const { email, password } = validation.data;
    const user = await retrieveUser(email, password);

    const token = jwt.sign(
      { userId: user.id, userEmail: user.email },
      config.JWT_SECRET!,
      {
        expiresIn: "3d",
      },
    );

    sendSuccess(
      res,
      {
        token,
      },
      "You are now logged in",
      200,
    );
  } catch (error: any) {
    throw new ApiError(500, "INTERNAL_SERVER_ERROR", error);
  }
}
