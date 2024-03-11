const express = require('express')
const router = express.Router()
const {addNewPost} = require('../controllers/postControllers')
const {validatePostData}  = require('../middleware/checkFormat')
const {authCookie} = require('../middleware/checkCookie')


router.route('/newpost').post(authCookie,validatePostData,addNewPost)

module.exports = router;

