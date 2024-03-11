async function validatePostData(req, res, next) {
    const { username, postTitle , content  } = req.body;
    
    if(!postTitle || !content){
        return res.status(400).json({ error: 'Enter all the fields' });
    }   
    next();
}

async function validateLikeData(req,res,next){
    const {postId} = req.body;
    if(!postId){
        return res.status(400).json({error:false,message:'Enter All Field'})
    }
    next();
}

async function validateCommentData(req,res,next){
    const {postId,comment} = req.body;
    if(!postId ||  !comment){
        return res.status(400).json({error:true,message:'Enter All Field'})
    }
    next()
}

module.exports = {
    validatePostData , validateLikeData , validateCommentData
}