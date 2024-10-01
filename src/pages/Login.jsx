import React, { useState } from 'react'
import Banner from "../assets/loginRightImage.png"
import Input from '../components/Input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        if (email && password) {
            localStorage.setItem("isAuth", true)
            navigate("/")
        }
    }

    const googleLogin = () => {
        localStorage.setItem("isAuth", true)
        navigate("/")
    }


    return (
        <div className='h-screen flex p-10 items-center justify-between gap-4'>
            {/* Form content */}
            <div className='flex justify-center flex-col gap-4 sm:p-20 p-4  xl:p-40 items-center flex-1'>
                <div className='w-full'>
                    <h1 className='font-bold text-4xl'>Hey there!</h1>
                </div>

                <form onSubmit={handleLogin} className='flex flex-col mt-4 w-full gap-4'>
                    <Input label={"Email"} onChange={(e) => setEmail(e.target.value)} required />
                    <Input label={"Password"} type="password" onChange={(e) => setPassword(e.target.value)} required />
                    <div className='flex w-full justify-between gap-4 items-center'>
                        <div className='flex items-center gap-1 text-gray-500'>
                            <Input type="checkbox" />
                            <span>Remember me</span>
                        </div>

                        <span className='text-[#0C50A3] font-medium'>Forgot Password</span>
                    </div>

                    <div className='mt-4 flex flex-col gap-4'>
                        <button type='submit' className='bg-[#0C50A3] px-4 py-2 rounded-full text-white font-medium'>Login</button>
                        <button onClick={googleLogin} type='button' className='bg-gray-100 px-4 py-2 rounded-full text-gray-500 font-medium'>Login With Google</button>
                    </div>

                    <span className='text-gray-500 text-center'>Don't have an account? <span className='text-[#0C50A3]'>Sign up</span></span>
                </form>
            </div>


            {/* Banner */}
            <div className=' h-full lg:flex hidden text-white bg-[#0C50A3] rounded-sm w-[50%] px-20 py-10 flex-col'>
                <div className='max-w-[350px]  flex flex-col gap-2'>
                    <h2 className='font-bold text-5xl'>Migrate Data like a breeze</h2>
                    <p className='text-xl text-gray-300'>High Performance data pipelines built in a minute</p>
                </div>
                <div className='flex-1 px-20 py-10 overflow-hidden'>
                    <img src={Banner} className='h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default Login