const jwt = require('jsonwebtoken')
const Counter = require('../models/counterSchema')
const {userModel} = require('../models/userModel')


const generateJWT = (user) => {
    const secret = process.env.JWT_SECRET ;
    if (!secret) {
      throw new Error('Missing JWT secret key');
    }
    const token = jwt.sign(user, secret, { expiresIn: process.env.COOKIE_EXPIRE_TIME }); // Change '1h' to your desired expiration time
    return token;
}

async function getNextSequence(sequenceName) {
  const counter = await Counter.findOneAndUpdate(
      {sequenceName},
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
  );
  return counter.sequence_value;
}

async function verifyUserExist(username){
  const user = await userModel.findOne({username})
  if(!user){
    return false;
  }
  return true;
}


module.exports = { generateJWT , getNextSequence , verifyUserExist }