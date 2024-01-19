import express from "express";
import { loginUser, signUpUser, logoutUser } from "../controllers/userController";

const router = express.Router();

router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/sign-up", signUpUser);

export default router;
