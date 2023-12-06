import { Request, Response } from "express";
import { dbConnection } from "../server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/userModel";

//  TODO: rewrite to use Promise
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

    res.status(201).json({ message: "User created successfully", record: req.body });
  } catch (error) {
    console.error("Error creating the user", error);

    res.status(500).json({ message: "Error creating the user", error });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const users = await dbConnection.execute<User[]>(`SELECT * FROM users WHERE email = ?`, [
      email,
    ]);

    if (users[0].length === 0) {
      console.error("User not found");

      return res.status(401).json({ error: { message: "Invalid email or password" } });
    }

    const hashedPassword = users[0][0].password;
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordMatch) {
      console.log("Login successful");
      const token = jwt.sign(
        {
          userId: users[0][0].id,
        },
        process.env.JWT_SECRET as jwt.Secret,
        {
          expiresIn: "1h",
        },
      );

      res.status(200).json({ data: { message: "Login successful", user: users[0][0], token } });
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
