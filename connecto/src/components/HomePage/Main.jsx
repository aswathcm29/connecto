import React from 'react'
import Right from './Right'
import Posts from './Posts'
import Left from './Left'

const Main = () => {
  return (
    <>
    <div className='bg-zinc-900'>
        <div className="flex w-[80%] mx-auto items-center justify-between ">
            <Left/>
            <Posts/>
            <Right/>
        </div>
    </div>
    </>
  )
}

export default Main