import React, { useEffect, useState } from 'react';
import AppleLogo from '../assets/apple-logo-transparent.png';
import CardContainer from '../Container/CardContainer';
import MicrosoftLogo from '../assets/microsoftLogo.svg';
import cardsData from "../data/Data"
import openai from '../assets/sponsor-logo/openai.png'
import digitalOcean from '../assets/sponsor-logo/digital-ocean.png'
import cloudflare from '../assets/sponsor-logo/cloudflare.png'
import microsoft from '../assets/sponsor-logo/microsoft.png'
import nvidia from '../assets/sponsor-logo/nvidia.png'
import stripe from '../assets/sponsor-logo/stripe.png'

import axios from 'axios';

const CommingSoon = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [joinButtonText, setJoinButtonText] = useState("Join the Waitlist");
    const [buttonColor, setButtonColor] = useState("blue"); // Default color is blue
    const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Default state is not disabled

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setEmail('');
        setIsValidEmail(false);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
        setIsValidEmail(isValid);
    };

    useEffect(() => {
        const storedButtonText = localStorage.getItem('joinButtonText');
        const storedButtonColor = localStorage.getItem('buttonColor');
        if (storedButtonText) {
            setJoinButtonText(storedButtonText);
        }
        if (storedButtonColor) {
            setButtonColor(storedButtonColor);
            setIsButtonDisabled(storedButtonColor === "neutral"); // Set disabled state based on button color
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            Email: email
        };

        setIsButtonDisabled(true); // Disable the button

        axios
            .post('https://sheet.best/api/sheets/72b47e76-843d-4801-97d4-decdbd8d11b3', data)
            .then((response) => {
                console.log(response);
                setEmail('');
                setJoinButtonText("Thank you for joining");
                setButtonColor("neutral"); // Change button color to gray
                // Store updated button text and color in local storage
                localStorage.setItem('joinButtonText', 'Thank you for joining');
                localStorage.setItem('buttonColor', 'neutral');
            })
            .catch((error) => {
                console.error(error);
                setJoinButtonText("Failed to Join");
                setButtonColor("neutral"); // Change button color to red on failure
                // Store updated button text and color in local storage
                localStorage.setItem('joinButtonText', 'Failed to Join');
                localStorage.setItem('buttonColor', 'neutral');
            });
    };


    return (
        <div className="flex flex-col items-center justify-center h-full md:h-[100vh] bg-black overflow-hidden h-100vh">
            <div className='text-center mt-0 md:mt-20 lg:mt-0'>
                <div className="text-center mt-10 md:mt-20 lg:mt-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2  text-white">UniversalML</h1>
                    <p className="text-stone-400 mb-4 text-sm md:text-lg lg:text-lg text-slate-200">
                        Discover an unparalleled AI app experience
                    </p>
                </div>
                {/* <div className="grid md:flex gap-5 lg:gap-8 mb-4 mt-8 mx-4">
                    <div className="bg-[#3C3C3C] p-3 pb-1 lg:p-4 rounded-xl shadow-md flex relative">
                        <div className="w-16 h-16 flex-shrink-0">
                            <img src={AppleLogo} alt="Apple Logo" className=" w-8/12 lg:w-5/6  h-full object-contain" />
                        </div>
                        <div>
                            <p className="text-xs md:text-md lg:text-base text-white">COMING SOON TO THE</p>
                            <h2 className="text-2xl md:text-4xl lg:text-4xl text-white font-semibold mb-2">App&nbsp;Store</h2>
                        </div>
                    </div>

                    <div className="bg-[#3C3C3C] p-3 pb-1 lg:p-4 rounded-xl shadow-md flex">
                        <div className="w-16 h-16 flex-shrink-0 sm:mr-0 ">
                            <img src={MicrosoftLogo} alt="Apple Logo" className="w-10/12 lg:w-full h-full object-contain" />
                        </div>
                        <div className='lg:ml-4'>
                            <p className="text-xs md:text-md lg:text-base text-white">COMING SOON TO THE</p>
                            <h1 className="text-2xl md:text-4xl lg:text-4xl text-white font-semibold mb-2">Microsoft</h1>
                        </div>
                    </div>
                </div> */}
                <button
                    type="submit"
                    className={`bg-${buttonColor}-700 hover:bg-${isButtonDisabled ? 'neutral-700' : `${buttonColor}-600`
                        } text-sm md:text-lg lg:text-xl text-${isButtonDisabled ? 'gray-400' : 'white'
                        } py-3 px-8 mt-4`}
                    style={{ borderRadius: "40px" }}
                    onClick={(e) => {
                        toggleModal();
                    }}
                    disabled={isButtonDisabled}
                >
                    {joinButtonText}
                </button>
                <div className="w-auto h-128 ">
                    <div className="p-2 pt-8 md:p-8 ">
                        <h1 className="text-xl md:text-3xl font-bold mb-4 text-white text-start ms-4">Sponsored By</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {/* Rendering 6 card components here */}
                            <div className=" rounded-lg p-3 pt-5 shadow-md">
                                <div className="flex items-center">
                                    <div className="">
                                        <img src={digitalOcean} alt="Logo" className="w-[85%] md:w-full h-full object-cover" />
                                    </div>
                                    {/* <div className="ml-4">
                                        <h2 className="text-lg font-semibold">Company 1</h2>
                                    </div> */}
                                </div>
                            </div>
                            <div className="px-2 pt-5 shadow-md">
                                <div className="flex items-center">
                                    <div className="">
                                        <img src={cloudflare} alt="Logo" className="w-[85%] md:w-full h-full object-cover " />
                                    </div>
                                    {/* <div className="ml-4">
                                        <h2 className="text-lg font-semibold">Company 2</h2>
                                    </div> */}
                                </div>
                            </div>
                            <div className=" p-4 shadow-md">
                                <div className="flex items-center">
                                    <div className="">
                                        <img src={microsoft} alt="Logo" className="w-[85%] md:w-full h-full object-cover " />
                                    </div>
                                    {/* <div className="ml-4">
                                        <h2 className="text-lg font-semibold">Company 3</h2>
                                    </div> */}
                                </div>
                            </div>
                            <div className=" p-4 pt-5 shadow-md">
                                <div className="flex items-center">
                                    <div className="">
                                        <img src={nvidia} alt="Logo" className="w-[85%] md:w-full h-full object-cover " />
                                    </div>
                                    {/* <div className="ml-4">
                                        <h2 className="text-lg font-semibold">Company 4</h2>
                                    </div> */}
                                </div>
                            </div>
                            <div className=" p-4 shadow-md">
                                <div className="flex items-center">
                                    <div className="">
                                        <img src={openai} alt="Logo" className="w-[85%] md:w-full h-full object-cover " />
                                    </div>
                                    {/* <div className="ml-4">
                                        <h2 className="text-lg font-semibold">Company 5</h2>
                                    </div> */}
                                </div>
                            </div>
                            <div className=" p-4 shadow-md">
                                <div className="flex items-center">
                                    <div className="">
                                        <img src={stripe} alt="Logo" className="w-[85%] md:w-full h-full object-cover " />
                                    </div>
                                    {/* <div className="ml-4">
                                        <h2 className="text-lg font-semibold">Company 6</h2>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <>
                    <div
                        className={`fixed inset-0 z-40 ${isModalOpen ? 'slide-in' : 'slide-out'}`}
                        style={{
                            background: '#02060bbd',
                            backdropFilter: 'blur(10px)',
                        }}
                        onClick={toggleModal}
                    ></div>
                    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isModalOpen ? '' : 'slide-out'}`}>
                        <div className="bg-[#171717] p-6 m-6  shadow-xl relative slide-in modal-box">
                            <button onClick={toggleModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                                <i className="fas fa-times-circle text-4xl text-zinc-400"></i>
                            </button>
                            <form >
                                <div className="flex flex-col items-center justify-center h-full mt-9 md:mt-12 ">
                                    <div className="flex flex-col items-center justify-center mt-4">
                                        <h2 className="text-white text-xl sm:text-3xl  mb-2 text-center font-semibold ">
                                            Be the first to experience
                                        </h2>
                                        <p className="text-stone-400 mb-4 text-xs sm:text-base text-slate-200">
                                            Get early access to UniversalML.
                                        </p>
                                        <div className="flex flex-col items-center justify-center mt-4">
                                            <input
                                                type="email"
                                                className={`w-full h-12 text-center  bg-transparent text-xl sm:text-2xl lg:text-2xl mt-6  rounded-md  py-2 text-white placeholder-gray-400 focus:outline-none ${isValidEmail ? 'focus:ring-0' : ''
                                                    }`}
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                        </div>
                                        <button
                                            type='submit'
                                            className={`bg-${isValidEmail ? 'blue' : 'zinc'
                                                }-700 hover:bg-${isValidEmail ? 'blue' : 'transparent'}-600 text-xl md:text-xl lg:text-xl text-${isValidEmail ? 'white' : 'neutral-500'
                                                } py-2 md:py-3 px-8 md:px-14 mt-16 md:mt-24 lg:mt-28 rounded-3xl`}
                                            onClick={(e) => {
                                                toggleModal();
                                                handleSubmit(e);
                                            }}
                                            disabled={!isValidEmail}
                                        >
                                            Join now
                                        </button>
                                    </div>
                                    <div className="flex-grow"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}


            <div className="slider-container md:mt-5 h-full  ">
                <CardContainer cards={cardsData} />
            </div>
        </div>
    );
};

export default CommingSoon;