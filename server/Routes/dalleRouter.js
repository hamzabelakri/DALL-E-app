const express = require("express");
const router = express.Router();
const { getApiImage } = require("../Controllers/dalleController");

router.post("/", getApiImage);

module.exports = router;
