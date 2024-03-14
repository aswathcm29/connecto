import React, { useEffect, useState } from 'react'
import { AiFillMessage } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { RiNotification2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
        const [username ,setUsername]=useState('')
        const navigate = useNavigate()
        const [searchUsername,setSearchUser]  = useState('')
        useEffect(()=>{
            fetctUserData()
        },[])
    
        const fetctUserData = async(username)=>{
            try{
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?username=`,{withCredentials:true})
                setUsername(res.data.user.username)
            }catch(err){
                console.log(err)
            }
        }

        const navigateSearchUser = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?search=${searchUsername}`,{withCredentials:true})
                navigate(`profile/${searchUsername}`)
                setSearchUser('')
            } catch(err){
                console.log(err)
            }
        }
        
        const handleLogout = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/logout`,{withCredentials:true})
                navigate('/login')
            } catch(err){   
                navigate('/home')
            }
        }
        
  return (
    <>
      <nav className='flex justify-between items-center p-6 bg-zinc-950 text-white'>
        <Link to={'/home'}><h1 className='text-3xl text-white font-semibold'>Connecto.</h1> </Link>
            <div className="flex items-center" >
                <input className="ml-2 rounded-lg pl-3 px-10 py-2 text-gray-800" type="text" name="search" value={searchUsername} onChange={(e)=>setSearchUser(e.target.value)} id="search" placeholder="Search..." />
                <button className="rounded-lg py-2 ml-2 bg-zinc-700 text-white px-3 text-2xl" onClick={navigateSearchUser}><IoSearchSharp /></button>
            </div>
         <div>
            <ul className='flex items-center space-x-20 pr-5 icon-a'>
                 <Link  to={`/home`}>
                        <li className='nav-full'>
                           <HiHome className='mb-1' />
                            <span className='text-[1rem]'>{'Home'}</span>
                        </li>
                </Link>
                <Link to={`/chat`}>
                        <li className='nav-full'>
                         <AiFillMessage className='mb-1' />
                            <span className='text-[1rem]'>{'Chat'}</span>
                        </li>
                </Link>
                <Link  to={`/profile/${username}`}>
                        <li className='nav-full'>
                             <CgProfile className='mb-1' />
                            <span className='text-[1rem]'>{'Profile'}</span>
                        </li>
                </Link>
                <button onClick={() => handleLogout()}>
                    <li className='nav-full' >
                        <RiNotification2Fill className='mb-1' />
                        <span className='text-[1rem]'>{'Logout'}</span>
                    </li>
                </button>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar