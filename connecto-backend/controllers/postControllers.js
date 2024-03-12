const  Posts = require('../models/postModel') 
const Likes = require('../models/likeModel')
const Comment = require('../models/commentModel')

const addNewPost = async  (req,res) =>{
    try{
        const newPost = new Posts({
            username:req.user.username,
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
    const {postId} = req.body;
    try{
        const query = {postId,liked_person:req.user.username}
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

const handleComments = async (req,res) =>{
    const {postId, comment} = req.body;
    try{
        const post_query = {postId:req.body.postId}
        const post = await Posts.findOne(post_query)
        if(!post){
            return res.status(404).json({error:true,message:'Post doesn\'t exist'})
        }
        const newComment = new Comment({
            post_user:post.username,
            postId,
            comment_user:req.user.username,
            comment,
        })
        await newComment.save()
        return res.status(200).json({error:true,message:'Comment created successfully'})
    } catch(err){
        return res.status(409).json({error:true,message:err.message})
    }
}

module.exports = {
    addNewPost , handleLikes ,handleComments
}

