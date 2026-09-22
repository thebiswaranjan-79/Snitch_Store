import { Router } from "express";
import { register } from "../controller/auth.controller.js";
import { registerValidator } from "../validators/auth.validators.js";

const router = Router();

/**
 * @POST /api/auth/register
 * @param req Express req
 * @param req.body = { email,name,password }
 * @response res.status = 201 (if successful)
 */

router.post("/register", registerValidator, register);

export default router;
