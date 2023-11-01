import express from "express";
import ViteExpress from "vite-express";
import mysql from "mysql2/promise";
import { createTable } from "./controllers/productController";

const app = express();
const port = 3000;

app.use(express.json());

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

createTable();

export { dbConnection, app };
