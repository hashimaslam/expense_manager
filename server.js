const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

//requiring env files
dotenv.config({ path: "./config/config.env" });
// initializing express app
const app = express();

//routes
app.get("/", (req, res) => res.send("hello"));

const PORT = process.env.PORT || 5000;

//listening on PORT
app.listen(
  PORT,
  console.log(`server  running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
