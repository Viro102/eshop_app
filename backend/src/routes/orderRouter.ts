import express from "express";
import { createOrder, getAllUserOrders, getOrderDetails } from "../controllers/orderController";

const router = express.Router();

router.post("/:id", createOrder);
router.get("/user/:id", getAllUserOrders);
router.get("/:id", getOrderDetails);

export default router;
