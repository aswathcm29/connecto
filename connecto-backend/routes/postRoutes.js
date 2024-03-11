const express = require('express')
const router = express.Router()
const {addNewPost , handleLikes} = require('../controllers/postControllers')
const {validatePostData , validateLikeData}  = require('../middleware/checkFormat')
const {authCookie} = require('../middleware/checkCookie')


router.route('/newpost').post(authCookie,validatePostData,addNewPost)
router.route('/handlelikes').post(authCookie,validateLikeData,handleLikes)

module.exports = router;

