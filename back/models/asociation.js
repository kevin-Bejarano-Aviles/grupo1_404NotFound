//Requires models
const userModel = require('./usersModel');
const commentModel = require('./commentsModel');
const postModel = require('./postsModel');
//Define relations
userModel.hasMany(postModel,{foreignKey:'usersId'});
postModel.belongsTo(userModel,{foreignKey:'usersId'});
postModel.hasmany(commentModel,{foreignKey:'postId'});
commentModel.belongsTo(postModel,{foreignKey:'postId'});
commentModel.belongsTo(userModel,{foreignKey:'usersId'});
userModel.hasMany(commentModel,{foreignKey:'usersId'});
//export models with their relations
module.exports = {
    commentModel,
    postModel,
    userModel
};
