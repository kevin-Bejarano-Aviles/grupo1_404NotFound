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
    /* check('oldpass').notEmpty().withMessage('Ingrese su contraseña'),
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
    }) */
    /* body('newPass2')
    .custom((value,{req}) => {
        if(value != req.body.newPass){
            return false
        }
        return true
    })
    .withMessage("Las constraseñas no coinciden"),
    check('newPass').isLength({min:8, max:12}).withMessage('La contraseña debe tener minimo 8 caracteres'), */
    /* body('newPass')
    .custom((value,{req})=>{ */
        /* let pass = req.body.newPass */
       /*  if(value.length > 0){
            check('newPass').isLength({min:8}).withMessage('Debes ingresar una contraseña de al menos 8 caracteres')
        }else{
            return true
        }
    }) */
    body('avatar').custom((value,{req}) => {
        value = req.files[0];
        console.log(value);
        //console.log(value.mimetype);
        /* let error = true */
        if(value){
            if(value.mimetype == 'image/png' || value.mimetype == 'image/jpg' || value.mimetype == 'image/jpeg' || value.mimetype == 'image/gif'){
                return true
            }else{
               return false
            }
        }else{
            return  true
        }
    }).withMessage('El formato de la imagen debe ser: .png, .jpg, .jpeg o .gif')
]