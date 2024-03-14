const  userProfile  = require('../models/userProfile')
const Followers = require('../models/followersModel')

const handleFollow =async (req,res) =>{
    try
    {   
        if(req.query.follow_user === req.user.username){
            return res.status(400).json({erro:true,message:'You can\'t follow your own account',what:0})
        }

        const query = { follow_user: req.query.follow_user,following_user:req.user.username}
        const follow_user_query = { username: req.query.follow_user }
        const following_user_query = { username:req.user.username }
        const follow_user_data = await userProfile.findOne(follow_user_query)
        const following_user_data = await userProfile.findOne(following_user_query)
        const followers = await Followers.findOne(query)
        if(!followers){
            const newFollowers = new Followers({
                follow_user:req.query.follow_user,
                following_user:req.user.username
            })
            await newFollowers.save()
            await userProfile.updateOne(follow_user_query,{$set:{username:req.query.follow_user,followers:follow_user_data?.followers+1 || 1}},{upsert:true})
            await userProfile.updateOne(following_user_query,{$set:{username:req.user.username,following:following_user_data?.following+1 || 1}},{upsert:true})
            return res.status(200).json({error:false,message:"successfully followed",what:1})
        }else{
            await Followers.findOneAndDelete(query)
            await userProfile.updateOne(follow_user_query,{$set:{username:req.query.follow_user,followers:follow_user_data?.followers-1}},{upsert:true})
            await userProfile.updateOne(following_user_query,{$set:{username:req.user.username,following:following_user_data?.following-1}},{upsert:true})
            return res.status(200).json({error:false,messaage:"successfully unfollowed",what:-1})
        }
    }
    catch(err){
        return res.status(409).json({error:true,message:err.message})
    }

}



const checkFollow = async (req,res) =>{
    try{
        if (req.query.follow_user === req.user.username) {
            return res.status(400).json({ erro: true, message: 'You can\'t follow your own account' })
        }
        const query = { follow_user: req.query.follow_user, following_user: req.user.username }
        const followers = await Followers.findOne(query)
        if(!followers){
            return res.status(200).json({error:false,message:'not follwing',what:-1})
        }else{
            return res.status(200).json({ error: false, message: 'follwing', what: 1 })
        }   
    }   
    catch(err){

    }
}

module.exports = {
    handleFollow , checkFollow
}