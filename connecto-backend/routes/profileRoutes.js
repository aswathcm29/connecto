const express = require('express');
const router = express.Router()
const {authCookie} = require('../middleware/checkCookie')
const {validateFollowData}  = require('../middleware/checkFormat')
const {handleFollow}  = require('../controllers/profileController')

router.route('/handleFollow').post(authCookie,validateFollowData,handleFollow)


module.exports = router;