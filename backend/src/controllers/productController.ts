import { Request, Response } from "express";
import { ProductModel } from "../models/productModel";

const createProduct = async (req: Request, res: Response) => {
  try {
    await ProductModel.create(req.body);
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating the product", error });
  }
};

const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await ProductModel.getAll();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products", error });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.getById(parseInt(req.params.id));
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching the product", error });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    await ProductModel.update(parseInt(req.params.id), req.body);
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating the product", error });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    await ProductModel.delete(parseInt(req.params.id));
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting the product", error });
  }
};

export { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
