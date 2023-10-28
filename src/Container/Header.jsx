import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const [selectedButton, setSelectedButton] = useState(props.title);
    const handleToggle = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <>
            <div className="flex justify-between py-4 mt-10 px-6 lg:px-14">
                <div className=" p-1 ">
                    {/* <button className="text-xs md:text-base text-white bg-blue-500 px-3 py-2 font-semibold rounded-3xl">AI Store</button>
                    <button className="text-xs md:text-base px-3 py-2 font-semibold rounded-3xl ml-2">My App</button> */}
                    <label htmlFor="Toggle4" className="rounded-3xl inline-flex items-center p-1 cursor-pointer btn-bg text-gray-800">
                        <input id="Toggle4" type="checkbox" className="hidden peer rounded-3xl" />
                        <Link
                            to="/ai-store"
                            onClick={() => handleToggle('Ai Store')}
                            className={`px-4 py-2 ${selectedButton === 'Ai Store'
                                ? 'bg-blue-500 text-white'
                                : 'btn-bg text-black'
                                } text-xs md:text-base  font-bold rounded-3xl peer-checked:btn-bg peer-checked:text-black`}
                        >
                            Ai Store
                        </Link>
                        <Link
                            to="/my-app"
                            onClick={() => handleToggle('My App')}
                            className={`px-4 py-2 ${selectedButton === 'My App'
                                ? 'bg-blue-500 text-white'
                                : 'btn-bg text-black'
                                } text-xs md:text-base  font-bold rounded-3xl peer-checked:bg-blue-500 peer-checked:text-white`}
                        >
                            My App
                        </Link>
                    </label>
                </div>
                <div className="flex items-center space-x-2 relative">
                    <input type="text" placeholder="Search here"
                        className="border pl-10 focus:outline-none rounded-3xl btn-bg text-secondary border-white w-8 md:w-full py-2 md:py-3 md:p-3 md:pl-14" />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-1 md:pl-3">
                        <i className="fas fa-search text-gray-500 md:text-gray-400"></i>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Header