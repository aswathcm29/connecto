import React from 'react'
import { AiFillMessage } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { RiNotification2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'

const Navbar = () => {

        const navItems = [
                {
                        icon:<HiHome className='mb-1' />,
                        text:'Home'
                 },
                {
                        icon:<AiFillMessage className='mb-1' />,
                        text:'Chat' 
                },
                {
                        icon:<RiNotification2Fill className='mb-1' />,
                        text: 'Notify' 
                },
                {
                        icon:<CgProfile className='mb-1' />, 
                        text: 'Profile' 
                }];

  return (
    <>
      <nav className='flex justify-between items-center p-6 bg-zinc-800 text-white'>
         <h1 className='text-3xl text-white font-semibold'>Connecto.</h1>
         <div className="flex items-center">
                <input className="ml-2 rounded-lg pl-3 px-10 py-2 text-gray-800" type="text" name="search" id="search" placeholder="Search..." />
                <button className="rounded-lg py-2 ml-2 bg-zinc-700 text-white px-3 text-2xl"><IoSearchSharp /></button>
        </div>
         <div>
            <ul className='flex items-center space-x-20 pr-5 icon-a'>
                {navItems.map((item, index) => (
                    <Link key={index} to='/'>
                        <li className='nav-full'>
                            {item.icon}
                            <span className='text-[1rem]'>{item.text}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar