const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    _id : {type:String,required:true},
    sequence_number : {type:Number,default:0},
})

const Counter = mongoose.model('Counter',counterSchema)

module.exports = Counter;