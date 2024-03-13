import React, { useState } from 'react'
import './homepage.css'
import { FaPlus } from "react-icons/fa6";





const MessageBanner =(props)=>{
  return(
  <div className='flex flex-col px-2 py-2'>
  <div className='flex py-1.5 px-1.5 w-full bg-zinc-800 rounded-lg'>
  <img src ={props.profile} alt='nothing' className='rounded-full w-[3rem]'></img>
  <div className='flex flex-col text-white px-2 w-full overflow-x-hidden whitespace-nowrap'>
    <p className=''>{props.username}</p>
    <p className='text-[0.7rem] '>Hey ,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.</p>
  </div> 
  </div>   
</div>
  )
}

const SuggestBanner =(props)=>{
  const [follow,setFollow] = useState(false)
  const ToggleFollow = ()=>{
    setFollow(!follow)
  }
  return(
  <div className='flex flex-col p-2'>
  <div className='flex py-1.5 px-1.5 w-full bg-zinc-800 rounded-lg'>
  <img src ={props.profile} alt='nothing' className='rounded-full w-[3rem]'></img>
  <div className='flex flex-col justify-center px-[1.2rem] text-white  w-full overflow-x-hidden whitespace-nowrap'>
    <p className=''>{props.username}</p>
    <p className='text-[0.7rem] '>Suggested to follow</p>
  </div> 
     <div className='px-4 text-xl flex items-center'>
              <button className={`text-[0.5rem] w-[2rem] h-[2rem] rounded-xl text-blue-700 flex items-center justify-center`}
               onClick={ToggleFollow}><FaPlus className='text-xl' />
              </button>
        </div>
  </div>   
</div>
  )
}

const Message =()=>{
  return(
        <>
          <div className='message-box'>
             <header className='flex items-center justify-between w-full h-[3.9rem] bg-zinc-800 text-zinc-200 rounded-t-lg px-4'>
               <div className='flex'>
               <span className='text-lg px-2'>Message</span>
                <div className=' w-[1.4rem] h-[1.4rem] rounded-full bg-red-700 flex items-center justify-center'>
                <span>2</span>
                </div>
               </div>
             </header>
             <div className='overflow-y-auto h-[13.4rem] no-scrollbar rounded-b-xl'>
              <MessageBanner username="Cibiyanna" profile="https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"/>  
              <MessageBanner username="Jake" profile="https://i.pinimg.com/originals/10/ba/fc/10bafc8ee82ff594207410048a962188.jpg"/>  
              <MessageBanner username="Var" profile="https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"/>
              <MessageBanner username="Karlyn" profile="https://i.pinimg.com/originals/10/ba/fc/10bafc8ee82ff594207410048a962188.jpg"/>  
             </div> 
          </div>
      </>);
}

const Suggest =()=>{
  const [follow,setFollow] = useState(false)
  const ToggleFollow = ()=>{
    setFollow(!follow)
  }
  return(<>
        <div className='message-box'>
        <header className='flex items-center justify-between w-full h-[3.9rem] bg-zinc-800 text-zinc-200 rounded-t-lg px-4'>
        <div className='flex'>
              Suggestions
        </div>
        </header>
        <div className='overflow-y-auto h-[14rem] no-scrollbar rounded-b-xl'>
        <SuggestBanner 
        username="Ashwithaa"
        profile="https://i.pinimg.com/originals/10/ba/fc/10bafc8ee82ff594207410048a962188.jpg"></SuggestBanner>
        <SuggestBanner 
       username="Cibiyanna" profile="https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"></SuggestBanner>
         <SuggestBanner 
            username="Jake" profile="https://i.pinimg.com/originals/10/ba/fc/10bafc8ee82ff594207410048a962188.jpg"></SuggestBanner>
         <SuggestBanner 
            username="Karlyn" profile="https://i.pinimg.com/originals/10/ba/fc/10bafc8ee82ff594207410048a962188.jpg"></SuggestBanner>
        </div>
    </div>
  </>);
}
const Right = () => {
  return (
  <div className='flex flex-col pb-[4rem]'>
     <Message/>
     <Suggest/>
  </div>
  )
}

export default Right

