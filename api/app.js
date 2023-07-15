const express = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = require("./swagger.json");
const { health } = require("./routes/dev/health");

const app = express();

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

module.exports = app;