const express = require("express");
const router = express.Router();
const { getAllPosts, addPost, deletePost } = require("../Controllers/postController");

router.get("/", getAllPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);
module.exports = router;
