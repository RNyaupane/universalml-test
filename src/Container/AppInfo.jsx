import React from 'react'

const AppInfo = () => {
    return (
        <>
            <div className="flex py-4 mt-0 md:mt-5 lg:px-14">
                <div className='h-full w-full ms-0'>
                    <div className="flex">
                        <div className="mx-1 sm:mx-2 md:mx-4">
                            <h2 className="text-secondary ms-2 font-semibold mb-2 text-sm sm:text-lg">Developer</h2>
                            <button className="flex btn-bg text-primary px-2 sm:px-4 py-1 md:py-2 rounded-3xl text-sm sm:text-base">
                                <i className="bi bi-patch-check-fill mr-1 md:mr-2 text-blue-500"></i>
                                Princelab
                            </button>
                        </div>
                        <div className="mx-1 sm:mx-2 md:mx-4">
                            <h2 className="text-secondary ms-2 font-semibold mb-2 text-sm sm:text-lg">Install</h2>
                            <button className="flex btn-bg text-primary px-2 sm:px-4 py-1 md:py-2 rounded-3xl text-xs sm:text-base">
                                <i className="bi bi-arrow-down-circle-fill mr-1 md:mr-2  text-blue-500"></i>
                                730
                            </button>
                        </div>
                        <div className="mx-1 sm:mx-2 md:mx-4">
                            <h2 className="text-secondary ms-2 font-semibold mb-2 text-sm sm:text-lg">Rating</h2>
                            <button className="flex btn-bg text-primary px-2 sm:px-4 py-1 md:py-2 rounded-3xl text-xs sm:text-base">
                                <i className="bi bi-star-fill mr-1 md:mr-2  text-blue-500"></i>
                                3.8
                            </button>
                        </div>
                        <div className="mx-1 sm:mx-2 md:mx-4">
                            <h2 className="text-secondary ms-2 font-semibold mb-2 text-sm sm:text-lg">Age</h2>
                            <button className="flex btn-bg text-primary px-2 sm:px-4 py-1 md:py-2 rounded-3xl text-xs sm:text-base">
                                <i className="bi bi-arrow-repeat mr-1 md:mr-2  text-blue-500"></i>
                                16+
                            </button>
                        </div>
                        <div className="mx-1 sm:mx-2 md:mx-4">
                            <h2 className="text-secondary ms-2 font-semibold mb-2 text-sm sm:text-lg">Version</h2>
                            <button className="flex btn-bg text-primary px-2 sm:px-4 py-1 md:py-2 rounded-3xl text-xs sm:text-base">
                                <i className="bi bi-arrow-repeat mr-1 md:mr-2  text-blue-500"></i>
                                v2023.0.1
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppInfo