const express = require('express')
const router = express.Router()
const { addNewPost, handleLikes, handleComments, getPosts, getComments, getUserComments, getUserPosts, getUserLikes } = require('../controllers/postControllers')
const {validatePostData , validateLikeData,validateCommentData}  = require('../middleware/checkFormat')
const {authCookie} = require('../middleware/checkCookie')


router.route('/newpost').post(authCookie,validatePostData,addNewPost).get(authCookie,getPosts)
router.route('/handlelikes').get(authCookie,handleLikes)
router.route('/handleComments').post(authCookie,validateCommentData,handleComments).get(authCookie,getComments)
router.route('/usercomments').get(authCookie, getUserComments)
router.route('/userposts').get(authCookie, getUserPosts)
router.route('/userlikes').get(authCookie, getUserLikes)


module.exports = router;

