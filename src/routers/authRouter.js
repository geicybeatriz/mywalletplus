import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import {signInSchema, signUpSchema} from "../Schemas/authSchema.js";
import validSchema from "../middlewares/validateSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", validSchema(signUpSchema), signUp);
authRouter.post("/sign-in", validSchema(signInSchema), signIn);

export default authRouter;