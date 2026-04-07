import express from "express";
import cors from "cors";
import { config } from "./config";
import registerRoutes from "./core/modules";

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: config.BASE_URL,
      credentials: true,
    }),
  );

  registerRoutes(app);

  return app;
};

export default createApp;
