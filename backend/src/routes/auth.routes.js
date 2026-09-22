import {Router} from "express";

const router = Router();

/**
 * @POST /api/auth/register
 * @param req Express req
 * @param req.body = { email,name,password }
 * @response res.status = 201 (if successful)
 */

router.post("/register", registerValidator, registerController);

export default router;