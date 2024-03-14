import './profile.module.css'
import UserActivity from './userActivity';
import { IoPersonAdd } from "react-icons/io5";
import { IoSend } from "react-icons/io5";   
import { FaComment } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import CountUp from 'react-countup';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const {username} = useParams()
    const navigate = useNavigate()
    const [userData,setUserData] = useState(null);
    const [followers,setFollowers] = useState(0);
    const [following,setFollowing] = useState(0)
    const [isfollowing,setIsfollow] = useState(0)
    const [userPost,setUserPost] = useState([])
    const [userComments, setUserComments] = useState([])
    const [userLikes, setUserLikes] = useState([])
    const [defaultShow,setDefaultShow] = useState(0)

    useEffect(()=>{
        fetctUserData()
        checkFollowers()
       
    },[])

    useEffect(()=>{
        hanldeUserPost()
        hanldeUserComments()
        hanldeUserLikes()
    },[username])

    async function checkFollowers() {
        try{
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/profile/checkfollow?follow_user=${username}`, { withCredentials: true })
            setIsfollow(res.data.what)
        } catch(err){
            console.log(err)
        }
    }

    const fetctUserData = async ()=>{
        try{
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?username=${username}`,{withCredentials:true})
            setFollowers(res.data.user.followers)
            setFollowing(res.data.user.following)
        }catch(err){
            navigate('/home')
            console.log(err)
        }
    }

    async function handleFollow(){
        try{
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/profile/handleFollow?follow_user=${username}`,{withCredentials:true})
            if(res.data.what === -1){
                setIsfollow(-1)
                setFollowers(followers - 1)
            }
            if (res.data.what === 1) {
                setIsfollow(1)
                setFollowers(followers + 1)
            }
        } 
        catch(err){

        }
    }

    async function hanldeUserPost(){
        try{    
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/userposts?username=${username}`, { withCredentials: true })
            setUserPost(res.data.userposts)
        }catch(err){
            console.log(err)
        }
    }

    async function hanldeUserComments() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/usercomments?username=${username}`, { withCredentials: true })
            setUserComments(res.data.usercomments)
        } catch (err) {
            console.log(err)
        }
    }

    async function hanldeUserLikes() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/userlikes?username=${username}`, { withCredentials: true })
            setUserLikes(res.data.posts)
        } catch (err) {
            console.log(err)
        }   
    }


    return(
        <>
            <div className='bg-zinc-900 text-white'>
                <div className="flex w-[35rem] mx-auto py-10 items-center justify-between">
                    <div className='h-[40rem] bg-zinc-950 w-full rounded-xl border-2 border-zinc-600  shadow-lg shadow-zinc-800'>
                        <div className='p-8 flex flex-col gap-y-2'>
                            <div className='flex flex-row justify-between'>
                                <button className='text-lg px-4 py-2 rounded-xl bg-blue-800'>Edit</button>
                                <div className='flex flex-row gap-x-4'>

                                    {
                                        (isfollowing == -1) ?
                                        <>  
                                            <button className='px-4 py-2 rounded-xl bg-blue-800' onClick={handleFollow}>Follow +</button>
                                        </>
                                        : (isfollowing == 1) ?
                                        <>
                                            <button className='px-4 py-2 rounded-xl bg-blue-800' onClick={handleFollow}>Unfollow +</button>
                                        </>
                                        :
                                        <></>

                                    }

                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='w-[8rem] mx-auto rounded-full overflow-hidden'>
                                    <img src='https://avatars.githubusercontent.com/u/121782238?v=4' alt="nothing" className='w-full h-full'></img>
                                </div>
                            </div>
                            
                            <div className='flex flex-col justify-center items-center gap-4'>
                                <h1 className='text-2xl font-bold'>{username}</h1> 
                                  <div className=' flex flex-row justify-around items-center border-2 border-zinc-600 rounded-xl'>
                                    <div className='flex flex-col p-4  justify-center items-center border-r-2   border-gray-600'>
                                       <CountUp end={followers} />
                                        <p className='text-zinc-400'>Followers</p>
                                    </div>
                                    <div  className='flex flex-col p-4  justify-center items-center'>
                                        <CountUp end={following} />
                                        <p className='text-zinc-400'>Following</p>
                                    </div>
                                </div>
                            </div>
                            <div className='py-3'>
                                <div className='w-[80%] mx-auto flex flex-col gap-y-8'>
                                    <div className='flex flex-col gap-y-2 '>
                                        <h1 className='text-xl '>About</h1>
                                        <label for='description' className='text-zinc-200 bg-zinc-600 py-2 rounded-lg px-2'>
                                            Hello I am cibiyanna 
                                        </label>
                                    </div>
                                    <div className='social-media flex flex-col gap-y-2'>
                                           <h1 className='text-xl'>Description</h1>
                                           <label className='text-zinc-200 bg-zinc-600 py-2 rounded-lg px-2'>I'm a Web developer . </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='h-[100vh]'>
                    <div className='w-[60%] mx-auto h-full flex flex-row p-8 gap-4 border-t border-zinc-600 '>
                        <div className='w-[22rem] h-[20rem] flex flex-col gap-y-8 pt-[3rem] bg-zinc-950 rounded-xl items-center border-2 border-zinc-600  shadow-lg shadow-zinc-800'>
                            <div className={`flex flex-row  justify-center gap-x-3 ${defaultShow === 0 ? 'bg-blue-800' : ''} w-[10rem] h-[3rem] rounded-xl items-center duration-200 ease-in`}>
                                <IoSend className='text-lg'/>
                                <button className='text-lg' onClick={()=>setDefaultShow(0)}>Posts</button>
                            </div>
                            <div className={`flex flex-row  justify-center gap-x-3 ${defaultShow === 1 ? ' bg-blue-800' : ''} w-[10rem] h-[3rem] rounded-xl items-center duration-200 ease-in`}> 
                                <FaComment className='text-lg' />
                                <button className='text-lg' onClick={() => setDefaultShow(1)}>Comments</button>
                            </div>
                            <div className={`flex flex-row  justify-center gap-x-3 ${defaultShow === 2 ? ' bg-blue-800' : ''} w-[10rem] h-[3rem] rounded-xl items-center duration-200 ease-in`}>
                                <BiSolidLike className='text-lg'/>
                                <button className='text-lg' onClick={() => setDefaultShow(2)}>Likes</button>
                            </div>
                        </div>
                        <div className='w-full bg-zinc-950 h-[45rem] overflow-y-auto no-scrollbar rounded-xl border-2 border-zinc-600 py-10  shadow-lg shadow-zinc-800'>
                                <UserActivity  posts={userPost} comments={userComments} likes={userLikes} defaultShow={defaultShow}/>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Profile;