import {useState,useEffect} from 'react'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const MainLog = () => {
    const [isLogin, setIsLogin] = useState(true);
    useEffect(() => {
      setIsLogin(false);
    }, []);
    return (
      <div>
          <div
          className={`h-[100vh] flex justify-center items-center bg-cover`}
          // style={{ backgroundImage: `url(${login_bg}) ` }}
        >
          <div
            className={`flex ${isLogin === true ? "flex-row" : "flex-row-reverse"} w-full max-w-[600px] justify-center`}
          >
            <div className="min-w-[350px] hidden items-center justify-center text-white md:flex  bg-slate-950 rounded-tl-xl sm:rounded-l-xl sm:rounded-t-xl">
          
            </div>
            {isLogin ? (
              <LoginForm setIsLogin={setIsLogin} />
            ) : (
              // <SignupForm setIsLogin={setIsLogin} />
              <SignupForm setIsLogin={setIsLogin}/>
            )}
          </div>
        </div>
      </div>
    )
}

export default MainLog