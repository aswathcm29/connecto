const express = require('express');
const router = express.Router()
const {authCookie} = require('../middleware/checkCookie')
const {validateFollowData}  = require('../middleware/checkFormat')
const {handleFollow , checkFollow}  = require('../controllers/profileController')

router.route('/handleFollow').get(authCookie,handleFollow)
router.route('/checkfollow').get(authCookie,checkFollow)
module.exports = router;