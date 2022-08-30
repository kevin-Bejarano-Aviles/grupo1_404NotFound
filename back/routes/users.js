//Require express modules
const express = require('express');
// Router method is saved in a variable
const router = express.Router();
//Require usersControllers with their methods
const { createUser, getUser, login, editUser, deleteUser, logOut } = require('../controllers/usersControllers');
//Require multer middleware
const upload = require('../middlewares/upAvatar.js');
//Require validations for register
const validations = require('../validations/registerValidations.js');
//Require validations for login
const loginValidations = require('../validations/loginValidations.js')
//Require validations for edit 
const editValidations = require('../validations/editValidations.js');
const userCheck = require('../middlewares/userCheck');
//Http with their methods and urls
router.post('/register', validations, createUser);
router.get('/profile',userCheck, getUser);
router.post('/login', loginValidations, login);
router.get('/logOut',userCheck,logOut);
router.put('/edit',userCheck,upload.any(),editValidations, editUser);
router.delete('/delete',userCheck, deleteUser);
//Export router
module.exports = router

