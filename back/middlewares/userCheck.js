//Export user session middleware
module.exports = (req,res,next) => {//pass for logged in user
    if (!req.session.userLog) {
        /* res.redirect("/users"); */
        res.json({messageError:'No estas logeado'})
    }else{
       /*  res.locals.userLog = req.session.userLog; */
        next();
    }
    
}