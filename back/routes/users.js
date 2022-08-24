const express = require('express')
const router = express.Router()
const { createUser } = require('../controllers/usersControllers')
const upload = require('../middlewares/upAvatar.js')
const validations = require('../validations/usersValidations.js')

//router para los métodos del controller
router.post('/register', validations, createUser)
module.exports = router

