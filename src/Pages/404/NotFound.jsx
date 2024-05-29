import React from 'react'
import Navbar from '../../Components/Navbar'

const NotFound = () => {
  return (
    <>
    <Navbar />
    <div className='flex align-center justify-center h-screen'>
    <span className='text-[100px]'>404 not found</span>
    </div>
    </>
  )
}

export default NotFound