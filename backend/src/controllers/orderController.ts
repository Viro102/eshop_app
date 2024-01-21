import { Request, Response } from "express";
import { OrderModel } from "../models/orderModel";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderId = await OrderModel.create(parseInt(req.params.id), req.body);
    res.status(201).json({ message: "Order created successfully", data: Number(orderId) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating the order " + error });
  }
};

const addOrderDetails = async (req: Request, res: Response) => {
  try {
    await OrderModel.addOrderDetails(parseInt(req.params.id), req.body);
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

const getOrderDetails = async (req: Request, res: Response) => {
  try {
    const orderItems = await OrderModel.getOrderDetails(parseInt(req.params.id));
    if (orderItems.length <= 0) {
      res.status(404).json({ message: "Order items not found" });
      return;
    }
    res.status(200).json({ message: "Order items found!", data: orderItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching order items " + error });
  }
};

export { createOrder, getAllUserOrders, getOrderDetails, addOrderDetails };
