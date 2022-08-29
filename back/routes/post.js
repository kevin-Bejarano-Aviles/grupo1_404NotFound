//Require express modules
const express = require('express');
// Router method is saved in a variable
const router = express.Router();
//Require post controller with their methods
const { getAllPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/postControllers');
//Require validations
const postValidator = require('../validations/postValidations');
//Require multer middleware
const upPostImg = require('../middlewares/upPostImg');

const userCheck = require('../middlewares/userCheck');
//http methods
router.get('/',userCheck, getAllPosts);
router.get('/:id',userCheck, getPost);
router.post('/',userCheck,upPostImg.any(),postValidator,createPost);
router.put('/:id',upPostImg.any(),postValidator,updatePost);
router.delete('/:id', deletePost)

// export router
module.exports = router;
