import React , {useState} from 'react'
import './homepage.css'
import PopupPost from './PopupPost'
import { TfiMore } from "react-icons/tfi";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";

 const CreatePost=(props)=>{
  const { addPost, setAddPost } = props

  const followHandle=()=>{

  }
  return(
  <>
    <div className='create-post'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center'>
          <img src='https://i.pinimg.com/originals/10/ba/fc/10bafc8ee82ff594207410048a962188.jpg' alt='nothing'
          className='rounded-full w-[3rem]'></img>
          <div className='w-[19rem] rounded-lg text-zinc-200 py-3 bg-zinc-700 ml-4 flex items-center justify-center'>
            <span>What's happening ?</span>
          </div>
        </div>
          <button className=' w-[8rem] h-[2.4rem] bg-blue-800 rounded-xl mt-5' onClick={()=>setAddPost(true)}>
            <span className='text-zinc-200'>Add post</span>
          </button>
        </div>
    </div> 
  </>
  )
 }
const Posts = (props) => {
  const { addPost, setAddPost } = props
  return (
    <div className="p-1 overflow-hidden h-[87vh] overflow-y-auto no-scrollbar">
       <div className=" flex flex-col gap-y-3 mt-3  ">
                  <CreatePost/>
                  <Postbox 
                    profileImg = "https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"
                    username="Cibiyanna P"
                    time="2 hours ago"
                    description={"By incorporating these elements into your portfolio, you can demonstrate your passion for data science, your eagerness to learn and grow, and your ability to apply data-driven techniques to real-world problems, all while showcasing your unique journey as an engineering student transitioning into the field of data science."}/>
                     <Postbox 
                    profileImg = "https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"
                    username="Cibiyanna P"
                    time="2 hours ago"
                    description={"By incorporating these elements into your portfolio, you can demonstrate your passion for data science, your eagerness to learn and grow, and your ability to apply data-driven techniques to real-world problems, all while showcasing your unique journey as an engineering student transitioning into the field of data science."}/>
        </div>
    </div>
  )
}

const Postbox =(props)=>{
    const [follow,setFollow] = useState(false)
    const [active, setActive] = useState(false)

    const ToggleFollow = ()=>{
      setFollow(!follow)
    }
  return (
    <>
     <div className='post-box mt-10 '> 
         <header className='flex items-center justify-between w-full h-[3.9rem] bg-zinc-800 text-zinc-200 rounded-t-lg '>
         <div className='flex flex-row items-center'>
              <img src={`${props.profileImg}`} alt='mottai' 
              className='mx-2 rounded-full w-[3rem]'></img>
              <div className='flex flex-col'>
               <span className='mx-2 '>{props.username}</span>
               <span className='mx-2 text-[10px] text-zinc-300'>{props.time}</span>
              </div>
           </div>
           <div className='px-4 text-xl'>
              <button className={`text-[1rem] w-[7rem] h-[2.4rem] rounded-xl ${follow ? ` bg-blue-800`: `border-blue-800 border-2`}`} onClick={ToggleFollow}>
              {follow ? 'Follow' : 'Following'}
              </button>
           </div>
         </header>
         
         <mid>
         <div className='m-8'>
             <span className='text-xl text-slate-200'>{props.description}</span>
         </div>
         </mid>

         <footer className='flex items-center w-full h-[3.9rem] bg-zinc-800 text-zinc-200 rounded-b-lg'>
           <div className='flex flex-col'>
           <div className='flex items-center justify-between'>
            <div className='flex  ml-4'>
               <button className='flex flex-row px-3 py-2 bg-zinc-700 rounded-lg'>
                 {/* <span>Reaction</span> */}
                 <BiLike className='text-2xl '/>
                 <span className='pl-2'>123</span>
               </button>
            </div>
            <div className='flex  ml-4'>
               <button className='flex flex-row px-3 py-2 bg-zinc-700 rounded-lg'>
                 <FaComment className='text-2xl'/>
                 <span className='pl-2'>123</span>
               </button>
            </div>
            </div>
           </div>
           
         </footer>
     </div>
    </>
  )
}

export default Posts

