//Require our db
const db = require('../database/db');
//Require sequelize
const { DataTypes} = require('sequelize');
// Mayuscula inicio o no?
const userModel = db.define('users', {
    name:{type:DataTypes.STRING},
    user:{type:DataTypes.STRING},
    pass:{type:DataTypes.STRING},
    avatar:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    rol:{type:DataTypes.STRING}
})
//Export model
module.exports = userModel;