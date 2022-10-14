import {useState} from 'react'
import loginImg from '../data/logo.png'
import {auth} from './backend/fetchAPI'
import {useNavigate } from 'react-router-dom';


const Login = () => {
  const [inputUsername, setUsername] = useState('')
  const [inputPassword, setPassword] = useState('')
  const navigate = useNavigate();
  const usernameChange = event =>{
    setUsername(event.target.value)

  };

  const passwordChange = event =>{  
    setPassword(event.target.value)
  }

  const callAuth = event =>{
    event.preventDefault();
    var response
    auth(inputUsername, inputPassword).then(function(result){
        let entries = Object.entries(result)
        response = entries[0][1]

        if (response == "True"){
            navigate("/Homepage")
        } else if (response == "False"){
            console.log("Password is incorrect")
        } else {
            console.log("Username is not found in database")
        }
        
    
    })

  }

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
                    <input className='p-2 mt-2 rounded-lg focus:border-blue-500 focus:outline-none' onChange={usernameChange} type="text" id="inputUsername" name = "inputUsername" value={inputUsername}/>
                </div>
                <div className='flex flex-col py-2 text-gray-400'>
                    <label>Password</label>
                    <input className='p-2 mt-2 rounded-lg focus:border-blue-500 focus:outline-none' onChange={passwordChange} type="password" id="inputPassword" name = "inputPassword" value={inputPassword}/>
                </div>
                <div className='flex justify-between py-2 text-gray-400'>
                    <p className='flex items-center'><input className='mr-2' type ="checkbox" /> Remember Me</p>
                    <p>Forgot Password?</p>
                </div>

                <button className='w-full py-2 my-5 bg-yellow-500' onClick={callAuth}>Sign In</button>


            </form>
        </div>
    </div>
    </div>
  )
}

const loginUsername = "rian"
const loginPassword = "goodbye"


export default Login
