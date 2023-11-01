import { dbConnection } from "../server";
import Product from "../models/productModel";
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2/promise";

const createTableSQL = `
  CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        category VARCHAR(50) NOT NULL,
        description TEXT NOT NULL
        )`;

function createTable() {
  dbConnection.query(createTableSQL);
}

const createProduct = async (req: Request, res: Response) => {
  try {
    // Extract product details from the request body
    const { title, name, price, category, description } = req.body;

    // Create a new Product instance using the data model
    const product = new Product(title, name, price, category, description);

    // Perform the actual database insertion (if you're using a database)
    await dbConnection.query("INSERT INTO products SET ?", product);

    // Return a success response with the created product or result
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    // Handle errors (e.g., validation, database errors)
    res.status(500).json({ message: "Error creating the product", error });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    // Perform the database query to fetch all products
    const products: RowDataPacket[] = (await dbConnection.query(
      "SELECT * FROM products",
    )) as RowDataPacket[];

    // Return the list of products in the response
    res.status(200).json(products);
  } catch (error) {
    // Handle errors (e.g., database errors)
    res.status(500).json({ message: "Error fetching products", error });
  }
};

const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId: string = req.params.id; // Extract the product ID from the URL

    // Perform the database query to fetch a product by its ID
    const product: RowDataPacket[] = (await dbConnection.query(
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
    await dbConnection.query("UPDATE products SET ? WHERE id = ?", [updatedProductData, productId]);

    // Return a success response with the updated product
    res.status(200).json({ message: "Product updated successfully", product: updatedProductData });
  } catch (error) {
    // Handle errors (e.g., validation, database errors)
    res.status(500).json({ message: "Error updating the product", error });
  }
};

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId: string = req.params.id; // Extract the product ID from the URL

    // Perform the database deletion query
    await dbConnection.query("DELETE FROM products WHERE id = ?", productId);

    // Return a success response
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    // Handle errors (e.g., database errors)
    res.status(500).json({ message: "Error deleting the product", error });
  }
};

export { createTable, createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
