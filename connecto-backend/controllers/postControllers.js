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


const getPosts = async (req, res) =>{
    try{
        const posts = await Posts.find({}).select(['-createdAt']).select({_id:0}).sort({likes:-1,updatedAt:-1}).limit(20)
        if(posts.length === 0){
            return res.status(404).json({error:true,message:'no post found'})
        }
        return res.status(200).json({error:false,posts,username:req.user.username})
    } catch(err){
        return res.status(409).json({error:true,message:err.message})
    }
}

const getComments = async (req, res) => {

    try{
        const comments = await Comment.find({ postId: req.query.postId }).select({ _id: 0 }).sort({ likes: -1, updatedAt: -1 }).limit(10)
        if(comments.length===0){
            return res.status(404).json({ error: true, message: 'no Comments found' })
        }
        return res.status(200).json({ error: false, comments, username: req.user.username })
    } catch(err){
        return res.status(409).json({ error: true, message: err.message })
    }
}

const handleLikes = async (req,res) =>{
    const postId = req.query.postId;
    try{
        const query = {postId,liked_person:req.user.username}
        const post_query = {postId:req.query.postId}
        const doc = await Likes.findOne(query);
        const post = await Posts.findOne(post_query)
        if(!post){
            return res.status(404).json({error:true,message:'Post doesn\'t exist'})
        }
        if(!doc){
            const newLike = new Likes({
                postId:req.query.postId,
                liked_person:req.user.username
            })
            await newLike.save() // like is created
            await Posts.findOneAndUpdate({postId:req.query.postId},{$set:{likes:post.likes+1}})
            return res.status(200).json({error:false,message:'Liked successfully',what:+1})
        }else{
            await Likes.findOneAndDelete(query)
            await Posts.findOneAndUpdate({postId:req.query.postId},{$set:{likes:post.likes-1}})
            return res.status(200).json({error:false,message:'unLiked successfully',what:-1})
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
        return res.status(200).json({error:true,message:'Comment created successfully',newComment})
    } catch(err){
        return res.status(409).json({error:true,message:err.message})
    }
}


const getUserComments = async (req,res)  =>{
    try{
        const response = await Comment.find({comment_user:req.query.username})
        return res.status(200).json({error:false,message:'comments received successfully',usercomments:response})
    }catch(err){
        return res.status(409).json({error:true,message:err.message})
    }
}

const getUserPosts = async (req,res) =>{
    try{
        const response = await Posts.find({username:req.query.username})
        return res.status(200).json({error:false,message:'posts received successfully',userposts:response})
    }catch(err){
        return res.status(409).json({ error: true, message: err.message })
    }
}

const getUserLikes = async (req,res) =>{
    try{
        const postIds = await Likes.find({liked_person:req.query.username}).select('postId -_id')
        const postIdValues = postIds.map(obj => obj.postId);
        const posts = await Posts.find({ postId: { $in: postIdValues } });
        return res.status(200).json({error:false,message:'posts liked the user',posts})
    } catch(err){
        return res.status(409).json({ error: true, message: err.message })
    }
}

module.exports = {
    addNewPost , handleLikes ,handleComments , getPosts , getComments , getUserComments , getUserPosts , getUserLikes
}

