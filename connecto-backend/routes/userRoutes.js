const express = require('express');
const router = express.Router()
const {registerUser,loginUser,authUser}  = require('../controllers/userControllers')
const { authCookie } = require('../middleware/checkCookie')


router.route('/').get(authCookie,authUser);
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

module.exports = router;