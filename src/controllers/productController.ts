import { dbConnection } from "../server";
import type { Product } from "../models/productModel";
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2/promise";

const createTableSQL = `
  CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        category VARCHAR(50) NOT NULL,
        description TEXT NOT NULL
        )`;

function createTable() {
  dbConnection.execute(createTableSQL);
}

const createProduct = async (req: Request, res: Response) => {
  try {
    const product: Product = req.body;

    await dbConnection.execute("INSERT INTO products SET ?", product);

    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error creating the product", error });
  }
};

const getAllProducts = async () => {
  try {
    const products = await dbConnection.execute("SELECT * FROM products");
    return products;
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const productId: string = req.params.id; // Extract the product ID from the URL

    // Perform the database query to fetch a product by its ID
    const product: RowDataPacket[] = (await dbConnection.execute(
      "SELECT * FROM products WHERE id = ?",
      productId,
    )) as RowDataPacket[];

    // Check if the product exists
    if (!product || product.length === 0) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    // Return the specific product in the response
    res.status(200).json(product[0]);
  } catch (error) {
    // Handle errors (e.g., database errors)
    res.status(500).json({ message: "Error fetching the product", error });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId: string = req.params.id; // Extract the product ID from the URL
    const updatedProductData = req.body; // New product data

    // Perform the database update query
    await dbConnection.execute("UPDATE products SET ? WHERE id = ?", [
      updatedProductData,
      productId,
    ]);

    // Return a success response with the updated product
    res.status(200).json({ message: "Product updated successfully", product: updatedProductData });
  } catch (error) {
    // Handle errors (e.g., validation, database errors)
    res.status(500).json({ message: "Error updating the product", error });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId: string = req.params.id; // Extract the product ID from the URL

    // Perform the database deletion query
    await dbConnection.execute("DELETE FROM products WHERE id = ?", productId);

    // Return a success response
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    // Handle errors (e.g., database errors)
    res.status(500).json({ message: "Error deleting the product", error });
  }
};

export { createTable, createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
