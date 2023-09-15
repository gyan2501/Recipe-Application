const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");


const app = express();
app.use(express.json());
app.use(cors());



app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
    console.log("Not able to connect to DB!");
  }
  console.log(`Server running on Port ${process.env.port}`);
});