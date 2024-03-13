import React from 'react'
import './homepage.css'
import CountUp from 'react-countup';
import {Link} from 'react-router-dom';
const Left = ()=>{
  return (
     <div className='pb-[26.1rem]'>
       <Profile/>
     </div>
  )
}
const Profile = () => {

  return (
    <div>
    <div className='profile-box flex-col shadow-lg'>
    <div className='flex flex-row justify-between items-center pb-2'>
       <img src ="https://i.pinimg.com/originals/10/ba/fc/10bafc8ee82ff594207410048a962188.jpg" alt='nothing'
        className='rounded-full mr-8 w-[5rem]'></img>
        <div className='flex flex-col'>
        <div className='text-2xl '>Aswath CM</div>
        <div className='text-zinc-400 text-[11px]'>@aswathcm29</div>
        </div>
        </div>
        <div className='flex flex-row py-6'>
        <div className='flex flex-col'>
          <div className='px-5 py-2 mb-2 rounded-lg flex items-center justify-center  bg-zinc-800 hover:shadow-md cursor-pointer'>
              <p>Followers</p>
          </div>
          <div className='flex justify-center items-center text-xl'><CountUp end={567} /></div>
        </div>
        <div className='flex flex-col ml-4'>
          <div className='px-5 py-2 mb-2 rounded-lg flex items-center justify-center bg-zinc-800 hover:shadow-md cursor-pointer'>
              <p>Following</p>
          </div>
          <div className='flex justify-center items-center text-xl'><CountUp end={890} /></div>
        </div>
      </div>
        <Link to={`/Profile/${'aswath'}`}> <button className='px-2 py-2 mt-1 bg-zinc-800  rounded-lg'>
             View Profile
        </button>
        </Link>
    </div>
    </div>
  )
}

export default Left