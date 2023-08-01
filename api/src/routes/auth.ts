import { Router } from "express";
import { register } from "../controllers/controller";

const auth = Router();
const authBaseUrl = "/dev/auth";

/**
 * register
 */
auth.post(authBaseUrl + "/register", register);

export { auth };