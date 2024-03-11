import React from 'react'

const Posts = () => {
  return (
    <div className='w-[30rem]'>
        <div className='overflow-hidden h-[100vh]'>
            <div className='overflow-hidden h-full'>
               <div className='overflow-y-auto w-full h-full no-scrollbar flex flex-col justify between'>
                  <div className='w-[27.5rem] h-[10rem] bg-zinc-600 flex items-center justify-center m-4 rounded-xl'></div>
                  <div className='w-[27.5rem] h-[22rem] bg-zinc-600 flex items-center justify-center m-4 rounded-xl'></div>
                  <div className='w-[27.5rem] h-[22rem] bg-zinc-600 flex items-center justify-center m-4 rounded-xl'></div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Posts