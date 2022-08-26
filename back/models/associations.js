//Requires models
const userModel = require('./userModel');
const commentModel = require('./commentModel');
const postModel = require('./postModel');
//Define relations
userModel.hasMany(postModel,{foreignKey:'usersId'});
postModel.belongsTo(userModel,{foreignKey:'usersId'});
postModel.hasMany(commentModel,{foreignKey:'postId'});
commentModel.belongsTo(postModel,{foreignKey:'postId'});
commentModel.belongsTo(userModel,{foreignKey:'usersId'});
userModel.hasMany(commentModel,{foreignKey:'usersId'});
//export models with their relations
module.exports = {
    commentModel,
    postModel,
    userModel
};
