import express from "express";
import { addOrderDetails, createOrder, getAllUserOrders } from "../controllers/orderController";

const router = express.Router();

router.post("/user/:id", createOrder);
router.post("/order/:id", addOrderDetails);
router.get("/user/:id", getAllUserOrders);

export default router;
