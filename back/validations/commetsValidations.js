const {check,body} = require('express-validator');

module.exports = [
    check('content').notEmpty().withMessage('El contenido no tiene que estar vacio')
    /* body('commentImg').custom((value,{req})=>{
        value = req.files[0]
        if(value){
            if(value.mimetype == 'image/png' || value.mimetype == 'image/jpg' || value.mimetype == 'image/jpeg'){
                return true
            }else{
                return false
            }
        }else{
            return true
        }
        
    })
    .withMessage("El formato de la imagen debe ser: jpg, jpeg, png o gif")  */
]