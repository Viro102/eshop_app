import { dbConnection } from "../server";
import { Request, Response } from "express";
import { Product } from "../models/productModel";
import { Connection } from "mariadb";

const createProduct = async (req: Request, res: Response) => {
  let conn: Connection | null = null;
  try {
    const product: Product = req.body;
    conn = await dbConnection.getConnection();
    await conn.execute(
      `INSERT INTO products(title,
      category,
      image_url,
      price,
      description,
      rating) VALUES(?, ?, ?, ?, ?, ?)`,
      [
        product.title,
        product.category,
        product.image_url,
        product.price,
        product.description,
        product.rating,
      ],
    );

    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating the product", error });
  } finally {
    if (conn) conn.end();
  }
};

const getAllProducts = async (res: Response) => {
  let conn: Connection | null = null;
  try {
    conn = await dbConnection.getConnection();
    const products: Product[] = await conn.execute<Product[]>(`SELECT * FROM products`);

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products", error });
  } finally {
    if (conn) conn.end();
  }
};

const getProductById = async (req: Request, res: Response) => {
  let conn: Connection | null = null;
  try {
    const productID: string = req.params.id;
    conn = await dbConnection.getConnection();
    const product = await conn.execute<Product[]>(`SELECT * FROM products WHERE id = ?`, [
      productID,
    ]);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching the product", error });
  } finally {
    if (conn) conn.end();
  }
};

const updateProduct = async (req: Request, res: Response) => {
  let conn: Connection | null = null;
  try {
    const productID: string = req.params.id;
    const updatedData = req.body;

    const updateColumns = Object.keys(updatedData)
      .map((column) => `${column} = ?`)
      .join(", ");

    const query = `UPDATE products SET ${updateColumns} WHERE id = ?`;

    const values = [...Object.values(updatedData), productID];

    conn = await dbConnection.getConnection();
    await conn.execute(query, values);

    res.status(200).json({ message: "Product updated successfully", updatedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating the product", error });
  } finally {
    if (conn) conn.end();
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  let conn: Connection | null = null;
  try {
    const productID: string = req.params.id;
    conn = await dbConnection.getConnection();
    await conn.execute(`DELETE FROM products WHERE id = ?`, [productID]);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting the product", error });
  } finally {
    if (conn) conn.end();
  }
};

export { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
