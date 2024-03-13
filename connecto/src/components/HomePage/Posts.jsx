import React , {useState , useEffect} from 'react'
import './homepage.css'
import axios from 'axios'
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { timingFunction } from '../../utils/timingGenerator';


 const CreatePost=(props)=>{
  const { addPost, setAddPost } = props
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
  const { addPost, setAddPost, addComment, setAddComment, setOpenedComment } = props
  const [allPosts,setAllPosts] = useState([])

  useEffect(()=>{
    getAllPosts()
  },[])

  async function getAllPosts(){
    try{
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/newpost`,{withCredentials:true});
    
      const userPost = res.data.posts.filter((post) => {
        return post.username !== res.data.username
      })
      console.log(userPost)
      const newArray = userPost.map((post) => {
        const timing = timingFunction(post.updatedAt)
        return {
          ...post,
          timing,
        }
      })
      console.log(newArray)
      setAllPosts(newArray)
    }catch(err){
      console.log(err.response.data.message)
    }
  }

  return (
    <div className="p-1 overflow-hidden h-[87vh] overflow-y-auto no-scrollbar">
       <div className=" flex flex-col gap-y-3 mt-3  ">
          <CreatePost addPost={addPost} setAddPost={setAddPost}/>
          {
            allPosts && allPosts.map((post)=>{
              return(
                <>
                  <Postbox addComment={addComment} setAddComment={setAddComment}
                    profileImg="https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"
                    username={post.username}
                    time={post.timing}
                    key={post.postId}
                    postId={post.postId}
                    description={post.content} 
                    likes={post.likes}
                    setOpenedComment={setOpenedComment}
                    />
                </>
              )
            })
          }
        </div>
    </div>
  )
}

export const Postbox =(props)=>{
    const [follow,setFollow] = useState(false)
    const [active, setActive] = useState(false)
    const { addComment, setAddComment, setOpenedComment } = props

    const ToggleFollow = ()=>{
      setFollow(!follow)
    }

    const [username,setUsername] = useState(props.username)
    const [description, setDescription] = useState(props.description)
    const [likes, setLikes] = useState(props.likes)
    const [time,setTime] = useState(props.time)
    const [postId,setPostId] = useState(props.postId)
    const [likeflag, setLikeFlag] = useState(-1)

    const handleLikes = async () =>{
      try{
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/handlelikes?postId=${postId}`,{withCredentials:true})
        if(res.data.what === -1){
          setLikeFlag(-1)
        }
        if(res.data.what === +1){
          setLikeFlag(1)
        }
        setLikes(likes+res.data.what)
      } catch(err){
        console.log('problem in adding likes')
      }
    }
    
    function handleComment(){
      setAddComment(true)
      setOpenedComment(postId)
    }

  return (
    <>
     <div className='post-box mt-10'> 
         <header className='flex items-center justify-between w-full h-[3.9rem] bg-zinc-800 text-zinc-200 rounded-t-lg '>
         <div className='flex flex-row items-center'>
              <img src={`${props.profileImg}`} alt='mottai' 
              className='mx-2 rounded-full w-[3rem]'></img>
              <div className='flex flex-col'>
               <span className='mx-2 '>{username}</span>
               <span className='mx-2 text-[10px] text-zinc-300'>{time}</span>
              </div>
           </div>
           <div className='px-4 text-xl'>
              <button className={`text-[1rem] w-[7rem] h-[2.4rem] rounded-xl ${follow ? ` bg-blue-800`: `border-blue-800 border-2`}`} onClick={ToggleFollow}>
              {follow ? 'Follow' : 'Following'}
              </button>
           </div>
         </header>
         
         <div>
         <div className='m-8'>
             <span className='text-xl text-slate-200'>{description}</span>
         </div>
         </div>

         <footer className='flex items-center w-full h-[3.9rem] bg-zinc-800 text-zinc-200 rounded-b-lg'>
           <div className='flex flex-col'>
           <div className='flex items-center justify-between'>
            <div className='flex  ml-4'>
               <button className='flex flex-row px-2 py-2 bg-zinc-700 rounded-lg' onClick={handleLikes}>
                 {/* <span>Reaction</span> */}
                {
                  likeflag === -1 ? <BiLike className='text-2xl'/> : <BiSolidLike className='text-2xl'/>
                }
                 <span className='pl-2'>{likes}</span>
               </button>
            </div>
            <div className='flex  ml-4'>
               <button className='flex flex-row px-2 py-2 bg-zinc-700 rounded-lg' onClick={handleComment}>
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

