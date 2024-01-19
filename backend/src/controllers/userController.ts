import { Request, Response } from "express";
import { dbConnection } from "../app";
import { Connection } from "mariadb";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/userModel";

//  TODO: form validation, error handling
const signUpUser = async (req: Request, res: Response) => {
  let conn: Connection | null = null;
  try {
    const { email, password } = req.body;
    const username = email.split("@")[0];
    const hashedPassword = await bcrypt.hash(password, 10);
    conn = await dbConnection.getConnection();
    await conn.execute(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, [
      username,
      email,
      hashedPassword,
    ]);

    res.status(201).json({ message: "User created successfully", record: req.body });
  } catch (error) {
    console.error("Error creating the user", error);

    res.status(500).json({ message: "Error creating the user", error });
  } finally {
    if (conn) conn.end();
  }
};

const loginUser = async (req: Request, res: Response) => {
  let conn: Connection | null = null;
  try {
    const { email, password } = req.body;
    conn = await dbConnection.getConnection();
    const [user] = await conn.execute<User[]>(`SELECT * FROM users WHERE email = ?`, [email]);

    if (!user) {
      console.error("User not found");

      return res.status(401).json({ error: { message: "Invalid email or password" } });
    }

    const hashedPassword = user.password;
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordMatch) {
      console.log("Login successful");
      const token = jwt.sign(
        {
          userId: user.id,
        },
        process.env.JWT_SECRET as jwt.Secret,
        {
          expiresIn: "1h",
        }
      );

      console.log("Token", token);

      res.status(200).json({ data: { message: "Login successful", user: user, token } });
    } else {
      console.error("Invalid email or password");

      res.status(401).json({ error: { message: "Invalid email or password" } });
    }
  } catch (error) {
    console.error("Error during login:", error);

    res.status(500).json({ error: { message: "Error during login", details: error } });
  } finally {
    if (conn) conn.end();
  }
};

const logoutUser = async (req: Request, res: Response) => {
  try {
    console.log("Logout successful");
    res.status(200).json({ data: { message: "Logout successful" } });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ error: { message: "Error during logout", details: error } });
  }
};

export { loginUser, signUpUser, logoutUser };
