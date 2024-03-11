const  Posts = require('../models/postModel') 


const addNewPost = async  (req,res) =>{
    try{
        const newPost = new Posts({
            username:req.body.username,
            postTitle:req.body.postTitle,
            content:req.body.content,
        })
        await newPost.save()
        return res.status(200).json({error:false,message:'post added'})
    }catch(err){
        return res.status(409).json({error:true,message:err.message})
    }
    
}


module.exports = {
    addNewPost
}

