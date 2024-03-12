import React from 'react'
import { AiFillMessage } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { RiNotification2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
        
  return (
    <>
      <nav className='flex justify-between items-center p-6 bg-zinc-950 text-white'>
         <h1 className='text-3xl text-white font-semibold'>Connecto.</h1>
         <div className="flex items-center">
                <input className="ml-2 rounded-lg pl-3 px-10 py-2 text-gray-800" type="text" name="search" id="search" placeholder="Search..." />
                <button className="rounded-lg py-2 ml-2 bg-zinc-700 text-white px-3 text-2xl"><IoSearchSharp /></button>
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
                <Link to={`/notifications`}>
                        <li className='nav-full'>
                                <RiNotification2Fill className='mb-1' />
                            <span className='text-[1rem]'>{'Ring'}</span>
                        </li>
                </Link>
                <Link  to={`/profile/${'aswath'}`}>
                        <li className='nav-full'>
                             <CgProfile className='mb-1' />
                            <span className='text-[1rem]'>{'Profile'}</span>
                        </li>
                </Link>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar