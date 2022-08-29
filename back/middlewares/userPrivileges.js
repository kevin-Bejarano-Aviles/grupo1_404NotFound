const {userModel,postModel,commentModel} = require('../models/associations');

const seeViewsLikeUser = (req,res,next)=>{
    if (!req.session.userLog) {
        res.redirect("/users");
    }else{
       /*  res.locals.userLog = req.session.userLog; */
        next();
    }
}
const canEditOrDeleteUser = (req,res,next)=>{
    //edit by id
    const {id} = req.params.id;
    if(req.session.userLog.id == id){
        next()
    }else{
        res.redirect('/users')
    }
}
const editOrDeletePost = (req,res,next)=>{
    const {id} = req.params;
    try {
        const userByPost = await postModel.findByPk(id,{attributes:['usersId']});
        if(userByPost.usersId == req.session.userLog.id){
            next();
        }else{
            res.redirect('/users')
        }
    } catch (error) {
        res.json({message:error})       
    }
}
const editOrDeleteComment = (req,res,next)=>{
    const {id} = req.params;
    try {
        const userByComment = await commentModel.findByPk(id,{attributes:['usersId']});
        if(userByComment.usersId == req.session.userLog.id){
            next();
        }else{
            res.redirect('/users')
        }
    } catch (error) {
        res.json({message:error})       
    }
}
module.exports = {
    seeViewsLikeUser,
    canEditOrDeleteUser,
    editOrDeletePost,
    editOrDeleteComment
}