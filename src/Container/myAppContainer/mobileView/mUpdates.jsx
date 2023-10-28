import React from 'react'
import updateIcon from '../../../assets/icons/updates.svg'
import Header from '../../Header'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'

const MUpdates = () => {
  return (
    <>
      <Header title="My App" />
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:col-span-2  w-full ">
        <div className="big-container rounded-3xl h-full pt-9 px-3 ">
          <div className='flex items-center text-theme px-7'>
            <Link to='/my-app'>
              <IoIosArrowBack className='text-3xl md:text-3xl me-3' />
            </Link>
            <img className='' src={updateIcon}></img>
            <h1 className='text-2xl font-semibold ms-2'>Updates</h1>
          </div>
          <div className="min-h-[70vh] flex items-center  text-center justify-center">
            <div className="p-4 ">
              {/* Your content goes here */}
              <h1 className="text-3xl font-bold">UniversalML V1.2</h1>
              <p className='text-xl text-center mt-3 text-secondary font-medium'>Current version</p>
              <div className="mt-10 flex flex-wrap">
                {/* First Button */}
                <div className="w-full md:w-1/2 p-2">
                  <button className="btn-light text-secondary font-bold text-lg py-3 px-8 rounded-3xl w-max">
                    UML is up to date
                  </button>
                </div>

                {/* Second Button */}
                <div className="w-full md:w-1/2 p-2 flex items-center justify-center">
                  <Link to='/my-app/agreement/mobile' className="btn-dark text-white font-bold text-lg py-3 px-12 rounded-3xl w-max">
                    Beta updates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MUpdates