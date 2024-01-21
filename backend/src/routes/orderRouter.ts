import express from "express";
import { addProductsToOrder, createOrder, getAllUserOrders } from "../controllers/orderController";

const router = express.Router();

router.post("/", createOrder);
router.post("/:id", addProductsToOrder);
router.get("/:id", getAllUserOrders);

export default router;
