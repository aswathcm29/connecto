import React , {useState} from 'react'
import Right from './Right'
import Posts from './Posts'
import Left from './Left'
import PopupPost from './PopupPost'
import PopupComment from './PopupComment'

const Main = () => {
  const [addPost,setAddPost] = useState(false)
  const [addComment,setAddComment] = useState(false)
  return (
    <>
      <div className='bg-zinc-900 relative'>
          <div className="flex w-[80%] mx-auto items-center justify-around ">
              <Left/>
              <Posts addPost={addPost} setAddPost={setAddPost} addComment={addComment} setAddComment={setAddComment}/>
              <Right/>
          </div>
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
            {
              (addPost === true) ?
              <PopupPost addPost={addPost} setAddPost={setAddPost} /> :
              (addComment === true) ? 
              <PopupComment addComment={addComment} setAddComment={setAddComment} />
              :
              <>
                
              </>
            }
          </div>
      </div>
    </>
  )
}


export default Main