import { ApiError } from "../../../error/ApiError";
import { prisma } from "../../../../packages/prisma";

export async function initNewUrl(originalUrl: string, shortCode: string) {
  const shortLink = await prisma.link.create({
    data: {
      redirectUrl: originalUrl,
      shortCode: shortCode,
    },
  });
}

export async function retrieveOriginalLink(shortCode: string) {
  const link = await prisma.link.findFirst({
    where: {
      shortCode: shortCode,
    },
  });

  if (!link) {
    throw new ApiError(
      200,
      "BAD_REQUEST",
      "No Redirect Link found with this redirect Code!",
    );
  }
  return link.redirectUrl;
}
