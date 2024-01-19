import { Connection } from "mariadb";
import dbConnection from "../dbConnection";

class ProductModel {
  static async create(product: Product): Promise<void> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      await conn.execute(
        `INSERT INTO products (title, category, image_url, price, description, rating) 
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
          product.title,
          product.category,
          product.image_url,
          product.price,
          product.description,
          product.rating,
        ]
      );
    } finally {
      if (conn) conn.end();
    }
  }

  static async getAll(): Promise<Product[]> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const results = await conn.execute<Product[]>(`SELECT * FROM products`);
      return results;
    } finally {
      if (conn) conn.end();
    }
  }

  static async getById(id: number): Promise<Product | null> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const [product] = await conn.execute<Product[]>(`SELECT * FROM products WHERE id = ?`, [id]);
      return product || null;
    } finally {
      if (conn) conn.end();
    }
  }

  static async update(id: number, updatedData: Partial<Product>): Promise<void> {
    let conn: Connection | null = null;
    try {
      const updateColumns = Object.keys(updatedData)
        .map((column) => `${column} = ?`)
        .join(", ");

      const query = `UPDATE products SET ${updateColumns} WHERE id = ?`;

      const values = [...Object.values(updatedData), id];

      conn = await dbConnection.getConnection();
      await conn.execute(query, values);
    } finally {
      if (conn) conn.end();
    }
  }

  static async delete(id: number): Promise<void> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      await conn.execute(`DELETE FROM products WHERE id = ?`, [id]);
    } finally {
      if (conn) conn.end();
    }
  }
}

export { ProductModel };
