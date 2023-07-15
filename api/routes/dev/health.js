const { Router } = require("express");
const { checkHealth } = require("../../controllers/dev/dev/health");

const health = Router();
const healthBaseUrl = "/dev/health";

/**
 * health get
 */
health.get(healthBaseUrl, checkHealth);

module.exports = { health };