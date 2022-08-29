
/* const crearUsarioPendejo = async(req,res)=>{
    const {name,user,pass,avatar,email} = req.body
    try {
        await db.query("ALTER TABLE users AUTO_INCREMENT = 1");
        await userModel.create({
            name:name,
            user:user,
            pass:pass,
            avatar:avatar,
            email:email
        });
        res.json({message:"Usuario pendejo creado"});
    } catch (error) {
        res.json({message:error})
    }
};
const crearPostPendejo = async(req,res)=>{
    const {content,postImg,cantReactions,userId,postId} = req.body;
    try {
        await db.query("ALTER TABLE posts AUTO_INCREMENT = 1");
        await postModel.create({
            content:content,
            postImg:postImg,
            cantReactions:cantReactions,
            usersId:userId,
            postId:postId
        })
        res.json({message:"Post pendejo creado"});
    } catch (error) {
        res.json({message:error})
    }
};

const siFunciona = (req,res)=>{
    res.json({message: 'si funciona'});
};
const todos = async(req,res)=>{
    try {
        const theComments = await commentModel.findAll({
            attributes:["id","content","usersId", "postId"]
        })
        res.json(theComments);
    } catch (error) {
        res.json({message:error})
    }
}
const todosPostWhitCyU = async(req,res,next)=>{
    try {
        const allPost = await postModel.findAll({
            include:[{model:userModel,attributes:["id","user","avatar"]},
            {model:commentModel,attributes:["id","content","commentImg","cantReactions","postId"],include:{model:userModel,attributes:["id",'user','avatar']}}],
            attributes:["id","content","usersId"]
        });
      
       
        res.json(allPost);
    } catch (error) {
        res.json({message:error})
    }
};

const createComment = async(req,res)=>{
    const {content,commentImg,cantReactions,userId,postId} = req.body;
    try {
        await db.query("ALTER TABLE comments AUTO_INCREMENT = 1");
        await commentModel.create({
            content:content,
            commentImg:commentImg,
            cantReactions:cantReactions,
            usersId:userId,
            postId:postId
        })        
        res.json({message:'Comentario creado'});
    } catch (error) {
        res.json({message:error})
    }
}; */


/* include:
                [userModel,postModel]
                para dos o mas tablas */
/* include:{
                model:userModel 
            } para una tabla */
            /*  include:{
                model:userModel,
                attributes:["id","user","avatar"]
            }, */
/* const viewComment = async(req,res)=>{
    const {id} = req.params;
    try {
        const theComment = await commentModel.findOne({
            where:{
                id:id
            },
        
            include:[{model:userModel,attributes:["id","user","avatar"]},{model:postModel,attributes:["id","cantReactions"]}]
        });
        res.json(theComment);
    } catch (error) {
        res.json({message:error});
    }
};
const editComment = async(req,res)=>{
    const {content,commentImg} = req.body;
    const {id} = req.params;
    try {
        await commentModel.update({
            content:content,
            commentImg:commentImg
        },{
            where:{
                id:id
            }
        });
        res.json({message:"comentario actualizado"});
    } catch (error) {
        res.json({message:error});
    }
};
const deleteComment = async(req,res)=>{
    const {id} = req.params;
    try {
        await commentModel.destroy({
            where:{
                id:id
            }
        })
        res.json({message:'eliminado comment'})
    } catch (error) {
        res.json({message:error});
    }
};
const deletePost = async(req,res)=>{
    const {idPost} = req.params;
    try {
        await postModel.destroy({
            where:{id:idPost},
           
        });
        res.json({message:'post eliminado y todos sus comentarios'})
    } catch (error) {
        res.json({message:error})
    }
} */






let errors = validationResult(req);
/*let newPass = await bcryptjs.hash(req.body.newPass, 10); */
let { name, user, email, newPass } = req.body;
let avatar = req.files[0] ? req.files[0].filename : 'default.png'
if (errors.isEmpty())
    try {
        /* await usersModel.update({
            name : name,
            user : user,
            email : email,
            avatar : avatar,
            newPass : !newPass ? newPass : null
        },{
            where:{
                id:req.params.id,
            }
        }) */
        if (newPass == "".trim()) {
            await usersModel.update({
                name: name,
                email: email,
                user: user,
                avatar: avatar
                /* datos */
            }, {
                where: {
                    id: req.params.id,
                }
            })
        } else {
            newPass = await bcryptjs.hash(newPass, 10)
            await usersModel.update({
                name: name,
                email: email,
                user: user,
                pass: newPass,
                avatar: avatar
                /* datos */
            }, {
                where: {
                    id: req.params.id,
                }
            })
        }
        res.json({
            "message": "Registro actualizado con exito"
        });
    } catch (error) {
        res.json({ message: error.message });
    } else {
    fs.unlinkSync(`public/users/${req.files[0].filename}`)
    return res.json(errors.mapped())
}