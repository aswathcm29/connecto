const mongoose = require('mongoose');
const {getNextSequence} = require('../utils/help.service')


const postSchema = new mongoose.Schema(
    {
        username : {type: String,required:true},
        postId:{type:Number,default:0},
        postTitle : {type: String,default:''},
        content : {type: String,default:''},
        postImg : {type: String,default:''},
        likes:{type:Number,default:0}
    },
    {
        timestamps:true,
    }
);

postSchema.pre('save', async function(next){
   if(!this.postId){
        this.postId = await getNextSequence('postId')
   }
   next()
})


const Posts = mongoose.model("post", postSchema);

module.exports = Posts;