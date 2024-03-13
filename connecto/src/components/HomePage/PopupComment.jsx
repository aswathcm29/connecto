import React, { useState , useEffect } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from 'axios';

const PopupComment = (props) => {
    const { addComment, setAddComment } = props
    const closePopup = () => {
        setAddComment(false)
    }
    const [comment, setComment] = useState('')
    const [showCommnent,setShowComment] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault()
        if (!comment) {
            alert('enter all field')
            return;
        }
        
        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/posts/handleComments`,
                {
                    postId:1,
                    comment,
                },
                {
                    withCredentials:true,
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
            {addComment && (
                <div className={`${showCommnent ? 'h-[30rem]' : ' h-[20rem]'} bg-zinc-800 rounded-xl w-[35rem] p-4 relative flex flex-col gap-y-4`}>
                    <div className=''>
                        <div className='flex flex-row justify-between w-[80%] mx-auto border-b border-zinc-600'>
                            <div className='flex flex-row '>
                                <button className='p-2 text-lg font-semibold text-zinc-200' onClick={()=>setShowComment(false)}>Comment</button>
                                <button className='p-2 text-lg font-semibold text-zinc-200' onClick={()=>setShowComment(true)}>View</button>
                            </div>
                            <button onClick={closePopup} className={''}>
                                <IoCloseCircleOutline className='text-3xl text-white' />
                            </button>
                        </div>
                    </div>
                    {
                        (showCommnent === false) ?
                        <>
                                <div>
                                    <form className='flex flex-col gap-y-3' onSubmit={handleSubmit}>
                                        <div className='flex flex-col gap-y-2 w-[80%] mx-auto'>
                                            <lable for="description" className="text-zinc-400 text-2xl">Add Comment</lable>
                                            <div className='h-[7rem] overflow-hidden rounded-xl py-2'>
                                                <textarea className='w-full h-full bg-transparent outline-none focus:outline-none text-zinc-300' placeholder='Hello world !'
                                                    onChange={(e) => setComment(e.target.value)}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className='mt-1 border-b border-zinc-600 w-[80%] mx-auto'>

                                        </div>
                                        <div className='text-right w-[80%] mx-auto'>
                                            <button className='px-3 py-2 rounded-xl bg-zinc-600 text-white'>Add</button>
                                        </div>
                                    </form>
                                </div>
                        </>
                        :<>
                            <div className='overflow-hidden overflow-y-auto no-scrollbar flex flex-col gap-y-4'> 
                                    <CommentBox addComment={addComment} setAddComment={setAddComment}
                                    profileImg="https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"
                                    username="Cibiyanna P"
                                    time="2 hours ago"
                                    description="By incorporating these elements into your portfolio, you can demonstrate your passion for data science, your eagerness to learn and grow, and your ability to apply data-driven techniques to real-world problems, all while showcasing your unique journey as an engineering student transitioning into the field of data science." />
                                    <CommentBox addComment={addComment} setAddComment={setAddComment}
                                        profileImg="https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"
                                        username="Cibiyanna P"
                                        time="2 hours ago"
                                        description="By incorporating these elements into your portfolio, you can demonstrate your passion for data science, your eagerness to learn and grow, and your ability to apply data-driven techniques to real-world problems, all while showcasing your unique journey as an engineering student transitioning into the field of data science." />
                            </div>
                        </>
                    }
                </div>
            )}

        </>
    )
}

export const CommentBox = (props) => {
    const [follow, setFollow] = useState(false)
    const [active, setActive] = useState(false)
    const { addComment, setAddComment } = props
    const ToggleFollow = () => {
        setFollow(!follow)
    }
    return (
        <>
            <div className='comment-box'>
                <header className='flex items-center justify-between w-full h-[3.9rem] bg-zinc-900 text-zinc-200 rounded-t-lg '>
                    <div className='flex flex-row items-center'>
                        <img src={`${props.profileImg}`} alt='mottai'
                            className='mx-2 rounded-full w-[3rem]'></img>
                        <div className='flex flex-col'>
                            <span className='mx-2 '>{props.username}</span>
                            <span className='mx-2 text-[10px] text-zinc-300'>{props.time}</span>
                        </div>
                    </div>
                    <div className='px-4 text-xl'>
                        <button className={`text-[1rem] w-[7rem] h-[2.4rem] rounded-xl ${follow ? ` bg-blue-800` : `border-blue-800 border-2`}`} onClick={ToggleFollow}>
                            {follow ? 'Follow' : 'Following'}
                        </button>
                    </div>
                </header>

                <mid className='p-2 '>
                    <div className='p-4 rounded-xl overflow-hidden'>
                        <span className='text-xl text-slate-200'>{props.description}</span>
                    </div>
                </mid>
            </div>
        </>
    )
}




export default PopupComment
