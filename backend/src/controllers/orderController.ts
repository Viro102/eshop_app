import { Request, Response } from "express";
import { OrderModel } from "../models/orderModel";

const createOrder = async (req: Request, res: Response) => {
  try {
    await OrderModel.create(req.body);
    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating the order " + error });
  }
};

const getAllUserOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderModel.getAllByUser(parseInt(req.params.id));
    if (orders.length <= 0) {
      res.status(404).json({ message: "Orders not found" });
      return;
    }
    res.status(200).json({ message: "Orders found!", data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders " + error });
  }
};

const addProductsToOrder = async (req: Request, res: Response) => {
  try {
    await OrderModel.insertOrderItems(parseInt(req.params.id), req.body);
    res.status(201).json({ message: "Order items added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding the order items " + error });
  }
};

export { createOrder, getAllUserOrders, addProductsToOrder };
