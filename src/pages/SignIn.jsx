import React, { useState } from 'react'
import {FaEye, FaEyeSlash} from "react-icons/fa"

export default function SingIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {email, password} = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center max-sm:flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:m-6'>
          <img src="https://images.unsplash.com/photo-1609770231080-e321deccc34c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtleXxlbnwwfHwwfHx8MA%3D%3D" alt="key" className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type="email" id='email' value={email} onChange={onChange} placeholder='Email Address'/>
            <div>
              <input className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' type={showPassword ? "text" : "password"} id='password' value={password} onChange={onChange} placeholder='Enter Password'/>  
              {showPassword ? 
                <FaEye /> : <FaEyeSlash />
              }
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
