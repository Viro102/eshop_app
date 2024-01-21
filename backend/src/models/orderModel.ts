import { Connection, UpsertResult } from "mariadb";
import dbConnection from "../dbConnection";

class OrderModel {
  static async create(userId: number, body: { total: number }): Promise<number> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const result: UpsertResult = await conn.execute(
        `INSERT INTO orders (user_id, total) VALUES (?, ?)`,
        [userId, body.total]
      );
      const orderId = result.insertId;
      return orderId as number;
    } finally {
      if (conn) conn.end();
    }
  }

  static async addOrderDetails(
    orderId: number,
    product: { id: number; quantity: number; price: number }
  ): Promise<void> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      await conn.execute(
        `INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)`,
        [orderId, product.id, product.quantity, product.price]
      );
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

  static async getOrderDetails(orderId: number): Promise<OrderItem[]> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const orderItems = await conn.execute(
        `SELECT * FROM order_items
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
