import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import productRouter from "./routes/productRouter";
import userRouter from "./routes/userRouter";
import reviewRouter from "./routes/reviewRouter";
import orderRouter from "./routes/orderRouter";
import upload from "./upload";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/orders", orderRouter);
app.post("/api/upload", upload.array("files"), (_req, res) => {
  res.status(200).json({ message: "Upload successful" });
});

app.listen(port, () => {
  console.log(`Server is 🔥 at http://localhost:${port}`);
});
