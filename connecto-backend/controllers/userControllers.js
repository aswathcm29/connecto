const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const userProfile = require('../models/userProfile')
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
        const doc = await User.findOne(query)
        if(doc){
            return res.status(401).json({error:true,message:'User Already Registered'})
        }
        const salt =await  bcrypt.genSalt(10)
        const hassedPassword = await bcrypt.hash(password, salt)
        const users = new User({
            username,
            email,
            password:hassedPassword
        })
        const newUserProfile = new userProfile({
            username,
        })
        await users.save()
        await newUserProfile.save()
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
        const existingUser = await User.findOne({username});
        if (!existingUser) {
            return res.status(401).json({ error: true, message: 'username doesn"t exist' });
        }
        const verified = await bcrypt.compare(password, existingUser.password)
        if (!verified) {
            return res
                .status(401)
                .json({ error: true, message: "Invalid password" });
        }
        const accessToken = generateJWT({ username })
        await res.setHeader('Set-Cookie', [
            `token=${accessToken}; HttpOnly; Path=/; Max-Age=${process.env.COOKIE_EXPIRE_TIME}`,
            `loggedIn=true; Max-Age=${process.env.COOKIE_EXPIRE_TIME}`,
        ])
        return res.status(200).json({ error: false, message: 'Successfully Login' })
    }
    catch (err) {
        return res.status(409).json({ error: true, message: err.message });
    }
    
}
 
const authUser = async(req,res) =>{
    try{
        var user = ''
        if(req.query.username !== '') {
            user = await userProfile.findOne({ username: req.query.username })
            return res.status(200).json({ error: false, message: "user exicts", user })
        } else{
            user = await userProfile.findOne({ username: req.user.username })
            return res.status(200).json({ error: false, message: "user exicts", user })
        }
       
        
    }catch(err){
        return res.status(409).json({error:true,message:err.message});
    }
}


const logout = (req,res) =>{
    req.cookies.loggedIn = false;
    res.cookie('token', '', {
        httpOnly: true, // Prevent client-side JavaScript access
        expires: new Date(Date.now() - 1000), // Expire immediately
    });

    res.cookie('loggedIn', 'false', { // Set loggedIn to false
        httpOnly: true, // Prevent client-side JavaScript access
        expires: new Date(Date.now() - 1000), // Expire immediately
    });
    return res.status(200).json({ message: 'You are logged out!' });
}
 

module.exports = {
    registerUser , loginUser , authUser , logout
}