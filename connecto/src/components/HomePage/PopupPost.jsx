import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from 'axios';

const PopupPost = (props) => { 
    const { addPost, setAddPost } = props
    const closePopup=()=>{
        setAddPost(false)
    }
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        if(!title || !description){
            alert('enter all field')
            return;
        }

        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/posts/newpost`,
                {
                    postTitle: title,
                    content: description
                },
                {
                    withCredentials: true   
                }
            )
            console.log(res)
        }
        catch (err) {
            console.log(err)
        }   
        
    }




  return (
    <>
    {addPost && (
       <div className='h-[25rem] bg-zinc-800 rounded-xl w-[35rem] p-4 relative '>
        <div className='text-right'>
              <button onClick={closePopup} className={''}>
                  <IoCloseCircleOutline className='text-3xl text-red-700' />
              </button>
        </div>
        <div>
            <form className='flex flex-col gap-y-3' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-y-2 w-[80%] mx-auto'>
                    <span for="title" className='text-zinc-200 text-2xl '>Title</span>
                    <input type='text' id='title' placeholder='Post Title' className='border-0 text-white bg-transparent outline-0 focus:outline-none focus:border-b-2 border-zinc-500'
                        onChange={(e)=>setTitle(e.target.value)}
                    ></input>
                </div>
                  <div className='flex flex-col gap-y-2 w-[80%] mx-auto'>
                    <lable for="description" className="text-zinc-200 text-2xl">Description</lable>
                      <div className='h-[7rem] overflow-hidden rounded-xl py-2'>
                          <textarea className='w-full h-full bg-transparent outline-none focus:outline-none text-white' placeholder='Type your description'
                          onChange={(e)=>setDescription(e.target.value)}
                          ></textarea>
                    </div>
                </div>
                <div className='mt-1 border-b border-zinc-600 w-[80%] mx-auto'>

                </div>
                <div className='text-right w-[80%] mx-auto'>
                        <button className='px-3 py-2 rounded-xl bg-blue-800 text-white'>Add</button>
                </div>
            </form>
        </div>

    </div>
    ) }
   
    </>
  )
}

export default PopupPost
