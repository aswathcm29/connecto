const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema(
    {
        post_user:{type:String,required:true},
        postId:{type:Number,required:true},
        comment_user:{type:String,required:true},
        comment:{type:String,default:''}
    },
    {
        timestamps:true,
    }
)

const Comment = mongoose.model('Comment',commentSchema)

module.exports = Comment