import { Connection } from "mariadb";
import dbConnection from "../dbConnection";

class OrderModel {
  static async create(order: Order): Promise<void> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      await conn.execute(`INSERT INTO orders (user_id) VALUES (?)`, [order.user_id]);
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

  static async insertOrderItems(orderId: number, orderItems: OrderItem[]): Promise<void> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const query = `INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ?`;
      const values = orderItems.map((item) => [
        orderId,
        item.product_id,
        item.quantity,
        item.price,
      ]);
      await conn.execute(query, [values]);
    } finally {
      if (conn) conn.end();
    }
  }
}

export { OrderModel };
