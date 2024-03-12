import React from 'react'
import './homepage.css'

const Message =()=>{
  return(<>
          <div className='message-box'></div>
  </>);
}

const Suggest =()=>{
  return(<>
        <div className='w-[19rem] h-[15rem] bg-zinc-950 flex items-center justify-center m-4 rounded-xl'></div>
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

