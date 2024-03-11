const {userModel} = require('../models/userModel')
const {userRegisterObject} = require('../utils/objectCreate')
const bcrypt = require('bcrypt')
const {generateJWT} = require('../utils/help.service')


const registerUser = async (req,res) =>{
    try{
        const {username,email , password} = req.body;
        const query = {$or:[
            {username:username}
            ,{email:email}
        ]}
        if(!username || !email || !password){
            return res.status(403).json({error:true,message:'Enter all fields'})
        }
        const doc = await userModel.findOne(query)
        if(doc){
            return res.status(401).json({error:true,message:'User Already Registered'})
        }
        const salt =await  bcrypt.genSalt(10)
        const hassedPassword = await bcrypt.hash(password, salt)
        const users = new userModel({
            username,
            email,
            password:hassedPassword
        })
        await users.save()
        return res.status(200).json({error:false,message:'Successfully registered'})
    } catch(err){
        return res.status(404).json({error:true,message:'network issue'})
    }
    
}

const loginUser = async (req,res) =>{
    const {username,password} = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json({ error: true, message: 'All fields are mandatory.' });
        }
        const existingUser = await userModel.findOne({ username });
        if (!existingUser) {
            return res.status(401).json({ error: true, message: 'username doesn"t exist' });
        }
        const verified = await bcrypt.compare(password, existingUser.password)
        console.log(verified)
        if (!verified) {
            return res
                .status(401)
                .json({ error: true, message: "Invalid password" });
        }
        const accessToken = generateJWT({ username })
        res.setHeader('Set-Cookie', [
            `token=${accessToken}; HttpOnly; Path=/; Max-Age=${process.env.COOKIE_EXPIRE_TIME}`,
            `loggedIn=true; Max-Age=${process.env.COOKIE_EXPIRE_TIME}`,
        ])
        return res.status(200).json({ error: false, message: 'Successfully Login' })
    }
    catch (err) {
        return res.status(409).json({ error: true, message: err.message });
    }
    
}


module.exports = {
    registerUser , loginUser
}