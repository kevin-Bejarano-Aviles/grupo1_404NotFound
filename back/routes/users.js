const express = require('express')
const router = express.Router()
const { createUser, getUser, login, editUser, deleteUser } = require('../controllers/usersControllers')
const upload = require('../middlewares/upAvatar.js')
const validations = require('../validations/registerValidations.js')
const loginValidations = require('../validations/loginValidations.js')
const editValidations = require('../validations/editValidations.js');
const userCheck = require('../middlewares/userCheck');
//const adminCheck = require('../middlewares/adminCheck');
//router para los métodos del controller
router.post('/register', validations, createUser)
router.get('/:id',userCheck, getUser)
router.post('/login', loginValidations, login)
router.put('/edit/:id',userCheck,upload.any(),editValidations, editUser)
router.delete('/delete/:id',userCheck, deleteUser)
module.exports = router

