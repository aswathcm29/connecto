
const mongoose = require('mongoose');
const uri = process.env.MONGO_URL; 

module.exports = () =>{
    try{    
        mongoose.connect(uri)
        console.log('connection to db')
    } catch(err){
        console.log('error in connection to db')
    }
}



