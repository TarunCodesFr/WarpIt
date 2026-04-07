import { ApiError } from "../../../error/ApiError";
import { generateUniqueShortCode } from "../../../../utils/shortCodeGenerator";
import { Request, Response } from "express";
import { initNewUrl, retrieveOriginalLink } from "./link.service";
import { sendSuccess } from "../../../../utils/apiResponse";
import { config } from "../../../../config";
import { error } from "node:console";

export async function createRedirectLink(req: Request, res: Response) {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    throw new ApiError(200, "BAD_REQUEST", "Please enter a valid url first!");
  }

  const shortCode = await generateUniqueShortCode();

  try {
    const shortenUrl = await initNewUrl(originalUrl, shortCode);

    sendSuccess(
      res,
      { shortUrl: `${config.BASE_URL}/${shortCode}` },
      "Here is your Short Url",
      200,
    );
  } catch (error: any) {
    throw new ApiError(500, "INTERNAL_SERVER_ERROR", error);
  }
}

export async function redirectToOriginalLink(req: Request, res: Response) {
  const shortCode = req.params.shortCode as string;
  if (!shortCode) {
    throw new ApiError(200, "BAD_REQUEST", "No URL Code is found!");
  }

  try {
    const originalLink = await retrieveOriginalLink(shortCode);
    // sendSuccess(res, {link: `${config.BASE_URL}/${shortCode}`, "Redirected Successfully!"})
    res.redirect(originalLink);
  } catch (error: any) {
    throw new ApiError(500, "INTERNAL_SERVER_ERROR", error);
  }
}
