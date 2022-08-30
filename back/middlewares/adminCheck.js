//const userCheck = require("./userCheck")

module.exports = (req,res,next) => {//pass for admin
    if(req.session.userLog && req.session.userLog.rol == 'admin'){
        next()
    }else{
        /* res.redirect("/users"); */
        res.json({messageError:'access denied'})
    }
};