import React from 'react'

const AppInventory = () => {
    return (
        <>
            <div className="container-bottom h-[240px] mt-5 rounded-3xl shadow-xs bg-white">
                {/* Content for the bottom container */}
                <div className="p-6">
                    {/* Card 1 */}
                    <div className="custom-card flex justify-between ">
                        <div className="flex items-center gap-4 lg:gap-6">
                            <div className="icon"> <i className="bi bi-subtract text-gray-500  text-3xl"></i></div>
                            <div className="text">
                                <h2 className="text-gray-500 text-base font-bold ">Published apps</h2>
                                <p className="text-xs text-gray-400">0 total</p>
                            </div>
                        </div>
                        <div className="arrow-icon pt-3 "> <i className="bi bi-chevron-right text-gray-500" style={{ textShadow: "0 0 1px black" }}></i> </div>
                    </div>
                    <div className="custom-card flex justify-between mt-8 cursor-pointer">
                        <div className="flex items-center gap-4 lg:gap-6">
                            <div className="icon"> <i className="bi bi-arrow-down-circle text-primary text-3xl"></i></div>
                            <div className="text">
                                <h2 className="text-primary text-base font-bold ">Installed apps</h2>
                                <p className="text-xs text-secondary">12 total</p>
                            </div>
                        </div>
                        <div className="arrow-icon pt-3 "> <i className="bi bi-chevron-right text-primary " style={{ textShadow: "0 0 1px black" }}></i> </div>
                    </div>
                    <div className="custom-card flex justify-between mt-8">
                        <div className="flex items-center gap-4 lg:gap-6">
                            <div className="icon"> <i className="bi bi-people text-gray-500  text-3xl"></i></div>
                            <div className="text">
                                <h2 className="text-gray-500 text-base font-bold ">Users</h2>
                                <p className="text-xs text-gray-400">0 total</p>
                            </div>
                        </div>
                        <div className="arrow-icon pt-3 "> <i className="bi bi-chevron-right text-gray-500" style={{ textShadow: "0 0 1px black" }}></i> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppInventory