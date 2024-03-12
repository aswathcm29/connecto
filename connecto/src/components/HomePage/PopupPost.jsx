import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
const PopupPost = () => { 
  const[isOpen,setIsOpen] = useState(true)
  const closePopup=()=>{
    setIsOpen(false)
  }
  return (
    <>
    {isOpen && (
       <div className='h-[25rem] bg-zinc-800 rounded-xl w-[35rem] p-4 relative '>
        <div className='text-right'>
              <button onClick={closePopup}>
                  <IoCloseCircleOutline className='text-3xl text-white' />
              </button>
        </div>
        <div>
            <form className='flex flex-col gap-y-3'>
                <div className='flex flex-col gap-y-2 w-[80%] mx-auto'>
                    <lable for="title" className='text-zinc-400 text-2xl'>Title</lable>
                    <input type='text' id='title' placeholder='Post Title' className='border-0 text-white bg-transparent outline-0 focus:outline-none focus:border-b-2 border-zinc-500'></input>
                </div>
                  <div className='flex flex-col gap-y-2 w-[80%] mx-auto'>
                    <lable for="description" className="text-zinc-400 text-2xl">Description</lable>
                      <div className='h-[7rem] overflow-hidden rounded-xl py-2'>
                          <textarea className='w-full h-full bg-transparent outline-none focus:outline-none text-white' placeholder='Hello world !'></textarea>
                    </div>
                </div>
                <div className='mt-1 border-b border-zinc-600 w-[80%] mx-auto'>

                </div>
                <div className='text-right w-[80%] mx-auto'>
                        <button className='px-3 py-2 rounded-xl bg-zinc-600 text-white'>Add</button>
                </div>
            </form>
        </div>

    </div>
    ) }
   
    </>
  )
}

export default PopupPost
