const userModel = require("../models/userModel.js");
const {check, validationResult, body} = require('express-validator');


module.exports = [
    //Validaciones para registro de usuarios
    check('name').notEmpty().withMessage('Ingrese su nombre'),
    check('user').isLength({min: 4}).withMessage('El usuario debe tener minimo 4 caracteres')
                 .notEmpty().withMessage('Ingrese un usuario') ,
    check('pass').isLength({min: 8}).withMessage('La contraseña debe tener minimo 8 caracteres')
                 .notEmpty().withMessage('Ingrese una contraseña de mínimo 8 caracteres'),
    check('email').isEmail().withMessage('Debe ingresar un email en el campo'),
    body('user')
    .custom(function(value){
       return userModel.findOne({
           where : {
               user: value
           }
       })
       .then(user => {
           if(user){
               return Promise.reject('Este usuario ya existe en nuestra base de datos')
           }
       })
    }),
    body('pass2')
    .custom((value,{req}) => {
        if(value != req.body.pass){
            return false
        }
        return true
    })
    .withMessage("Las constraseñas no coiciden")
]