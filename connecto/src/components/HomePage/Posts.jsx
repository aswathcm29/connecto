import React from 'react'
import './homepage.css'
import PopupPost from './PopupPost'

 const CreatePost=()=>{
  const addPost=()=>{
    const state=true;
  }
  return(
  <>
    <div className='create-post'>
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between items-center'>
        <img src='https://i.pinimg.com/originals/10/ba/fc/10bafc8ee82ff594207410048a962188.jpg' alt='nothing'
        className='rounded-full w-[3rem]'></img>
        <div className='w-[19rem] rounded-lg text-zinc-200 py-5 bg-zinc-700 ml-4 flex items-center justify-center'>
          <span>What's happening ?</span>
        </div>
      </div>
        <button className=' w-[8rem] h-[2.4rem] bg-blue-800 rounded-xl mt-5' >
        <span className='text-zinc-200'>Add post</span>
        </button>
      </div>
    </div> 
  </>
  )
 }
const Posts = () => {
  return (
    <div className="p-1 overflow-hidden h-[87vh] overflow-y-auto no-scrollbar">
       <div className=" flex flex-col gap-y-3 mt-3  ">
                  <CreatePost/>
                  <div className='post-box'></div>
                  <div className='post-box'></div>
                  <div className='post-box'></div>
                  <div className='post-box'></div>
                  <div className='post-box'></div>
        </div>
    </div>
  )
}

export default Posts

