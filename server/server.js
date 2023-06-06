import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./mongo/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080;
dotenv.config({ path: "../.env" });
app.use("/", Router);
app.get('/', (req, res) => {
  res.send('Cart-Express API is listening!');
});

const initialize = async () => {
  await Connection(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  DefaultData();
};

initialize();
