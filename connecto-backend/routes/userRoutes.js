const express = require('express');
const router = express.Router()
const {registerUser,loginUser,authUser}  = require('../controllers/userControllers')
const {auth} = require('../middleware/auth')

router.route('/').get(auth,authUser);
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

module.exports = router;