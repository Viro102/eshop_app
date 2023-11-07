import express from "express";
import ViteExpress from "vite-express";
import mysql from "mysql2/promise";
import { getAllProducts } from "./controllers/productController";

const app = express();
const port = 3000;

app.get("/bozo", (_req, res) => {
  res.send("Hello from /bozo");
});

app.get("/products", (_req, res) => {
  console.log("GET /products");
  getAllProducts().then((products) => {
    res.send(products);
  });
});

ViteExpress.listen(app, port, () => {
  console.log(`Server is 🔥 at http://localhost:${port}`);
});

// TODO: .env integration
const dbConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "eshop",
  connectionLimit: 10,
});

export { dbConnection, app };
