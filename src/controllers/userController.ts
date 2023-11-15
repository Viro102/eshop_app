import { Request, Response } from "express";
import { dbConnection } from "../server";
import bcrypt from "bcrypt";
import { RowDataPacket } from "mysql2";

const signUpUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const username = email.split("@")[0];
    const hashedPassword = await bcrypt.hash(password, 10);

    await dbConnection.execute(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, [
      username,
      email,
      hashedPassword,
    ]);

    res.status(201).json({ message: "Record created successfully", record: req.body });
  } catch (error) {
    console.error("Error creating the record", error);

    res.status(500).json({ message: "Error creating the record", error });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const [user] = await dbConnection.execute(`SELECT * FROM users WHERE email = ?`, [email]);

    if ((user as RowDataPacket[]).length === 0) {
      console.error("User not found");

      return res.status(401).json({ error: { message: "Invalid email or password" } });
    }

    const hashedPassword = (user as RowDataPacket)[0].password;
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordMatch) {
      console.log("Login successful");

      res
        .status(200)
        .json({ data: { message: "Login successful", user: (user as RowDataPacket)[0] } });
    } else {
      console.error("Invalid email or password");

      res.status(401).json({ error: { message: "Invalid email or password" } });
    }
  } catch (error) {
    console.error("Error during login:", error);

    res.status(500).json({ error: { message: "Error during login", details: error } });
  }
};

export { loginUser, signUpUser };
