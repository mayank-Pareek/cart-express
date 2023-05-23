import express from "express";
import dotenv from "dotenv";
import Connection from "./mongo/db.js";
import DefaultData from "./default.js";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;
dotenv.config({ path: "../.env" });

const initialize = async () => {
  await Connection(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  DefaultData();
};

initialize();
