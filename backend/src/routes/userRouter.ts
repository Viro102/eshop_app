import express from "express";
import {
  loginUser,
  getUserById,
  signUpUser,
  statusUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();

router.post("/sign-up", signUpUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

router.post("/login", loginUser);
router.get("/auth", statusUser);

export default router;
