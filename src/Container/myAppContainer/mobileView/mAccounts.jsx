import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import Header from '../../Header'
import { IoIosArrowBack } from 'react-icons/io'
import Footer from '../../Footer'

const MAccounts = () => {
  return (
    <>
      <Header title="My App" />
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:col-span-2  w-full ">
        <div className="big-container rounded-3xl h-full pt-9 px-3 bg-transparent">
          <div className='flex items-center justify-between text-blue-500 px-7'>
            <div className="flex items-center">
              <Link to='/my-app'>
                <IoIosArrowBack className='text-3xl md:text-3xl me-3' />
              </Link>
              <AiOutlineUser className='text-2xl md:text-3xl' />
              <h1 className='text-2xl md:text-3xl font-semibold ms-2'>Accounts</h1>
            </div>
            <div className="">
              <Link className='text-xl font-semibold hover:underline'> Edit </Link>
            </div>
          </div>
          <div className="mx-14 mt-10">
            <div className="mb-10">
              <h4 className='text-secondary text-lg md:text-xl lg:text-2xl font-semibold mb-2'>User name</h4>
              <h2 className='text-primary text-xl md:text-2xl lg:text-3xl font-bold'>Masego Tolivar</h2>
            </div>
            <div className="mb-10">
              <h4 className='text-secondary text-lg md:text-xl lg:text-2xl font-semibold mb-2'>Email</h4>
              <h2 className='text-primary text-xl md:text-2xl lg:text-3xl font-bold'>masegotoliver23@gmail.com</h2>
            </div>
            <div className="mb-10">
              <h4 className='text-secondary text-lg md:text-xl lg:text-2xl font-semibold mb-2'>Phone number</h4>
              <h2 className='text-primary text-xl md:text-2xl lg:text-3xl font-bold'>9863764537</h2>
            </div>
            <div className="mb-10">
              <h4 className='text-secondary text-lg md:text-xl lg:text-2xl font-semibold mb-2'>Language</h4>
              <h2 className='text-primary text-xl md:text-2xl lg:text-3xl font-bold'>English</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MAccounts