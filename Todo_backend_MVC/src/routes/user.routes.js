import { Router } from "express";
import { createUser,loginUser } from "../controller/user.controller.js";

const userRouter = Router();
// route --> 2 two arguments--> path and controller function


userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);


export default userRouter;