import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import productRouter from "./routes/productRouter";
import userRouter from "./routes/userRouter";
import upload from "./upload";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.post("/api/upload", upload.array("files"), (_req, res) => {
  res.status(200).json({ message: "Upload successful" });
});

app.listen(port, () => {
  console.log(`Server is 🔥 at http://localhost:${port}`);
});
