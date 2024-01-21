import { Connection } from "mariadb";
import dbConnection from "../dbConnection";

class OrderModel {
  static async create(userId: number): Promise<void> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      await conn.execute(`INSERT INTO orders (user_id) VALUES (?)`, [userId]);
    } finally {
      if (conn) conn.end();
    }
  }

  static async getAllByUser(userId: number): Promise<Order[]> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const orders = await conn.query<Order[]>(`SELECT * FROM orders WHERE user_id = ?`, [userId]);
      return orders || [];
    } finally {
      if (conn) conn.end();
    }
  }

  static async getOrderDetails(orderId: number): Promise<Order[]> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const orderItems = await conn.execute(
        `SELECT order_items.* FROM order_items
        JOIN orders ON order_items.order_id = orders.id
        WHERE orders.id = ?`,
        [orderId]
      );

      return orderItems || [];
    } finally {
      if (conn) conn.end();
    }
  }
}

export { OrderModel };
