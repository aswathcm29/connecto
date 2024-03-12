import React from 'react'

const Posts = () => {
  return (
    <div className="p-1 overflow-hidden h-[87vh] overflow-y-auto no-scrollbar">
       <div className=" flex flex-col gap-y-3 mt-3  ">
                  <div className='create-post'></div>
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

