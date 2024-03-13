import React from 'react'
import './homepage.css'


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
             <div className='overflow-y-auto h-[10.2rem] no-scrollbar rounded-b-xl'>
              <MessageBanner username="Cibiyanna" profile="https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"/>  
              <MessageBanner username="Jake" profile="https://i.pinimg.com/originals/10/ba/fc/10bafc8ee82ff594207410048a962188.jpg"/>  
              <MessageBanner username="Var" profile="https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"/>
              <MessageBanner username="Karlyn" profile="https://i.pinimg.com/originals/10/ba/fc/10bafc8ee82ff594207410048a962188.jpg"/>  
             </div> 
          </div>
      </>);
}

const Suggest =()=>{
  return(<>
        <div className='message-box'>
        <header className='flex items-center justify-between w-full h-[3.9rem] bg-zinc-800 text-zinc-200 rounded-t-lg px-4'>
        <div className='flex'>
               <span className='text-lg px-2'>Recommended</span>
        </div>
        </header>
        </div>
  </>);
}
const Right = () => {
  return (
  <div className='flex flex-col pb-[10.2rem]'>
     <Message/>
     <Suggest/>
  </div>
  )
}

export default Right

