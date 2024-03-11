const authCookie = (req,res,next) =>{
    const cookie = req.cookies;

    if(!cookie){
        return res.status(401).json({error:true,message:'UnAuthorized'})
    }
    next()
}


module.exports = {
    authCookie
}