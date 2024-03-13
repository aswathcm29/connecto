import React, { useEffect, useState } from 'react'
import './homepage.css'
import CountUp from 'react-countup';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
const Left = ()=>{
  return (
     <div className='pb-[26.1rem]'>
       <Profile/>
     </div>
  )
}
const Profile = () => {
    const navigate = useNavigate()
    const [userData,setUserData] = useState(null);
    const [followers,setFollowers] = useState(0);
    const [following,setFollowing] = useState(0);
    const [username,setUsername] = useState('guest')
    useEffect(()=>{
        fetctUserData(username)
    },[username])


    const fetctUserData = async(username)=>{
        try{
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?username=`,{withCredentials:true})
            console.log(res.data.user)
            setFollowers(res.data.user.followers)
            setFollowing(res.data.user.following)
            setUsername(res.data.user.username)
        }catch(err){
            navigate('/home')
            console.log(err)
        }
    }
  return (
    <div>
    <div className='profile-box flex-col shadow-lg'>
    <div className='flex flex-row justify-between items-center pb-2'>
       <img src ="https://i.pinimg.com/originals/10/ba/fc/10bafc8ee82ff594207410048a962188.jpg" alt='nothing'
        className='rounded-full mr-8 w-[5rem]'></img>
        <div className='flex flex-col'>
        <div className='text-2xl '>{username}</div>
        <div className='text-zinc-400 text-[11px]'>@username</div>
        </div>
        </div>
        <div className='flex flex-row py-6'>
        <div className='flex flex-col'>
          <div className='px-5 py-2 mb-2 rounded-lg flex items-center justify-center  bg-zinc-800 hover:shadow-md cursor-pointer'>
              <p>Followers</p>
          </div>
          <div className='flex justify-center items-center text-xl'><CountUp end={followers} /></div>
        </div>
        <div className='flex flex-col ml-4'>
          <div className='px-5 py-2 mb-2 rounded-lg flex items-center justify-center bg-zinc-800 hover:shadow-md cursor-pointer'>
              <p>Following</p>
          </div>
          <div className='flex justify-center items-center text-xl'><CountUp end={following} /></div>
        </div>
      </div>
        <Link to={`/Profile/${'aswath'}`}> <button className='px-2 py-2 mt-1 bg-blue-800  rounded-lg'>
             View Profile
        </button>
        </Link>
    </div>
    </div>
  )
}

export default Left