import { Connection } from "mariadb";
import dbConnection from "../dbConnection";

class ReviewModel {
  static async create(review: Review): Promise<void> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      await conn.execute(
        `INSERT INTO reviews (user_id, product_id, rating, comment) 
              VALUES (?, ?, ?, ?)`,
        [review.user_id, review.product_id, review.rating, review.comment]
      );
    } finally {
      if (conn) conn.end();
    }
  }

  static async getAll(): Promise<Review[]> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const results = await conn.execute<Review[]>(`SELECT * FROM reviews`);
      return results;
    } finally {
      if (conn) conn.end();
    }
  }

  static async getAllByProductId(id: number): Promise<Review[] | null> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const results = await conn.execute<Review[]>(`SELECT * FROM reviews WHERE product_id = ?`, [
        id,
      ]);
      return results || null;
    } finally {
      if (conn) conn.end();
    }
  }

  static async getAllByUserId(userId: number): Promise<Review[] | null> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const results = await conn.query<Review[]>(`SELECT * FROM reviews WHERE user_id = ?`, [
        userId,
      ]);
      return results;
    } finally {
      if (conn) conn.end();
    }
  }

  static async update(id: number, updatedData: Partial<Review>): Promise<void> {
    let conn: Connection | null = null;
    try {
      const updateColumns = Object.keys(updatedData)
        .map((column) => `${column} = ?`)
        .join(", ");

      const query = `UPDATE reviews SET ${updateColumns} WHERE id = ?`;

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
      await conn.execute(`DELETE FROM reviews WHERE id = ?`, [id]);
    } finally {
      if (conn) conn.end();
    }
  }
}

export { ReviewModel };
