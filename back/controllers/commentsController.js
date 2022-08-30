const {commentModel,postModel,userModel} = require('../models/associations');//require the models with associations
/* const fs = require('fs'); */
const db = require('../database/db');//require the database
const {validationResult} = require('express-validator');//require array of validation

const createComment = async(req,res)=>{//method to create a comment 
    const {content,cantReactions} = req.body;
    const {idPost} = req.params;
    const errors = validationResult(req)
    try {
        if(!errors.isEmpty()){
          
            res.json(errors.mapped())
        }else{
            
                await db.query("ALTER TABLE comments AUTO_INCREMENT = 1");
                await commentModel.create({
                    content:content,
                    cantReactions:cantReactions,
                    usersId:req.session.userLog.id, 
                    postId:idPost 
                });
                res.json({message:'comment created'});
             
        }
    } catch (error) {
        res.json({message:error})
    }
};
const allCommentsByPostId = async(req,res)=>{//get all comment according to post id
    const {id} = req.params
    try {
        const theComments = await commentModel.findAll({
            where:{
                postId:id
            }
        });
        res.json(theComments);
        
    } catch (error) {
        res.json({message:error});
    }
};
const showComment = async(req,res)=>{ //get one comment in specific
    const {id} = req.params;
    try {
        const theComment = await commentModel.findOne({
            where:{
                id:id
            },
            include:
                [{model:userModel,attributes:["id","user","avatar"]}],
            attributes:["content","usersId","cantReactions"]
        })
        res.json(theComment);
    } catch (error) {
        res.json({message:error})
    }
}
const editComment = async(req,res)=>{//update a comment 
    const {id} = req.params
    const {content} = req.body;
   // const commentImg = (req.files) ? req.files[0].filename : "commentDefaut.png";
    const errors = validationResult(req)
    try {
        if(!errors.isEmpty()){
            //fs.unlinkSync(`public/comments/${req.files[0].filename}`);
            res.json(errors.mapped())
        }else{

            await commentModel.update({
                content:content
                //commentImg:commentImg
            },{
                where:{
                    id:id
                }
            });
            res.json({message:"Comentario editado"});
        }
        
    } catch (error) {
        res.json({message:error});
    } 
};
const deleteComment = async(req,res)=>{ //delete a comment 
    const {id} = req.params;
    try {
        /* const toDelete = await commentModel.findOne({where:{id:id}});
        if(toDelete.commentImg != 'commentDefaut.png'){
            fs.unlinkSync(`public/comments/${toDelete.commentImg}`)
        } */
        await commentModel.destroy({
            where:{
                id:id
            }
        });
        res.json({message:'Comentario eliminado'})
    } catch (error) {
    res.json({message:error})        
    }
}
module.exports = {
   allCommentsByPostId,
   createComment,
   showComment,
   editComment,
   deleteComment
};