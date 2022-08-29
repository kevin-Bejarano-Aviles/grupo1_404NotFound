// require express-validator
const { check, body} = require("express-validator");

module.exports = [
    check('content').notEmpty().withMessage('Debes ingresar algo para que sea posteado').bail()
    .isLength({max: 140}).withMessage('Debe tener hasta 140 caracteres'),
    
     body('postImg').custom((value,{req}) => {
        value = req.files[0];
        //console.log(value);
        //console.log(value.mimetype);
        /* let error = true */
        if(value){
            if(value.mimetype == 'image/png' || value.mimetype == 'image/jpg' || value.mimetype == 'image/jpeg' || value.mimetype == 'image/gif'){
                return true
            }else if (!value.mimetype == 'image/png' || !value.mimetype == 'image/jpg' || !value.mimetype == 'image/jpeg' || !value.mimetype == 'image/gif'){ //we have to deny the last condition in case there is no file, it won't show it as an error 
               return false
            }
        }else{
            return  true
        }
    }).withMessage('El formato de la imagen debe ser: .png, .jpg, .jpeg o .gif')
]