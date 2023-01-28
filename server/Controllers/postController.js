const Post = require("../Models/post");
require("dotenv").config({ path: "../config/.env" });
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Fetching posts failed, please try again",
    });
  }
};

const addPost = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = new Post({
      name,
      prompt,
      photo: photoUrl.url,
    });
    await newPost.save();

    res.status(200).json({ success: true, newPost });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deletePost = await Post.findByIdAndRemove(id);
    const posts = await Post.find();
    res.status(201).json({ msg: "deleted successfully", posts });
  } catch (error) {
    res.status(400).json({ error: "failed to delete the post" });
  }
};
module.exports = { getAllPosts, addPost, deletePost };
