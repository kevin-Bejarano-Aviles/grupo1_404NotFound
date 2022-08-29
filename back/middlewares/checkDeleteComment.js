const {commentModel,userModel} = require('../models/associations');


module.exports = async(req,res,next)=>{
    const userComment = await commentModel.findOne({
        where:{
            id:req.params.id
        },
        attributes:['id','usersId']
    });
    
    if ((req.session.userNew.id == userComment.usersId) || (req.session.userNew.rol == "Admin") ){
        
        
        next()
    }else{
        
        
        res.json({message:"No se pudo, no es tu comentario o no eres admin"})
    }
}//