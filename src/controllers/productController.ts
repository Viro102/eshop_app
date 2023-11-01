import { dbConnection } from "../server";

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

function read(id:number) {
  dbConnection.query(`SELECT * FROM products WHERE id=${id}`);
}

function update(title:string, name:string, price:number, category:string, desc:string) {
  dbConnection.query(
    `INSERT INTO products(title, name, price, category, description) VALUES(${title}, ${name}, ${price}, ${category}, ${desc})`
  );
}

function remove(id:number) {
  dbConnection.query(`DELETE FROM products WHERE id=${id}`);
}

export { createTable, read, update, remove };
