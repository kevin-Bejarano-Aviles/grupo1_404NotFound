//Export user session middleware
module.exports = (req,res,next) => {
    if (!req.session.userLog) {
        res.redirect("/users");
    }else{
       /*  res.locals.userLog = req.session.userLog; */
        next();
    }
    
}