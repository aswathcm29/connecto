/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toSignup = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(process.env.REACT_APP_REGISTER_URL, {
        username,
        password,
        email
      })
      console.log('Login Successful')
      console.log(res)
      navigate('/login')
    }
    catch (err) {
      setErrorMessage(err.response.data.message)
    }
  }



  return (
    <div className='h-[100vh] flex justify-center items-center bg-zinc-950'>
      <form
        className="text-white flex flex-col justify-center items-center gap-y-4 p-14 py-10 bg-slate-800 border-slate-400 rounded-xl shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative sm:rounded-r-xl sm:rounded-t-xl "
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Register
        </h1>
        <div className="relative my-2">
          <input
            type="text"
            id="name"
            name="firstName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer "
            placeholder=""
          />
          <label
            htmlFor=""
            className="text-gray absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 ">
            Username
          </label>
          <BiUser className="absolute top-1 right-4" />
        </div>
        <br />
        <div className="relative my-2">
          <input
            type={showPassword ? "text" : "password"}
            id="pass"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer "
            placeholder=""
          />
          <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 ">
            Password
          </label>
          <button
            className="absolute top-1 right-4 cursor-pointer"
            onClick={handleTogglePassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <br />
        <div className="relative my-2">
          <input
            type="text"
            id="name"
            name="firstName"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer "
            placeholder=""
          />
          <label
            htmlFor=""
            className="text-gray absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 ">
            Email
          </label>
          <BiUser className="absolute top-1 right-4" />
        </div>
        <p>{errorMessage}</p>
        <button
          className="w-[70%] font-bold mb-4 text-[18px] mt-4 rounded-full text-white  py-2 transition colors duration-300"
          type="submit"
          style={{'backgroundColor':'blue'}}
        >
          Register
        </button>

        <span className="mb-4">
          Have account?{" "}
          <button className="text-blue-500" onClick={() => toSignup()}>
            Login
          </button>
        </span>
        <label>{errorMessage}</label>
      </form>
    </div>
  )
}

export default LoginForm