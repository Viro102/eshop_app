import express from "express";
import mysql from "mysql2";
import { Product } from "./src/models/productModel.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on http://0.0.0.0:${port}`);
});

// TODO: .env integeraiton
export const dbConnection = mysql.createConnection({
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
