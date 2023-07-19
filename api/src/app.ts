import express from "express"
import swaggerUi from "swagger-ui-express";

import swaggerDefinition from "./swagger.json";

import { health } from "./routes/dev/health";

export const app = express();

/**
 * mount middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * base url
 */
const jiliTodoBaseUrl = "/jilitodo/v1";

/**
 * mount routes
 */
app.use(jiliTodoBaseUrl, health);

/**
 * mount swagger
 */
app.use(
  jiliTodoBaseUrl + "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDefinition)
);

