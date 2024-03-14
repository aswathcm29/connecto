import { Postbox } from "../HomePage/Posts"
import { useEffect,useState } from "react"
import axios from 'axios'
import PopupComment from "../HomePage/PopupComment"
import { CommentBox } from "../HomePage/PopupComment"
const UserActivity = (props) =>{
    const [allPosts, setAllPosts] = useState([])

    const { posts, comments, likes, defaultShow } = props;
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
            <div className="flex flex-col gap-y-3 justify-center items-center no-scrollbar overflow-y-auto ">
                {
                    (defaultShow === 0) ?
                        posts && posts.map((post) => {
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
                        }) :
                        (defaultShow === 1) ?
                            comments && comments.map((comment) => {
                                return (
                                    <>
                                        <CommentBox
                                            profileImg="https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"
                                            username={comment.comment_user}
                                            time={comment.timing}
                                            description={comment.comment} />
                                    </>
                                )
                        }) :
                        (defaultShow === 2) ?
                                likes && likes.map((like) => {
                                    return (
                                        <>
                                            <Postbox
                                                profileImg="https://th.bing.com/th/id/OIP.9KB-UoaLsFI-UFgy8n45AAAAAA?rs=1&pid=ImgDetMain"
                                                username={like.username}
                                                time="2 hours ago"
                                                key={like.postId}
                                                description={like.content} />
                                        </>
                                    )
                                })
                        :
                        <></>
                }
                
            </div>
        </>
    )
}

export default UserActivity