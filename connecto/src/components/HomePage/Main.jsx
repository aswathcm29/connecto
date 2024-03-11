import React from 'react'
import Right from './Message'
import Posts from './Posts'
import Profile from './Profile'
const Main = () => {
  return (
    <>
        <div className="flex w-full items-center justify-between">
            <Profile/>
            <Posts/>
            <Right/>
        </div>
    </>
  )
}

export default Main