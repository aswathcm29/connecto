import { Postbox } from "../HomePage/Posts"
import { useEffect,useState } from "react"
import axios from 'axios'

const UserActivity = () =>{
    const [allPosts, setAllPosts] = useState([])
    useEffect(() => {
        getAllPosts()
    }, [])

    async function getAllPosts() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/newpost`, { withCredentials: true });
            const userPost = res.data.posts.filter((post)=>{
                return post.username === res.data.username
            })
            setAllPosts(userPost)
        } catch (err) {
            console.log(err.response.data.message)
        }
    }
    return(
        <>
            <div className="flex flex-col gap-y-3 justify-center items-center no-scrollbar overflow-y-auto">
                {
                    allPosts && allPosts.map((post) => {
                        return (
                            <>
                                <Postbox
                                    profileImg="https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"
                                    username={post.username}
                                    time="2 hours ago"
                                    key={post.postId}
                                    description={post.content} />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default UserActivity