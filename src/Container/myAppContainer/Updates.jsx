import React, { useState } from 'react'
import updateIcon from '../../assets/icons/updates.svg'
import { Link } from 'react-router-dom'


const Updates = () => {
  const [showSecondCard, setShowSecondCard] = useState(false);

  const handleButtonClick = () => {
    setShowSecondCard(true);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:col-span-2  w-full ">
        <div className="big-container rounded-3xl h-full shadow-xs pt-9 px-3 bg-white">
          <div className='flex items-center text-theme px-7'>
            <img className='' src={updateIcon}></img>
            <h1 className='text-3xl font-semibold ms-2'>Updates</h1>
          </div>
           <div className="min-h-[70vh] flex items-center  text-center justify-center">
            <div className="p-4 ">
             
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">UniversalML V1.2</h1>
              <p className='text-xl md:text-2xllg:text-3xl text-center mt-3 text-secondary font-medium'>Current version</p>
              <div className="flex mt-10">
                <button className="btn-light text-secondary font-bold text-2xl py-3 px-8 rounded-3xl m-2">
                  UML is up to date
                </button>
                <Link to='/my-app/agreement'
                  onClick={handleButtonClick}
                  className="btn-dark text-white font-bold text-2xl  py-3 px-10 rounded-3xl m-2">
                  Beta updates
                </Link>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Updates