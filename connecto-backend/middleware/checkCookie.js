const jwt = require('jsonwebtoken')

const authCookie =async (req,res,next) =>{
    const cookie = req.cookies;
    console.log(cookie)
    const secret = process.env.JWT_SECRET
    try{
        const decoded =  jwt.verify(cookie.token,secret)
        req.user = decoded;
        next()
    }catch(err){
        return res.status(401).json({error:true,message:err.message})
    }
}

module.exports = {
    authCookie
}