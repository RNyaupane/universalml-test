import React from 'react'
import errorLogo from '../assets/icons/ErrorLogo.svg'
const ErrorPage = () => {
    return (
        <>
            <div className="flex h-screen items-center justify-center bg-black">
                <div className="">
                    <img
                        src={errorLogo} // Replace with the actual image path
                        alt="Error"
                        className="mx-auto mb-12 w-10/12"
                    />

                    <h1 className="text-2xl text-center md:text-4xl xl:text-5xl text-white font-bold">Unable to connect</h1>
                    <div className=" mt-10 mx-5">
                        <p className="bg-secondary text-xs md:text-lg lg:text-xl px-5 md:px-8 py-3 text-white rounded-2xl mb-5 max-w-[717px]">
                            The website could be temporarily unavailable or too busy. Try again 
                            in a few moments.
                        </p>
                        <p className="bg-secondary text-xs sm:text-base md:text-lg lg:text-xl px-5 md:px-8 py-3 text-white rounded-2xl">
                            If you are unable to load any pages, check your computer's 
                            network connection.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage