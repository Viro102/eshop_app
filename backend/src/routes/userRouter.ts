import express from "express";
import { loginUser, getUserById, signUpUser, statusUser } from "../controllers/userController";

const router = express.Router();

router.post("/login", loginUser);
router.post("/sign-up", signUpUser);
router.get("/:id", getUserById);
router.get("/", statusUser);

export default router;
