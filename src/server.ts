import express from "express";
import ViteExpress from "vite-express";
import mysql from "mysql2/promise";
import { getAllRecords, getRecordById } from "./controllers/databaseController";

const app = express();
const port = 3000;

app.get("/products", (_req, res) => {
  console.log("GET /products");
  getAllRecords(_req, res, "products");
});

app.get("/product/:id", (req, res) => {
  console.log("GET /product/" + req.params.id);
  getRecordById(req, res, "products");
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
