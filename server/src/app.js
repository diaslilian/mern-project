import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import index from "./routes/index";
import studentsRoute from "./routes/studentsRoute";

const app = express();

mongoose.connect("mongodb://localhost:27017/project", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connection made successfully.");
});

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/students", studentsRoute);

export default app;
