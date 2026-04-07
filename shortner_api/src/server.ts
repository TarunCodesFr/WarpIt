import createApp from "./app";
import { config } from "./config";
import { logger } from "./utils/logger";
import { createServer } from "http";

const startServer = async () => {
  try {
    if (!config.PORT) {
      throw new Error("Missing required envoirment variables");
    }

    const app = createApp();
    const server = createServer(app);

    server.listen(config.PORT, () => {
      logger.info(`Server running on port ${config.PORT}`);
      logger.info(`Envoirment: ${config.NODE_ENV}`);
    });
  } catch (error: any) {
    logger.error(`Failed to start server: `, error);
    process.exit(1);
  }
};

startServer();
