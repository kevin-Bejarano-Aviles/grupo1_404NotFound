//Require models for our db
const usersModel = require("../models/userModel.js");
//Require bcrypt to hash passwords
const bcryptjs = require('bcryptjs');
//Require express validator so we can use our validations
const { validationResult } = require('express-validator');
//Require fs module
const fs = require('fs');
//Require our database
const db = require('../database/db');
//Method to register users
exports.createUser = async (req, res) => {
    let errors = validationResult(req);
    const { name, user, email } = req.body;
    const avatar = 'default.png';  //This line add to the user a default avatar
    
    if (errors.isEmpty()) {// If our variable errors is empty we await our register to push information to our db
        try {
            const pass = await bcryptjs.hash(req.body.pass, 10);//Await bcrypt to hash our password
            await db.query("ALTER TABLE users AUTO_INCREMENT = 1");
            await usersModel.create({
                name: name,
                user: user,
                pass: pass,
                avatar: avatar,
                email: email,
                rol: 'user'
            });
            res.json('Registro creado correctamente');
        } catch (error) {
            res.json({ message: error.message });
        }
    } else {
        res.json(errors.mapped());
    }
};
//Method to login an user
exports.login = async (req, res) => {
    let errors = validationResult(req);
    const { logUser } = req.body;
    if (errors.isEmpty()) {
        try {
            const usuario = await usersModel.findOne({
                where: {
                    user: logUser
                },
                attributes: ['id', 'user', 'avatar', 'rol']
            });
            req.session.userLog = {
                id: usuario.id,
                name: usuario.name,
                user: usuario.user,
                avatar: usuario.avatar,
                rol: usuario.rol
            };
            /* res.json('Conexión existosa'); */
            res.json(req.session.userLog);
        } catch (error) {
            res.json({ message: error.message });
        }
    }
    else {
        res.json(errors.mapped());
    }
};
//Method to see one user by id
exports.getUser = async (req, res) => {
    try {
        const user = await usersModel.findByPk(req.session.userLog.id,{attributes:["name", "user", "avatar", "email"]});
        console.log(req.session.userLog);
        res.json(user);
    } catch (error) {
        res.json[{message:error.message}];
    }
  /*   try {
        const user = await usersModel.findOne({
            where: {
                id: req.params.id
            }, attributes: ["name", "user", "avatar", "email"]
        })
        res.json({ user })
    } catch (error) {
        res.json({ message: error.message });
    } */
};
//Method to edit one user by id
exports.editUser = async (req, res) => {//falta por ver esto de edit user
    let errors = validationResult(req);
    const {name,user,email} = req.body;
    const avatar = req.files[0] ? req.files[0].filename : req.session.userLog.avatar;
    if(errors.isEmpty()){
        try {
            await usersModel.update({
                name : name,
                user : user,
                email : email,
                avatar : avatar,
            },{
                where:{
                    id:req.session.userLog.id
                }
            });
            res.json({message:'Usuario actualizado con exito'})
        } catch (error) {
            res.json({message:error.message});      
        }
    }else{
        //el fs
        if(req.session.userLog.avatar != 'default.png'){
            fs.unlinkSync(`public/users/${req.session.userLog.avatar}`);
        }
        res.json(errors.mapped());
    }
};
//Method to delete one user by id
exports.deleteUser = async (req, res) => {
    try {
        if(req.session.userLog.avatar != 'default.png'){
            fs.unlinkSync(`public/users/${req.session.userLog.avatar}`);
        }
        await usersModel.destroy({
            where: {
                id: req.session.userLog.id
            }
        });
        req.session.destroy();
        res.json({
            "message": "Registro eliminado con exito"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
//Method to log out
exports.logOut = async(req,res)=>{
    try {
        req.session.destroy();
        res.json({message:"Cerrando sesion"});
    } catch (error) {
        res.json({message:error});
    }
}



