const express = require('express')
const router = express.Router()
const { createUser, getUser, login, editUser, deleteUser, logOut } = require('../controllers/usersControllers')
const upload = require('../middlewares/upAvatar.js')
const validations = require('../validations/registerValidations.js')
const loginValidations = require('../validations/loginValidations.js')
const editValidations = require('../validations/editValidations.js');
const userCheck = require('../middlewares/userCheck');
//const adminCheck = require('../middlewares/adminCheck');
//router para los métodos del controller
router.get('/',(req,res)=>{res.json({message:'Pag Principal'})});
router.post('/register', validations, createUser);
router.get('/profile',userCheck, getUser);
router.post('/login', loginValidations, login);
router.get('/logOut',userCheck,logOut);
router.put('/edit',userCheck,upload.any(),editValidations, editUser);
router.delete('/delete',userCheck, deleteUser);
module.exports = router

