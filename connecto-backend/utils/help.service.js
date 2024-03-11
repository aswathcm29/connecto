const jwt = require('jsonwebtoken')


const generateJWT = (user) => {
    const secret = process.env.JWT_SECRET ;
    if (!secret) {
      throw new Error('Missing JWT secret key');
    }
    const token = jwt.sign(user, secret, { expiresIn: process.env.COOKIE_EXPIRE_TIME }); // Change '1h' to your desired expiration time
    return token;
}


module.exports = {generateJWT}