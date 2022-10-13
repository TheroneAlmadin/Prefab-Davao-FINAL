import React from 'react'
import loginImg from '../data/logo.png'

console.log("TEST")

const Login = () => {
  return (
    <div style={{backgroundColor: '#323131'}}>
    <div className='grid w-full h-screen grid-cols-1 bg-neutral-700 center sm:grid-cols-2'>
        <div className='hidden mt-32 sm:block ml-44'>
            <img classname='flex flex-col object-left w-auto= h-auto'src={loginImg} alt="" />
        </div>
        <div className='flex flex-col justify-center bg-neutral-700'>
        <h2 className='text-4xl font-bold text-center text-white'>Welcome to Prefab!</h2> 
        <br></br>
            <form className='max-w-[400px] w-full mx-auto bg-neutral-800 p-8 rounded-lg'>
                <br></br>

                <h2 className='text-4xl font-bold tracking-tight text-center text-white'>Sign In</h2>
                <div className='flex flex-col py-2 text-gray-400'>
                    <label>Username</label>
                    <input className='p-2 mt-2 rounded-lg focus:border-blue-500 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col py-2 text-gray-400'>
                    <label>Password</label>
                    <input className='p-2 mt-2 rounded-lg focus:border-blue-500 focus:outline-none' type="Password" />
                </div>
                <div className='flex justify-between py-2 text-gray-400'>
                    <p className='flex items-center'><input className='mr-2' type ="checkbox" /> Remember Me</p>
                    <p>Forgot Password?</p>
                </div>
                 
                <button className='w-full py-2 my-5 bg-yellow-500'>Sign In</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login
