import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import profileImg from '../assets/ai-store-images/Ellipse 96.png'
import Header from '../Container/Header';
import { BsCloudy, BsArrowDownCircle } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { GoBell, GoVersions } from 'react-icons/go'
import { FiTool } from 'react-icons/fi'

const MyApp = () => {
    // State to track the active link
    const [activeLink, setActiveLink] = useState('');

    // Use react-responsive to detect screen size
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

    // Function to handle link clicks and update the active link
    const handleLinkClick = (link) => {
        setActiveLink(link);
        setLinkClicked(true)
    };

    return (
        <>
            <Header title="My App" />

            <div className="container mx-auto max-w-full p-4 md:p-5 xl:p-12 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5 lg:gap-12">
                    {/* Left Column  */}
                    {isSmallScreen ? (
                        <div className="flex flex-col h-full w-full gap-4">
                            <div className="container-top h-fit px-3 sm:px-8 md:px-3 lg:px-8 py-8 rounded-3xl shadow-xs flex flex-col md:bg-white">
                                <div className="flex-grow mb-16">
                                    {/* Profile Photo */}
                                    <div className="flex flex-col items-center md:items-start"> {/* Add 'items-center' class here */}
                                        <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center"> {/* Add 'items-center' and 'justify-center' classes */}
                                            <img src={profileImg} alt='Profile Image' style={{ width: '100%' }} /> {/* Set width to 100% */}
                                        </div>
                                        <h2 className="text-base lg:text-3xl font-bold mt-4">Masego Toliver</h2>
                                        <p className="text-sm lg:text-base text-secondary mt-1 cursor-pointer">masegotoliver23@gmail.com</p>
                                    </div>
                                </div>
                                <Link
                                    to='/my-app/mobile'
                                    className={`custom-card profile-links px-4 py-3 flex rounded-xl justify-between cursor-pointer ${activeLink === 'Apps' ? 'bg-blue-500 text-white' : ''
                                        } `}
                                    onClick={() => handleLinkClick('Apps')}
                                >
                                    <div className="flex items-center gap-4 lg:gap-6">
                                        <div className="icon"> <BsArrowDownCircle className='text-2xl' /></div>
                                        <div className="text">
                                            <h2 className="text-xl profile-link text-base font-semibold ">Apps</h2>
                                        </div>
                                    </div>
                                    <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link " style={{ textShadow: "0 0 1px black" }}></i> </div>
                                </Link>


                                <Link
                                    to='/my-app/accounts/mobile'
                                    className={`custom-card profile-links flex px-4 py-3 mt-4 rounded-xl justify-between cursor-pointer ${activeLink === 'Accounts' ? 'bg-blue-500 text-white' : ''
                                        }`}
                                    onClick={() => handleLinkClick('Accounts')}
                                >
                                    <div className="flex items-center gap-4 lg:gap-6">
                                        <div className="icon"><AiOutlineUser className='text-2xl' /></div>
                                        <div className="text">
                                            <h2 className=" text-xl profile-link text-base font-semibold ">Accounts</h2>
                                        </div>
                                    </div>
                                    <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link" style={{ textShadow: "0 0 1px black" }}></i> </div>
                                </Link>

                                <Link
                                    to='/my-app/themes/mobile'
                                    className={`custom-card profile-links flex mt-4 rounded-xl justify-between cursor-pointer ${activeLink === 'Themes' ? 'bg-blue-500 text-white' : ''}`}
                                    onClick={() => handleLinkClick('Themes')}
                                >
                                    <div className="flex items-center gap-4 lg:gap-6">
                                        <div className="icon"><BsCloudy className='text-2xl' /></div>
                                        <div className="text">
                                            <h2 className="text-xl profile-link text-base font-semibold ">Themes</h2>
                                        </div>
                                    </div>
                                    <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link " style={{ textShadow: "0 0 1px black" }}></i> </div>
                                </Link>



                                <Link to='/my-app/notifications/mobile'
                                    className={`custom-card profile-links flex mt-4 rounded-xl justify-between cursor-pointer ${activeLink === 'Notifications' ? 'bg-blue-500 text-white' : ''}`}
                                    onClick={() => handleLinkClick('Notifications')}
                                >
                                    <div className="flex items-center gap-4 lg:gap-6">
                                        <div className="icon"><GoBell className='text-2xl' /></div>
                                        <div className="text">
                                            <h2 className="text-xl profile-link text-base font-semibold ">Notifications</h2>
                                        </div>
                                    </div>
                                    <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link " style={{ textShadow: "0 0 1px black" }}></i> </div>
                                </Link>

                                <Link to='/my-app/developers/mobile'
                                    className={`custom-card profile-links flex mt-4 rounded-xl justify-between cursor-pointer ${activeLink === 'Developer' ? 'bg-blue-500 text-white' : ''}`}
                                    onClick={() => handleLinkClick('Developer')}
                                >
                                    <div className="flex items-center gap-4 lg:gap-6">
                                        <div className="icon"><FiTool className='text-2xl' /></div>
                                        <div className="text">
                                            <h2 className="text-xl profile-link text-base font-semibold ">Developer</h2>
                                        </div>
                                    </div>
                                    <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link " style={{ textShadow: "0 0 1px black" }}></i> </div>
                                </Link>

                                <Link to='/my-app/updates/mobile'
                                    className={`custom-card profile-links flex mt-4 rounded-xl justify-between cursor-pointer ${activeLink === 'Updates' ? 'bg-blue-500 text-white' : ''}`}
                                    onClick={() => handleLinkClick('Updates')}
                                >
                                    <div className="flex items-center gap-4 lg:gap-6">
                                        <div className="icon"><GoVersions className='text-2xl' /></div>
                                        <div className="text">
                                            <h2 className="text-xl profile-link text-base font-semibold ">Updates</h2>
                                        </div>
                                    </div>
                                    <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link " style={{ textShadow: "0 0 1px black" }}></i> </div>
                                </Link>
                                <button className="btn-bg py-3 text-xl text-secondary rounded-xl mt-10 font-bold block md:hidden">
                                    Log out
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col h-full w-full gap-4">
                                <div className="container-top h-fit px-3 sm:px-8 md:px-3 lg:px-8 py-8 rounded-3xl shadow-xs flex flex-col md:bg-white">
                                    <div className="flex-grow mb-16">
                                        {/* Profile Photo */}
                                        <div className="flex flex-col items-center md:items-start"> {/* Add 'items-center' class here */}
                                            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center"> {/* Add 'items-center' and 'justify-center' classes */}
                                                <img src={profileImg} alt='Profile Image' style={{ width: '100%' }} /> {/* Set width to 100% */}
                                            </div>
                                            <h2 className="text-base lg:text-3xl font-bold mt-4">Masego Toliver</h2>
                                            <p className="text-sm lg:text-base text-secondary mt-1 cursor-pointer">masegotoliver23@gmail.com</p>
                                        </div>
                                    </div>
                                    <Link
                                        to='/my-app'
                                        className={`custom-card profile-links px-4 py-3 flex rounded-xl justify-between cursor-pointer ${activeLink === 'Apps' ? 'bg-blue-500 text-white' : ''
                                            } `}
                                        onClick={() => handleLinkClick('Apps')}
                                    >
                                        <div className="flex items-center gap-4 lg:gap-6">
                                            <div className="icon"> <BsArrowDownCircle className='text-2xl' /></div>
                                            <div className="text">
                                                <h2 className="text-xl profile-link text-base font-semibold ">Apps</h2>
                                            </div>
                                        </div>
                                        <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link " style={{ textShadow: "0 0 1px black" }}></i> </div>
                                    </Link>


                                    <Link
                                        to='/my-app/accounts'
                                        className={`custom-card profile-links flex px-4 py-3 mt-4 rounded-xl justify-between cursor-pointer ${activeLink === 'Accounts' ? 'bg-blue-500 text-white' : ''
                                            }`}
                                        onClick={() => handleLinkClick('Accounts')}
                                    >
                                        <div className="flex items-center gap-4 lg:gap-6">
                                            <div className="icon"><AiOutlineUser className='text-2xl' /></div>
                                            <div className="text">
                                                <h2 className=" text-xl profile-link text-base font-semibold ">Accounts</h2>
                                            </div>
                                        </div>
                                        <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link" style={{ textShadow: "0 0 1px black" }}></i> </div>
                                    </Link>

                                    <Link
                                        to='/my-app/themes'
                                        className={`custom-card profile-links flex mt-4 rounded-xl justify-between cursor-pointer ${activeLink === 'Themes' ? 'bg-blue-500 text-white' : ''}`}
                                        onClick={() => handleLinkClick('Themes')}
                                    >
                                        <div className="flex items-center gap-4 lg:gap-6">
                                            <div className="icon"><BsCloudy className='text-2xl' /></div>
                                            <div className="text">
                                                <h2 className="text-xl profile-link text-base font-semibold ">Themes</h2>
                                            </div>
                                        </div>
                                        <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link " style={{ textShadow: "0 0 1px black" }}></i> </div>
                                    </Link>



                                    <Link to='/my-app/notifications'
                                        className={`custom-card profile-links flex mt-4 rounded-xl justify-between cursor-pointer ${activeLink === 'Notifications' ? 'bg-blue-500 text-white' : ''}`}
                                        onClick={() => handleLinkClick('Notifications')}
                                    >
                                        <div className="flex items-center gap-4 lg:gap-6">
                                            <div className="icon"><GoBell className='text-2xl' /></div>
                                            <div className="text">
                                                <h2 className="text-xl profile-link text-base font-semibold ">Notifications</h2>
                                            </div>
                                        </div>
                                        <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link " style={{ textShadow: "0 0 1px black" }}></i> </div>
                                    </Link>

                                    <Link to='/my-app/developers'
                                        className={`custom-card profile-links flex mt-4 rounded-xl justify-between cursor-pointer ${activeLink === 'Developer' ? 'bg-blue-500 text-white' : ''}`}
                                        onClick={() => handleLinkClick('Developer')}
                                    >
                                        <div className="flex items-center gap-4 lg:gap-6">
                                            <div className="icon"><FiTool className='text-2xl' /></div>
                                            <div className="text">
                                                <h2 className="text-xl profile-link text-base font-semibold ">Developer</h2>
                                            </div>
                                        </div>
                                        <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link " style={{ textShadow: "0 0 1px black" }}></i> </div>
                                    </Link>

                                    <Link to='/my-app/updates'
                                        className={`custom-card profile-links flex mt-4 rounded-xl justify-between cursor-pointer ${activeLink === 'Updates' ? 'bg-blue-500 text-white' : ''}`}
                                        onClick={() => handleLinkClick('Updates')}
                                    >
                                        <div className="flex items-center gap-4 lg:gap-6">
                                            <div className="icon"><GoVersions className='text-2xl' /></div>
                                            <div className="text">
                                                <h2 className="text-xl profile-link text-base font-semibold ">Updates</h2>
                                            </div>
                                        </div>
                                        <div className="arrow-icon  "> <i className="bi bi-chevron-right profile-link " style={{ textShadow: "0 0 1px black" }}></i> </div>
                                    </Link>
                                    <button className="btn-bg py-3 text-xl text-secondary rounded-xl mt-10 font-bold block md:hidden">
                                        Log out
                                    </button>
                                </div>
                            </div>
                            {/* Right Column */}

                            <Outlet />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default MyApp