import express from "express";
import { auth } from "./../middlewares/auth.js";
import {
  getPublishCreations,
  getToggleLikeCreations,
  getUserCreations,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/get-user-creations", auth, getUserCreations);
userRouter.get("/get-published-creations", auth, getPublishCreations);
userRouter.get("/toggle-like-creations", auth, getToggleLikeCreations);

export default userRouter;
