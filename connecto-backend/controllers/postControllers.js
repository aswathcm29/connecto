const  Posts = require('../models/postModel') 
const Likes = require('../models/likeModel')
const {verifyUserExist} = require('../utils/help.service')
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


const handleLikes = async (req,res) =>{
    const {postId, liked_person} = req.body;
    const isauser = await verifyUserExist(req.user.username)
    if(!isauser){
        return res.status(401).json({error:true,message:'UnAuthorizated'})
    }
    try{
        const query = {postId,liked_person}
        const post_query = {postId:req.body.postId}
        const doc = await Likes.findOne(query);
        const post = await Posts.findOne(post_query)
        if(!post){
            return res.status(404).json({error:true,message:'Post doesn\'t exist'})
        }
        if(!doc){
            const newLike = new Likes({
                postId:req.body.postId,
                liked_person:req.user.username
            })
            await newLike.save() // like is created
            await Posts.findOneAndUpdate({postId:req.body.postId},{$set:{likes:post.likes+1}})
            return res.status(200).json({error:false,message:'Liked successfully'})
        }else{
            await Likes.findOneAndDelete(query)
            await Posts.findOneAndUpdate({postId:req.body.postId},{$set:{likes:post.likes-1}})
            return res.status(200).json({error:false,message:'unLiked successfully'})
        }
    } catch(err){
        return res.status(409).json({error:true,message:err.message})
    }
}



module.exports = {
    addNewPost , handleLikes
}

