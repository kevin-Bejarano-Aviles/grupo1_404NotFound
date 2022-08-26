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

//http methods
router.get('/', getAllPosts);
router.get('/:id', getPost);
router.post('/',upPostImg.any(),postValidator,createPost);
router.put('/:id',upPostImg.any(),postValidator,updatePost);
router.delete('/:id', deletePost)

// export router
module.exports = router;
