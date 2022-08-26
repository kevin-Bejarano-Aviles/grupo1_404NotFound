const {check,body, Result} = require('express-validator');
const usersModel = require('../models/userModel');
const bcryptjs = require('bcryptjs');

module.exports=[
    check('loguser').notEmpty().withMessage("El nombre de usuario no puede estar vacio"),
    check('logpass').notEmpty().withMessage("La contraseña no puede estar vacia"),
    body('loguser').custom(value=>{
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
    body('logpass').custom((value,{req})=>{
        return usersModel.findOne(
            {
                where:{
                    user:req.body.loguser
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