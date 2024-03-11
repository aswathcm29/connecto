function validatePostData(req, res, next) {
    const { username, postTitle , content  } = req.body;
    
    if(!username || !postTitle || !content){
        return res.status(400).json({ error: 'Enter all the fields' });
    }   

    next();
}




module.exports = {
    validatePostData
}