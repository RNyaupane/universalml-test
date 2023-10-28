import React from 'react'
import InstalledApp from '../../Components/InstalledApp'
import AiApp from '../../Components/AiApp'
import { Link } from 'react-router-dom'


const Apps = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:col-span-2  w-full ">
        {/* Big container at the top */}
        <div className="big-container rounded-3xl h-full shadow-xs pt-5 bg-white">
          {/* Content for the big container */}
          <div className='flex justify-between px-7'>
            <h1 className='text-xl font-bold'>Saved apps</h1>
            <Link className='text-blue-500 text-decoration-underline'>View all</Link>
          </div>

          <div className="container flex flex-wrap w-full  sm:p-5">
            <InstalledApp />
            <InstalledApp />
            <InstalledApp />
            <InstalledApp />
            <InstalledApp />
            <InstalledApp />
            {/* Add more cards as needed */}
          </div>
        </div>

        {/* Two small containers at the bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  lg:gap-8 small-container">
          <div className="small-container rounded-3xl shadow-xs bg-white">
            <div className="big-container rounded-3xl h-full  pt-5">
              {/* Content for the big container */}
              <div className='flex justify-between px-7'>
                <h1 className='text-xl font-bold'>Health and fitness</h1>
                <Link className='text-blue-500 text-decoration-underline'>View all</Link>
              </div>
              <div className='my-3 px-2'>
                <AiApp />
                <AiApp />
                <AiApp />
              </div>
            </div>
          </div>
          <div className="small-container  rounded-3xl shadow-xs bg-white">
            <div className="big-container rounded-3xl h-full pt-5">
              {/* Content for the big container */}
              <div className='flex justify-between px-7'>
                <h1 className='text-xl font-bold'>Memories</h1>
                <Link className='text-blue-500 text-decoration-underline'>View all</Link>
              </div>
              <div className='my-3 px-2'>
                <AiApp />
                <AiApp />
                <AiApp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Apps