const mongoose = require('mongoose')


const userProfileSchema = new mongoose.Schema({
    username:{type:String,required:true},
    followers:{type:Number,default:0},
    following:{type:Number,default:0},
    noofpost:{type:Number,default:0},
    socialMediaLinks:{type:[String],default:[]}
})

const userProfile = mongoose.model('userProfile',userProfileSchema)

module.exports = userProfile