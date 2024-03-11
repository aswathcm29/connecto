const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
    {
        postId:{type:Number,required:true},
        liked_person:{type:String,required:true},
    },
    {
        timestamps:true,
    }
)

const Likes = mongoose.model('like',likeSchema)

module.exports = Likes;
