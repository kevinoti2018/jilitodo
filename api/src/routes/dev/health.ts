import { Router }  from "express"
import {checkHealth}  from "../../controllers/dev/dev/health"

export const health = Router();
const healthBaseUrl = "/dev/health";

/**
 * health get
 */
health.get(healthBaseUrl, checkHealth);

