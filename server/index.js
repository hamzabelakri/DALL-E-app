const express = require("express");
const app = express();


require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");


app.use(cors());




connect();