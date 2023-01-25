const express=require('express');
const router=express.Router();
const {getAllPosts,addPost}=require('../Controllers/postController')


router.get("/", getAllPosts);
router.post("/", addPost);

module.exports =router
