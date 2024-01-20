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
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as jwt.Secret, {
        expiresIn: "1h",
      });
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3600000,
        sameSite: "strict",
        secure: true,
      });
      res.status(200).json({ message: "Login successful", data: user });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error during login", error });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User found!", data: user });
  } catch (error) {
    console.error("Error fetching the user", error);
    res.status(500).json({ message: "Error fetching the user", error });
  }
};

const statusUser = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);
    const user = await UserModel.findById((decoded as DecodedToken).userId);
    res.status(200).json({ message: "Authorized!", data: user });
  } catch (error) {
    res.status(500).json({ message: "Auth check failed" });
  }
};

export { loginUser, getUserById, signUpUser, statusUser };
