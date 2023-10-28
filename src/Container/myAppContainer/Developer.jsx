import React from 'react'
import { Link } from 'react-router-dom'
import toolIcon from '../../assets/icons/tool.svg'
import { FiTool } from 'react-icons/fi'

const Developer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:col-span-2  w-full ">
        <div className="big-container rounded-3xl h-full shadow-xs pt-9 px-3 bg-white">
          <div className='flex items-center text-theme px-7'>
            <FiTool className='text-2xl md:text-3xl ' />
            <h1 className='text-3xl font-semibold m-2'>Developer</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-4 gap-6 mx-1 md:mx-6 my-6 rounded-3xl">
            {/* Left Column */}
            <div className="col-span-1 md:col-span-2 xl:col-span-2 card-light py-6 px-6 rounded-3xl">
              <h2 className="font-bold text-3xl md:text-4xl">Your Current Plan</h2>
              <div className="flex mt-12 items-end">
                <h3 className='text-2xl xl:text-3xl font-semibold mb-0'>$5 credit</h3>
                <p className='text-secondary ms-4 font-bold'>Free</p>
              </div>
              <div className="h-6 w-full bg-gray-200 mt-4 rounded-3xl overflow-hidden relative">
                <div className="h-full bg-[#FFD816] absolute left-0 top-0" style={{ width: '80%' }}></div>
                <div className="h-full bg-[#89BD37] absolute right-0 top-0" style={{ width: '20%' }}></div>
              </div>
              <div className="flex justify-between ms-auto p-2">
                <p className='font-semibold text-secondary text-sm'>Used $3</p>
                <p className='font-semibold text-secondary text-sm'>Free $2</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-1 md:col-span-2 xl:col-span-2 card-light p-6 rounded-3xl">
              <h2 className="font-bold text-3xl md:text-4xl">Upgrade to Pro plans</h2>
              <div className="flex mt-9 items-end">
                <Link to='/my-app/developer/plan' className='text-theme text-xl md:text-2xl font-semibold'>Developer plan <i className="bi bi-chevron-right profile-link text-base" style={{ textShadow: "0 0 1px black" }}></i> </Link>
              </div>
              <div className="flex mt-4 items-end">
                <Link className='text-theme text-xl md:text-2xl font-semibold'>Business plan <i className="bi bi-chevron-right profile-link text-base" style={{ textShadow: "0 0 1px black" }}></i> </Link>
              </div>
            </div>

            {/* left Column */}
            <div className="col-span-1 md:col-span-2 xl:col-span-2 card-light py-6 px-6 rounded-3xl">              
            <h2 className="font-bold text-3xl md:text-4xl">API Keys</h2>
              <div className="flex mt-10 md:w-[50%] items-end justify-between">
                <p className='text-primary ms-4 font-bold'>Key</p>
                <p className='text-primary ms-4 font-bold'>Name</p>
              </div>
              <div className="flex mt-2 md:w-[50%] items-end justify-between">
                <p className='text-[#939393] ms-4 font-bold'>Null</p>
                <p className='text-[#939393] ms-4 font-bold'>Null</p>
              </div>
              <button className="btn-theme text-white font-bold text-base py-2 mt-6 w-full px-10 rounded-xl ">
                Generate secret key
              </button>
            </div>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default Developer