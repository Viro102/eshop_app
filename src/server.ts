import express from "express";
import ViteExpress from "vite-express";
import mysql from "mysql2/promise";

import { getAllProducts, getProductById } from "./controllers/productController";
import { loginUser, signUpUser } from "./controllers/userController";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/products", (_req, res) => {
  console.log("GET /products");
  getAllProducts(res);
});

app.get("/api/product/:id", (req, res) => {
  console.log("GET /product/" + req.params.id);
  getProductById(req, res);
});

app.post("/api/login", (req, res) => {
  console.log("POST /login");
  console.log("Request", req.body);
  loginUser(req, res);
});

app.post("/api/logout", (req, res) => {
  // TODO: implement logout
  console.log("POST /logout");
});

app.post("/api/sign-up", (req, res) => {
  console.log("POST /sign-up");
  console.log("Request", req.body);
  signUpUser(req, res);
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
