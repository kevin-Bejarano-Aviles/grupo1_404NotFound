const userCheck = require("./userCheck")

module.exports = (req,res,next) => {
    if(req.session.userLog || req.session.userLog.rol == 'admin'){
        next()
    }else{
        res.redirect('/')
    }
};