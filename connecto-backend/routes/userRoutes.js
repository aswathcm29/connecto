const express = require('express');
const router = express.Router()
const {registerUser,loginUser,authUser}  = require('../controllers/userControllers')


router.route('/').get(authUser);
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

module.exports = router;