import express from "express";
import cors from "cors";
import productRouter from "./routes/productRouter";
import userRouter from "./routes/userRouter";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Server is 🔥 at http://localhost:${port}`);
});

export { app };
