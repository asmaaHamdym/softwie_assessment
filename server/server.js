const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = new express();

app.use(express.json());
mongoose
  .connect(`${process.env.DATABASE_CONNECTION_STRING}`)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running Here: http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
