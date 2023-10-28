import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <hr className="border-t-1 border-gray-400 mx-8 mt-8" />
            <div className="container text-center mx-auto max-w-full px-8 mb-10">
                <div className="flex flex-wrap justify-center sm:justify-between mt-5">
                    <Link className="text-blue-500 text-base lg:text-xl rounded-xl bg-gray-100 sm:bg-white py-2 px-3 sm:pt-3  font-semibold w-full sm:w-auto sm:mr-2 mb-3 sm:mb-0 md:mx-10 hover:bg-gray-100 ">Have any question?</Link>
                    <Link  className="text-blue-500 text-base lg:text-xl rounded-xl bg-gray-100 sm:bg-white py-2 px-3 sm:pt-3 font-semibold w-full sm:w-auto sm:mx-2 mb-3 sm:mb-0 hover:bg-gray-100">Terms & Conditions</Link>
                    <Link className="text-blue-500 text-base lg:text-xl rounded-xl bg-gray-100 sm:bg-white py-2 px-3 sm:pt-3 font-semibold w-full sm:w-auto mb-3 sm:ml-2 lg:mr-6 sm:mb-0  hover:bg-gray-100">Report a problem</Link>
                </div>
            </div>
        </>
    )
}

export default Footer