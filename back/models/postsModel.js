//Require our db
const db = require('../database/db');
//Require sequelize
const { DataTypes} = require('sequelize');
// Mayuscula inicio o no?
const postModel = db.define('posts', {
    namePost:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING},
    postImg:{type:DataTypes.STRING},
    cantReactions:{type:DataTypes.INTEGER},
    usersId:{type:DataTypes.INTEGER} //Foreign key to connect table users
})
//Export model
module.exports = postModel