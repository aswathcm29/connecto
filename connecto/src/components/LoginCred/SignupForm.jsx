/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from 'react-icons/bi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import LoginForm from './LoginForm';
import axios from 'axios'

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
     const res = await axios.post(process.env.REACT_APP_REGISTER_URL,{
       username,
       email,
       password
     })
     console.log('Regsiter Successful')
     console.log(res)
     navigate('/home')
    }
    catch(err){
      console.log(err.message)
    }
  }

  const toLogin = () => {
    navigate("/login");
  };
  return (
    <div
    className={`h-[100vh] flex justify-center items-center bg-zinc-950`}>
    <div
    className="text-white flex flex-col justify-center items-center gap-y-4 p-14 py-10 bg-slate-800 border-slate-400 rounded-xl shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative sm:rounded-r-xl sm:rounded-t-xl "
  >
    <h1 className="text-4xl text-white font-bold text-center mb-6">
      Register
    </h1>
    <div className="relative ">
      <input
        type="text"
        name="firstName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className={`block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 ${usernameError === null ? "border-gray-300" : (usernameError === false) ? "border-green-500" : "border-red-600"} appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer `}
        placeholder=""
      />
      <label
        htmlFor=""
        className="text-gray absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 "
      >
        Username
      </label>
      <BiUser className="absolute top-1 right-4" />
    </div>
    <div className="text-left block w-full">
      <p className="text-sm">{usernameError}</p>
    </div>
    <br />
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className={`block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 ${passwordError === null ? "border-gray-300" : (passwordError === false) ? "border-green-500" : "border-red-600"}  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer`}
        placeholder=""
      />
      <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 ">
        Password
      </label>
      <div
        className="absolute top-1 right-4 cursor-pointer"
        onClick={handleTogglePassword}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </div>

    </div>
    <div className="text-left block w-full ">
      <p className="text-sm">{passwordError}</p>
    </div>
    <br/>
    <div className="relative ">     
      <input
        type="email"
        name="lastName"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={` block w-72 py-1 px-0 text-sm text-white ${emailErrorMessage === null ? "border-gray-300" : (emailErrorMessage === false) ? "border-green-500" : "border-red-600"} bg-transparent border-0 border-b-2  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer `}
        placeholder=""
      />
      <label
        htmlFor=""
        className="text-gray absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 "
      >
        Email
      </label>
      <AiOutlineMail className="absolute top-1 right-4" />
    </div>
    <button
          className="w-[70%] font-bold mb-4 text-[18px] mt-4 rounded-full bg-zinc-500 text-violet-800 hover:bg-violet-600 hover:text-white py-2 transition colors duration-300"
          type="submit" onClick={()=>handleSubmit()} 
        >
          Register
          </button>
    <p>
      Already have an account ?{" "}
      <button className="text-blue-500" onClick={() => toLogin()}>
        Login
      </button>
    </p>
</div>
</div>
  )
}

export default SignupForm