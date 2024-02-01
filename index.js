require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/db/config");
const app = express();

const PORT = process.env.PORT;
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection failed ${err}`);
  });
