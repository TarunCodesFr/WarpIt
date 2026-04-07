import { Application } from "express";
import v1 from "./v1/index";
import { logger } from "../../utils/logger";

export default function registerRoutes(app: Application): void {
  app.use("/api/v1", v1);
  logger.info("API V1 Routes Mounted Successfully");
}
