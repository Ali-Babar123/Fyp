


import React, { useState } from 'react'


const Login = () => {
  const [currentState, setCurrentState] = useState('SignUp')

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex item-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-4xl'>{currentState}</p>
        <hr className='border-t-2 h-[1.5px] w-9  mt-5 text-gray-900' />
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border text-gray-900' placeholder='Name' required/>}
      <input type="email" className='w-full px-3 py-2 border text-gray-900' placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border text-gray-900' placeholder='Password' required/>
      {/* <input type="cpassword" className='w-full px-3 py-2 border text-gray-900' placeholder='Confirm Password' /> */}
      <div className='flex w-full justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer' >Forgot your password?</p>
        {
            currentState === 'Login' ?
            <p onClick={() => setCurrentState('SignUp')} className='cursor-pointer'>Create Account</p> :
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer">Login Here</p>
        }
        </div>   
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
