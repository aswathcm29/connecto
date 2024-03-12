import './profile.module.css'
import UserActivity from './userActivity';

const Profile = () => {
    return(
        <>
            <div className='bg-zinc-900 text-white '>
                <div className="flex w-[35rem] mx-auto py-10 items-center justify-between ">
                    <div className='h-[35rem] bg-zinc-800 w-full rounded-xl'>
                        <div className='p-8 h-full'>
                            <div className='flex flex-row'>
                                <button className='text-lg'>Edit</button>
                            </div>
                            <div className='w-[8rem] mx-auto rounded-full overflow-hidden'>
                                <img src='https://avatars.githubusercontent.com/u/121782238?v=4' className='w-full h-full'></img>
                            </div>
                            <div className='h-[8rem] flex flex-col justify-center items-center gap-4'>
                                <h1 className='text-2xl font-bold'>Mikey</h1>
                                <div className=' flex flex-row gap-8 justify-around items-center'>
                                    <p>followers: 0</p>
                                    <p>following: 0</p>
                                </div>
                            </div>
                            <div className='w-[80%] mx-auto flex flex-col gap-8'>
                                <div className='flex flex-col '>
                                    <h1>About : </h1>
                                    <label for='description'>
                                        Hello I am cibiyanna 
                                    </label>
                                </div>
                               <div className='social-media'>
                                    <h1>Social Media : </h1>
                               </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
                <div className='h-[100vh]'>
                    <div className='w-[60%] mx-auto h-full flex flex-row p-4 gap-4'>
                        <div className='w-[22rem] h-[20rem] flex flex-col gap-y-8 pt-[3rem] bg-zinc-800 rounded-xl items-center'>
                            <div>
                                <button className='bg-zinc-600 px-4 py-2 rounded-xl'>Posts</button>
                            </div>
                            <div>
                                <button className=' px-4 py-2 rounded-xl'>Comments</button>
                            </div>
                            <div>
                                <button className='px-4 py-2 rounded-xl'>Likes</button>
                            </div>
                        </div>
                        <div className='w-full bg-zinc-800 h-[45rem] overflow-y-auto no-scrollbar rounded-xl'>
                                <UserActivity/>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Profile;