const {commentModel,postModel,userModel} = require('../models/associations');//require the models with associations
const fs = require('fs');//node package used in this case to remove images
const db = require('../database/db');//require the database
const {validationResult} = require('express-validator');//require array of validation


const getAllUsers = async(req,res)=>{//get all user for admin
    try {
        const users = await userModel.findAll({attributes:['id','name','user','avatar','email']});
        res.json(users);
    } catch (error) {
        res.json({message:error});
    }
};
const getUserById = async(req,res)=>{//get user in specific
    const {id} = req.params;
    try {
        const user = await userModel.findByPk(id,{attributes:['id','name','user','avatar','email']});
        res.json(user)
    } catch (error) {
        res.json({message:error});
    }
};
const editUser = async(req,res)=>{//update a user 
    const {name,user,email} = req.body;
    const {id} = req.params;
    const errors = validationResult(req);
    try {
        const userById = await userModel.findByPk(id);
        if(!errors.isEmpty()){
            if(userById.avatar != 'default.png'){
                fs.unlinkSync(`public/users/${userById.avatar}`);
            }
            res.json(errors.mapped())
        }else{
            
            const avatar = req.files[0] ? req.files[0].filenames : userById.avatar;
            await userModel.update({
                name:name,
                user:user,
                avatar:avatar,
                email:email
            },{
                where:{
                    id:id
                }
            });
            res.json({message:'usuario editado'})
        }
    } catch (error) {
        res.json({message:error});
    }
    
};
const deleteUser = async(req,res)=>{//delete a user
    const {id} = req.params;
    try {
        const userById = await userModel.findByPk(id);
        if(userById.avatar != 'default.png'){
            fs.unlinkSync(`public/users/${userById.avatar}`);
        }
        await userModel.destroy({
            where:{
                id:id
            }
        });
        res.json({message:'usuario eliminado'});
    } catch (error) {
        res.json({message:error});
    }
};

module.exports ={
    getAllUsers,
    getUserById,
    editUser,
    deleteUser
}