import React from 'react'
import { AiFillMessage } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { RiNotification2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center p-6 bg-zinc-800 text-white'>
         <h1 className='text-3xl text-white font-semibold'>Connecto.</h1>
    <div className="flex items-center">
       <input className="ml-2 border-black border-2 rounded-lg pl-3 px-10 py-2" type="text" name="search" id="search" placeholder="Search..." />
       <button className="rounded-lg border-black border-2 py-2 ml-2 bg-zinc-700 text-white px-3 text-2xl"><IoSearchSharp /></button>
    </div>
         <div>
             <ul className='flex items-center space-x-20 pr-5 icon-a'>
             <a href='/'><li className='nav-full'>
                    <HiHome className='mb-1' />
                    <span className='text-lg'>Home</span>
            </li></a> 
            <a href='/'><li className='nav-full'>
                    <AiFillMessage className='mb-1' />
                    <span className='text-lg'>Chat</span>
            </li></a>   
            <a href='/'><li className='nav-full'>
                    <RiNotification2Fill className='mb-1' />
                    <span className='text-lg'>Notify</span>
            </li></a>   
            <a href='/'><li className='nav-full'>
                    <CgProfile  className='mb-1' />
                    <span className='text-lg'>Profile</span>
            </li></a>   
             </ul>
         </div>
      </nav>
    </>
  )
}

export default Navbar