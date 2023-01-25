const express=require('express');
const router=express.Router();
const {getApiImage}=require('../Controllers/dalleController')


router.get("/",getApiImage);


module.exports =router