import { Connection } from "mariadb";
import dbConnection from "../dbConnection";
import bcrypt from "bcrypt";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

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
}

export { UserModel };
