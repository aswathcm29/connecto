import React from 'react'


const Message =()=>{
  return(<>
          <div className='w-[19rem] h-[15rem] bg-zinc-600 flex items-center justify-center m-4 rounded-xl'></div>
  </>);
}

const Suggest =()=>{
  return(<>
        <div className='w-[19rem] h-[15rem] bg-zinc-600 flex items-center justify-center m-4 rounded-xl'></div>
  </>);
}
const Right = () => {
  return (
  <div className='flex flex-col relative bottom-[9rem]'>
     <Message/>
     <Suggest/>
  </div>
  )
}

export default Right

