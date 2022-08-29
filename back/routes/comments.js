const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentsController');
const commentValidations = require('../validations/commetsValidations');
//const uploadComment = require('../middlewares/upCommentImg');
const checkDeleteComments = require('../middlewares/checkDeleteComment');
const userCheck = require('../middlewares/userCheck');
/* router.get('/',(req,res)=>{
    req.session.destroy()
    res.json("sadasd")}) */
router.post('/:idPost',userCheck,commentValidations,commentController.createComment);

router.get('/:id',userCheck,commentController.showComment);
router.get('/post/:id',userCheck,commentController.allCommentsByPostId);
router.put('/:id',commentValidations,commentController.editComment);
router.delete('/:id',commentController.deleteComment)

module.exports = router;