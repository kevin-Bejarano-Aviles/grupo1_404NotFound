//Require models of our db
const {commentModel,postModel,userModel} = require('../models/associations');
//Require express-validator
const { validationResult } = require("express-validator");
//Require fs module
const fs = require('fs');

//get all posts
const getAllPosts = async(req,res) => {
    try {
        const posts = await postModel.findAll({
            include:[{model:userModel,attributes:["id","user","avatar"]},{model:commentModel,attributes:["id","content","commentImg","cantReactions"]}],
            attributes:["id","content","postImg","cantReactions"]
        })
        res.json(posts)
    } catch (error) {
        res.json({message:error.message})
    }
};
//get a post in specific
const getPost = async(req,res) => {
    try {
        const post = await postModel.findAll({
            where : {id : req.params.id},
            attributes:["id","content","postImg","cantReactions"],
            include:[{model:userModel,attributes:["id","user","avatar"]},{model:commentModel,attributes:["id","content","commentImg","cantReactions"]}]
        })
        res.json(post[0])
    } catch (error) {
        res.json({message:error.message})
    }
};
// create a post
const createPost = async(req,res) => {
    let errors = validationResult(req);
   // console.log(errors);
    let {content} = req.body;
    //let images = [];
    //let postImg = req.files[0] ? req.files[0].filename :  null;
    //console.log(req.files);

     let postImgs = req.files.map(imagen => imagen.filename);
    
    //images.push(postImgs)
    //console.log(images);
    console.log(postImgs);
    
    
    let pictures = JSON.stringify(postImgs);
    console.log(pictures);


    if(!errors.isEmpty()){
        /* let img = JSON.stringify(pictures) 
         console.log(img);
         for (let i = 0; i < pictures.length; i++) {
          fs.unlinkSync(`public/posts/{img[i]}`) 
        } */
        
        return res.json(errors.mapped())
    }else{
       try {
        await postModel.create({
            content : content,
            //postImg : images
            postImg : pictures
        })
        res.json({
            'message' : 'Post successfully created'
        })
    } catch (error) {
        res.json({message:error.message})
    } 
    }
    
};
//update a post
const updatePost = async (req,res) =>{
    let errors = validationResult(req);
    console.log(errors);
    let {content} = req.body;
    let postImg = req.files[0] ? req.files[0].filename : null; 
    if(!errors.isEmpty()){
        fs.unlinkSync(`public/posts/${req.files[0].filename}`)
        return res.json(errors.mapped())
    }else{
        try {
            await postModel.update({
                content : content,
                postImg : postImg
            },{
                 where : {id : req.params.id}
            })
                res.json({
                    'message' : 'Post successfully updated'
                })
            } catch (error) {
                 res.json({message:error.message})
            }
    }
    
};
//delete a post
const deletePost = async (req,res) => {
    try {
        await postModel.destroy({
            where : {id : req.params.id}
        })
        res.json({
            'message' : 'Post successfully deleted'
        })
    } catch (error) {
        res.json({message:error.message})
    }
};
//export of CRUD methods
module.exports = {
    deletePost,
    createPost,
    getAllPosts,
    getPost,
    updatePost
}