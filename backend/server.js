import express from "express";
import mysql from "mysql2";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on localhost:${port}`);
});

// TODO: .env integeraiton
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "eshop",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

connection.end();
