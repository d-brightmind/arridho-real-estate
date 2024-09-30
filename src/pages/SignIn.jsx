import React from 'react'

export default function SingIn() {
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center lg:flex-nowrap sm:flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:m-6'>
          <img src="https://images.unsplash.com/photo-1609770231080-e321deccc34c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtleXxlbnwwfHwwfHx8MA%3D%3D" alt="key" className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input className='w-full' type="text" />
          </form>
        </div>
      </div>
    </section>
  )
}
