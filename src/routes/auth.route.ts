import { Router } from "express";
import { checkUserObj } from "../middlewares/userMiddleware.js";
import { signIn, signUp } from "../controllers/authControllers.js";

const router = Router();

router.post("/signup", checkUserObj, signUp);
router.post("/signin", checkUserObj, signIn);

export default router;