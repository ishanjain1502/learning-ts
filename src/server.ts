import express from "express"
import cors from "cors";
import { Application } from "express";
import AppConfig from "./config/appConfig";
import errorHandler from "./api/middleware/handlers/error";
import swaggerUi from "swagger-ui-express";
import { specs } from "./utils/swagger";
import MorganMiddleware from "./api/middleware/morgan";
// import routesV1 from "./api/routes/v1"


export function createServer(): Application {
  const app = express();
  const corsOption = {
    origin: "*",
    credentials: true,
  };
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors(corsOption));
  app.use(MorganMiddleware);
//   app.use(`/api/${AppConfig.app.apiVersion}`, routesV1);

  if (AppConfig.app.isDevelopment) {
    app.use(
        `/docs/${AppConfig.app.apiVersion}`,
        swaggerUi.serve,
        swaggerUi.setup(specs)
    );
  }

  app.use(errorHandler);

  return app;
}
