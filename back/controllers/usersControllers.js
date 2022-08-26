const usersModel = require("../models/userModel.js")
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator');


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
     if(!errors.notEmpty)try{
        res.json('Conexión existosa')
     }catch (error) {
        res.json({ message: error.message })
    }else {
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
    newpass = await bcryptjs.hash(req.body.pass, 10);
    

    if(errors.isEmpty())
    try {
        await usersModel.update(req.body,{
            newpass:req.body.newpass ? req.body.newpass : user.pass
        },{
            where:{
                id:req.params.id,
            }
        })
        res.json({
            "message": "Registro actualizado con exito"
        });
    } catch (error) {
        res.json({message:error.message});
    }else {
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




