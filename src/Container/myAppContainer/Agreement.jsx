import React from 'react'
import updateIcon from '../../assets/icons/updates.svg'
import { Link } from 'react-router-dom'
import { FiUsers } from 'react-icons/fi'
const Agreement = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:col-span-2  w-full ">
        <div className="big-container rounded-3xl h-full shadow-xs pt-9 px-3 bg-white">
          <div className='flex items-center text-theme px-7'>
            <img className='' src={updateIcon}></img>
            <h1 className='text-3xl font-semibold ms-2'>Updates</h1>
          </div>
          <div className="min-h-[70vh]  flex justify-center">
            <div className="py-4 px-6 max-w-md lg:max-w-lg card-light rounded-[50px] absolute mt-8">
              <button className="absolute top-2 right-2 p-2 m-3 text-gray-500 hover:text-gray-700 bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.646 3.646a.5.5 0 0 1 .708 0L8 7.293l3.646-3.647a.5.5 0 1 1 .708.708L8.707 8l3.647 3.646a.5.5 0 0 1-.708.708L8 8.707l-3.646 3.647a.5.5 0 0 1-.708-.708L7.293 8 3.646 4.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
              <div className="flex flex-col items-center justify-center space-y-4 mt-28 px-5 mb-3">
                <FiUsers className='text-3xl md:text-5xl lg:text-7xl text-blue-500' />
                <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold pb-3">Agreement</h2>

                <div>
                  <p className="text-gray-700 text-sm  text-justify mb-16">You are about to access beta updates for UniversalML.
                    These updates may include exciting new features and encourage you to report any issues or feedback for improvements.
                    <br />
                    <br />
                    By clicking "Accept" you confirm that you understand the nature of beta updates and agree to these terms.</p>
                </div>

                <button className="bg-blue-500 text-white text-lg text-xl px-4 py-4 rounded-[40px]  w-full">
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Agreement