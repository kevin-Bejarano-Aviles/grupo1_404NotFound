const {check,body}= require('express-validator');
const path = require('path');
const usersModel = require("../models/userModel.js");
const bcryptjs = require('bcryptjs');

module.exports = [
    check('name').notEmpty().withMessage('No puede dejar el campo de nombre vacío'),
    check('name').isLength({min:2}).withMessage('El "Nombre completo" tiene que tener un minimo de 2 caracteres'),
    check('user').notEmpty().withMessage('No puede dejar el campo de usuario vacío'),
    check('user').isLength({min:2}).withMessage('El "Nombre de usuario" tiene que tener un minimo de 2 caracteres'),
    check('email').isEmail().withMessage('El email tiene que ser un email verificado'),
    check('oldpass').notEmpty().withMessage('Ingrese su contraseña'),
    body('oldpass').custom((value,{req})=>{
        return usersModel.findOne(
            {
                where:{
                    id:req.params.id
                }
            }
        ).then(result=>{
            if(result){
                if(!bcryptjs.compareSync(value,result.pass)){
                    return Promise.reject('Contraseña incorrecta')
                }
            }
            
        })
    })
]