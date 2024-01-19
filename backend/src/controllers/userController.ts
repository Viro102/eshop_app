import { Request, Response } from "express";
import { UserModel } from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const signUpUser = async (req: Request, res: Response) => {
  try {
    await UserModel.create(req.body.email, req.body.password);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating the user", error);
    res.status(500).json({ message: "Error creating the user", error });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findByEmail(email);

    if (!user) {
      return res.status(401).json({ error: { message: "Invalid email or password" } });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as jwt.Secret, {
        expiresIn: "1h",
      });
      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(401).json({ error: { message: "Invalid email or password" } });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: { message: "Error during login", details: error } });
  }
};

const logoutUser = async (_req: Request, res: Response) => {
  // Since JWTs are stateless, logout is handled client-side by deleting the token
  res.status(200).json({ message: "Logout successful" });
};

export { loginUser, signUpUser, logoutUser };
