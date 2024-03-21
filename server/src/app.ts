import express from "express";
import mongoose from "mongoose";
import cardsRouter from "./routes/cards";
import cors from "cors";
import auth from "./middleware/authMiddleware";
import userRouter from "./routes/user";
import { createUser, login } from "./controllers/users";

const { PORT = 3000 } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/cards", cardsRouter);
app.post("/signin", login);
app.post("/signup", createUser);
app.use(auth);
app.use("/user", userRouter);
const connect = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb://127.0.0.1:27017/onlineShopdb");
  await app.listen(PORT);
};

connect();
