import { dbConnection } from "../server";
import { Request, Response } from "express";
import { Product } from "../models/productModel";

//  TODO: rewrite to use Promise https://dev.to/larswaechter/using-mysql-in-nodejs-with-typescript-ida
const createProduct = async (req: Request, res: Response) => {
  try {
    const product: Product = req.body;

    await dbConnection.execute(
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

    res.status(201).json({ message: "Record created successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating the record", error });
  }
};

const getAllProducts = async (res: Response) => {
  try {
    const records = await dbConnection.execute<Product[]>(`SELECT * FROM products`);

    res.status(200).json(records[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching records", error });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const recordID: string = req.params.id;
    console.log(recordID);

    const record = await dbConnection.execute(`SELECT * FROM products WHERE id = ?`, [recordID]);

    if (!record) {
      res.status(404).json({ message: "Record not found" });
      return;
    }

    res.status(200).json(record[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching the record", error });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const recordID: string = req.params.id;
    const updatedData = req.body;

    await dbConnection.execute(`UPDATE products SET ? WHERE id = ?`, [updatedData, recordID]);

    res.status(200).json({ message: "Record updated successfully", updatedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating the record", error });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const recordID: string = req.params.id;

    await dbConnection.execute(`DELETE FROM products WHERE id = ?`, [recordID]);

    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting the record", error });
  }
};

export { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
