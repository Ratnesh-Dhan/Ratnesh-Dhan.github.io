
import React from 'react'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <React.Fragment>

        <div className='md:m-20 mt-10 ml-4'>

        <h2 className='text-6xl font-bold md:text-8xl text-[#697565]'>Contact.</h2>

        <div className='m-10 md:m-20 flex md:flex-row flex-col items-center'>
        <MdEmail size={40} />
        <a href='mailto:ratneshdhan@gmail.com' className='ml-4 md:ml-10 md:text-xl font-bold text-blue-300'>ratneshdhan@gmail.com</a>
        </div>

        </div>
    </React.Fragment>
  )
}

export default Contact