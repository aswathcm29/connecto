const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userName : {type: String,required:true},
    blogid:{type:Number,required:true},
    date : {type: String},
    postTitle : {type: String},
    description : {type: String},
    content : {type: String},
    postImg : {type: String},
    likes:{type:Number,default:0}
});

postSchema.pre('save',function(next){
   
})


const postModel = mongoose.model("post", postSchema);

module.exports = postModel;