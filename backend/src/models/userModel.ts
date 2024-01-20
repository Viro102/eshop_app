import { Connection } from "mariadb";
import dbConnection from "../dbConnection";
import bcrypt from "bcrypt";

class UserModel {
  static async create(email: string, password: string): Promise<void> {
    let conn: Connection | null = null;
    try {
      const username = email.split("@")[0];
      const hashedPassword = await bcrypt.hash(password, 10);
      conn = await dbConnection.getConnection();
      await conn.execute(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, [
        username,
        email,
        hashedPassword,
      ]);
    } finally {
      if (conn) conn.end();
    }
  }

  static async findByEmail(email: string): Promise<User | null> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const [user] = await conn.execute<User[]>(`SELECT * FROM users WHERE email = ?`, [email]);
      return user || null;
    } finally {
      if (conn) conn.end();
    }
  }

  static async findById(userId: any): Promise<User | null> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const [user] = await conn.execute<User[]>(`SELECT * FROM users WHERE id = ?`, [userId]);
      return user || null;
    } finally {
      if (conn) conn.end();
    }
  }

  static async getAll(): Promise<User[] | null> {
    let conn: Connection | null = null;
    try {
      conn = await dbConnection.getConnection();
      const user = await conn.execute<User[]>(`SELECT * FROM users`);
      return user || null;
    } finally {
      if (conn) conn.end();
    }
  }

  static async update(id: number, updatedData: Partial<User>): Promise<void> {
    let conn: Connection | null = null;
    try {
      const updateColumns = Object.keys(updatedData)
        .map((column) => `${column} = ?`)
        .join(", ");

      const query = `UPDATE users SET ${updateColumns} WHERE id = ?`;

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
      await conn.execute(`DELETE FROM users WHERE id = ?`, [id]);
    } finally {
      if (conn) conn.end();
    }
  }
}

export { UserModel };
