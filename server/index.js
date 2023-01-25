const express = require("express");
const app = express();
const connect = require("./config/ConnectDb");


require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");


app.use(cors());


app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
  });

connect();