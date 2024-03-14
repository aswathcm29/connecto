const express = require('express');
const router = express.Router()
const {registerUser,loginUser,authUser,logout}  = require('../controllers/userControllers')
const { authCookie } = require('../middleware/checkCookie')


router.route('/').get(authCookie,authUser);
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(authCookie,logout)

module.exports = router;