import "dotenv/config";
import express from "express";
import connectUserDB from "./config/Db.js";
import createItem from "./routes/create.js";
//Encoding
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectUserDB();

//Routing
app.use("/", createItem);

//Created an express server
const PORT = 3000 || process.env.DEV_PORT || process.env.PROD_PORT;
app.get("/", (req, res) => {
  res.send(`Running on port ${process.env.PROD_PORT}`);
});

app.listen(PORT, () => {
  console.log(`App is running on port : ${process.env.PROD_PORT}`);
});
