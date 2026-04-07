import { prisma } from "../packages/prisma";
import crypto from "crypto";

export async function generateUniqueShortCode(length = 6) {
  let shortCode;
  let isUnique = false;

  while (!isUnique) {
    shortCode = crypto
      .randomBytes(length)
      .toString("base64url")
      .slice(0, length);
    const existing = await prisma.link.findUnique({ where: { shortCode } });
    if (!existing) isUnique = true;
  }
  return shortCode as string;
}
