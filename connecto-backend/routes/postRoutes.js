const express = require('express')
const router = express.Router()
const {addNewPost , handleLikes , handleComments , getPosts} = require('../controllers/postControllers')
const {validatePostData , validateLikeData,validateCommentData}  = require('../middleware/checkFormat')
const {authCookie} = require('../middleware/checkCookie')


router.route('/newpost').post(authCookie,validatePostData,addNewPost).get(authCookie,getPosts)
router.route('/handlelikes').get(authCookie,handleLikes)
router.route('/handleComments').post(authCookie,validateCommentData,handleComments)
module.exports = router;

