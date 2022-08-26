const {check,body, Result} = require('express-validator');
const usersModel = require('../models/userModel');
const bcryptjs = require('bcryptjs');

module.exports=[
    check('logUser').notEmpty().withMessage("El nombre de usuario no puede estar vacio"),
    check('logPass').notEmpty().withMessage("La contraseña no puede estar vacia"),
    body('logUser').custom(value=>{
        return usersModel.findOne({
            where:{
                user:value
            }
        }).then((result)=>{
            if(!result){
                return Promise.reject("El usuario no se encuentra en la base de datos")
            }
        })
    }),
    body('logPass').custom((value,{req})=>{
        return usersModel.findOne(
            {
                where:{
                    user:req.body.logUser
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