const express = require("express");
const app = express();
const connect = require("./config/ConnectDb");
require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
const postRouter = require("./Routes/postRouter");
const dalleRouter = require("./Routes/dalleRouter");

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use("/api/v1/post", postRouter);
app.use("/api/v1/dalle", dalleRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

connect();
