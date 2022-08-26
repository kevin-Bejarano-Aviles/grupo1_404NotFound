const usersModel = require("../models/userModel.js")
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator');
const fs = require('fs');


//Method to register users
exports.createUser = async (req, res) => {
    let errors = validationResult(req);
    const { name, user, email} = req.body 
    const avatar =  'default.png' // probar si toma la img default
    const pass = await bcryptjs.hash(req.body.pass, 10)
   if (errors.isEmpty()) {
        try { 
            await usersModel.create({
                name: name,
                user: user,
                pass: pass,
                email: email,
                avatar: avatar
            })
            res.json('Registro creado correctamente')
        } catch (error) {
            res.json({ message: error.message })
        }
        } else {
        return res.json(errors.mapped())
}
},
//No me sale probarlo, loguser y logpass son los names para el form de login
exports.login = async (req, res) => {
     let errors = validationResult(req);
     let logUser = req.body.logUser
     if(errors.isEmpty()){
       try{
        let usuario = await usersModel.findOne({
            where : {
                user : logUser
            }
        })
        req.session.userLog = {
            id : usuario.id,
            name : usuario.name,
            avatar : usuario.avatar,
            rol : usuario.rol
        }
        console.log(req.session.userLog);
        res.json('Conexión existosa')
     }catch (error) {
        res.json({ message: error.message })
    } 
     }
     else {
        return res.json(errors.mapped())
}
},



exports.getUser = async (req,res)=>{
    try {
        const user = await usersModel.findOne({
            where:{
                id:req.params.id
            }, attributes:["name","user","avatar", "email"]
        })
        res.json({ user })
    } catch (error) {
        res.json({message:error.message});
    }
},



exports.editUser = async(req,res)=>{
    let errors = validationResult(req);
    /*let newPass = await bcryptjs.hash(req.body.newPass, 10); */
    let {name,user,email,newPass} = req.body;
    let avatar = req.files[0] ? req.files[0].filename : 'default.png'
    if(errors.isEmpty())
    try {
        /* await usersModel.update({
            name : name,
            user : user,
            email : email,
            avatar : avatar,
            newPass : !newPass ? newPass : null
        },{
            where:{
                id:req.params.id,
            }
        }) */
        if(newPass == "".trim()){
            await usersModel.update({
                name:name,
                email:email,
                user:user,
                avatar : avatar
                /* datos */
            },{
                where:{
                    id:req.params.id,
                }
            })
        }else{
            newPass = await bcryptjs.hash(newPass, 10)
            await usersModel.update({
                name:name,
                email:email,
                user:user,
                pass:newPass,
                avatar : avatar
                /* datos */
            },{
                where:{
                    id:req.params.id,
                }
            })
        }
        res.json({
            "message": "Registro actualizado con exito"
        });
    } catch (error) {
        res.json({message:error.message});
    }else {
        fs.unlinkSync(`public/users/${req.files[0].filename}`)
        return res.json(errors.mapped())
}
}

exports.deleteUser = async(req,res)=>{
    try {
        await usersModel.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message": "Registro eliminado con exito"
        });
    } catch (error) {
        res.json({message:error.message});
    }
}




