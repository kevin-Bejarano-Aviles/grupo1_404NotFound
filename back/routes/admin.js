const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, editUser, deleteUser } = require('../controllers/adminController');
const uploadUser = require('../middlewares/upAvatar');
const editValidation = require('../validations/editValidations');
const adminCheck = require('../middlewares/adminCheck');
router.get('/users',adminCheck,getAllUsers);
router.get('/user/:id',adminCheck,getUserById);
router.put('/user/:id',adminCheck,uploadUser.any(),editValidation,editUser);
router.delete('/user/:id',adminCheck,deleteUser);

module.exports = router;