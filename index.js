import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { userRouter } from "./ProjectData.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

async function CreateConnection() {
  const client = new MongoClient(MONGO_URL);

  await client.connect();
  console.log("Mongo DB Connected");

  return client;
}

export const client = await CreateConnection();

app.use(cors());
app.use(express.json());
app.use("/", userRouter);

app.listen(PORT, () => console.log("App is started in", PORT));
