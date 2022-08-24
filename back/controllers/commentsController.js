const {commentModel,postModel,userModel} = require('../models/associations');
const fs = require('fs');


const createComment = async(req,res)=>{
    const {content,commentImg,cantReactions,userId,postId} = req.body;
    try {
        
    } catch (error) {
        
    }
}
const editComment = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
const deleteComment = async(req,res)=>{

}
module.exports = {
    createComment,
    deleteComment,
    editComment
}