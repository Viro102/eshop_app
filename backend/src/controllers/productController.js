import { dbConnection } from "../../server.js";

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

function read(id) {
  dbConnection.query(`SELECT * FROM products WHERE id=${id}`);
}

function update(title, name, price, category, desc) {
  dbConnection.query(
    `INSERT INTO products(title, name, price, category, description) VALUES(${title}, ${name}, ${price}, ${category}, ${desc})`
  );
}

function remove(id) {
  dbConnection.query(`DELETE FROM products WHERE id=${id}`);
}

export { createTable, read, update, remove };

app.get("/api/products", (req, res) => {
  try {
    const [rows] = dbConnection.query("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "An error occurred while fetching products." });
  } finally {
    dbConnection.end();
  }
});
