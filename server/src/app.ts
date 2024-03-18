import express from "express";
import mongoose from "mongoose";
import cardsRouter from "./routes/cards";
import cors from "cors";

const { PORT = 3000 } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/cards", cardsRouter);
const connect = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb://127.0.0.1:27017/onlineShopdb");
  await app.listen(PORT);
};

connect();
