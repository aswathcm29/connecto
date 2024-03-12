const mongoose = require('mongoose')


const followSchema = new mongoose.Schema({
    follow_user:{type:String,required:true},
    following_user:{type:String,required:true}
})

const Followers = mongoose.model('Follower',followSchema)

module.exports = Followers