const usersModel = require("../models/userModel.js")
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator');
const fs = require('fs');
const db = require('../database/db');

//Method to register users
exports.createUser = async (req, res) => {
    let errors = validationResult(req);
    const { name, user, email } = req.body;
    const avatar = 'default.png';  //probar si toma la img default
    const pass = await bcryptjs.hash(req.body.pass, 10);

    if (errors.isEmpty()) {
        try {
            await db.query("ALTER TABLE users AUTO_INCREMENT = 1");
            await usersModel.create({
                name: name,
                user: user,
                pass: pass,
                avatar: avatar,
                email: email,
                rol: 'admin'
            });
            res.json('Registro creado correctamente');
        } catch (error) {
            res.json({ message: error.message });
        }
    } else {
        res.json(errors.mapped());
        //el fs despues
    }
};
//No me sale probarlo, loguser y logpass son los names para el form de login
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
                user: usuario.user,
                avatar: usuario.avatar,
                rol: usuario.rol
            };
            //console.log(req.session.userLog);
            res.json('Conexión existosa');
        } catch (error) {
            res.json({ message: error.message });
        }
    }
    else {
        res.json(errors.mapped());
    }
};



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

exports.logOut = async(req,res)=>{
    try {
        req.session.destroy();
        res.json({message:"Cerrando sesion"});
    } catch (error) {
        res.json({message:error});
    }
}



