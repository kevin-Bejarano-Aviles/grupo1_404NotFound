//Require our db
const db = require('../database/db');
//Require sequelize
const { DataTypes} = require('sequelize');
// Mayuscula inicio o no?
const commentModel = db.define('comments', {
    content:{type:DataTypes.STRING},
    commentImg:{type:DataTypes.STRING},
    cantReactions:{type:DataTypes.INTEGER},
    usersId:{type:DataTypes.INTEGER}, // Foreign key to connect table users
    postId:{type:DataTypes.INTEGER}// Foreign key to connect table post
})
//Export model
module.exports = postModel;