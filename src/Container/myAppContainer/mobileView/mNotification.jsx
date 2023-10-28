import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoBell } from 'react-icons/go'
import { MdOutlineDesktopWindows } from 'react-icons/md'
import { FiMail } from 'react-icons/fi'
import Header from '../../Header'
import { IoIosArrowBack } from 'react-icons/io'
import Footer from '../../Footer'


const MNotification = () => {
  const [isDesktopToggled, setIsDesktopToggled] = useState(false);
  const [isEmailToggled, setIsEmailToggled] = useState(false);

  const toggleDesktopSwitch = () => {
    setIsDesktopToggled(!isDesktopToggled);
  };
  const toggleEmailSwitch = () => {
    setIsEmailToggled(!isEmailToggled);
  };
  return (
    <>
      <Header title="My App" />
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:col-span-2  w-full ">
        <div className="big-container rounded-3xl h-full pt-9 px-3">
          <div className='flex items-center text-blue-500 px-7'>
            <Link to='/my-app'>
            <IoIosArrowBack className='text-3xl md:text-3xl me-3' />
            </Link>
            <GoBell className='text-2xl md:text-3xl ' style={{ strokeWidth: 1 }} />
            <h1 className='text-2xl md:text-3xl font-semibold ms-2'>Notifications</h1>
          </div>

          <div className="flex flex-wrap mt-5 ps-3">
            <div className="max-w-xs rounded bg-[#F5F5F5] overflow-hidden rounded-3xl m-4">
              <div className="px-6 py-4">
                <MdOutlineDesktopWindows size={40} className='my-3 text-blue-500' />
                <div className="font-bold text-xl mb-2">Desktop notification</div>
                <p className="text-gray-700 text-sm">Receive notification to my computer for the latest updates.</p>
                <div className='flex justify-between my-3'>
                  <div className=""></div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isDesktopToggled} onChange={toggleDesktopSwitch} className="sr-only peer shadow-none" />
                    <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 ${isDesktopToggled ? 'peer-checked:right-0' : ''}`}>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="max-w-xs rounded bg-[#F5F5F5] overflow-hidden rounded-3xl m-4">
              <div className="px-6 py-4">
                <FiMail size={40} className='my-3 text-blue-500' />
                <div className="font-bold text-xl mb-2">Email notification</div>
                <p className="text-gray-700 text-sm">Receive notification to my gmail for the latest news and updates.</p>
                <div className='flex justify-between my-3'>
                  <div className=""></div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isEmailToggled} onChange={toggleEmailSwitch} className="sr-only peer shadow-none" />
                    <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 ${isEmailToggled ? 'peer-checked:right-0' : ''}`}>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MNotification