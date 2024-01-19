import express from "express";
import { loginUser, logoutUser, signUpUser, statusUser } from "../controllers/userController";

const router = express.Router();

router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/sign-up", signUpUser);
router.get("/", statusUser);

export default router;
