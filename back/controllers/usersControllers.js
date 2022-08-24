const usersModel = require("../models/userModel.js")
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator');


//Method to register users
exports.createUser = async (req, res) => {
    let errors = validationResult(req);
    const { name, user, email} = req.body 
    const avatar = 'default.png' //Default img
    const pass = await bcryptjs.hash(req.body.pass, 10)
   if (errors.isEmpty()) {
        try {      //metodo que permite crear un registro
            await usersModel.create({
                name: name,
                user: user,
                pass: pass,
                email: email,
                avatar: avatar
            })
            res.json('Registro creado correctamente')
        } catch (error) {
            res.json({ message: error.message })
        }
        } else {
        return res.json(errors.mapped())
}
}
