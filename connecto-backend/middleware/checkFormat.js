function validatePostData(req, res, next) {
    const { username, postTitle , content  } = req.body;
    
    if(!username || !postTitle || !content){
        return res.status(400).json({ error: 'Enter all the fields' });
    }   
    next();
}

function validateLikeData(req,res,next){
    const {postId,liked_person} = req.body;
    if(!postId || !liked_person){
        return res.status(400).json({error:false,message:'Enter All Field'})
    }
    next();
}

module.exports = {
    validatePostData , validateLikeData
}