import express from "express";
import ViteExpress from "vite-express";
import mysql from "mysql2";

import { Product } from "./models/productModel.ts";

const app = express();
const port = 3000;

const server = ViteExpress.listen(app, port, () => {
  console.log(`Server is 🔥 at http://localhost:${port}`);
});

// TODO: .env integeraiton
const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "eshop",
});

const products = [];
const pr = new Product(
  "i7-14500K",
  "Intel Core i7-14500K",
  200,
  "CPU",
  "Desktop CPU with bozo cores and immeasureable strength 😘"
);

products.push(pr);

export {dbConnection, app};