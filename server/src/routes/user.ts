import { getUsers } from "../controllers/users";
import { Router } from "express";

const userRouter = Router();

userRouter.get("/", getUsers);

export default userRouter;
