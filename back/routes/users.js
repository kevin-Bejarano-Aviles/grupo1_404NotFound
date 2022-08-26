const express = require('express')
const router = express.Router()
const { createUser, getUser, login, editUser, deleteUser } = require('../controllers/usersControllers')
const upload = require('../middlewares/upAvatar.js')
const validations = require('../validations/registerValidations.js')
const loginValidations = require('../validations/loginValidations.js')
const editValidations = require('../validations/editValidations.js')
//router para los métodos del controller
router.post('/register', validations, createUser)
router.get('/:id', getUser)
router.post('/login', loginValidations, login)
router.put('/edit/:id', editValidations, editUser)
router.delete('/delete/:id', deleteUser)
module.exports = router

