import React, { useState, useEffect } from 'react';
import Video from '../assets/login-register/IMG_6832.mp4';
import Login from '../Container/Login'
import SignUp from '../Container/SignUp';

const Register = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [isSignupActive, setIsSignupActive] = useState(false);
    const [greeting, setGreeting] = useState('');
    const [greetingIcon, setGreetingIcon] = useState('');

    const handleLoginClick = () => {
        setIsLoginActive(true);
        setIsSignupActive(false);
    };

    const handleSignupClick = () => {
        setIsSignupActive(true);
        setIsLoginActive(false);
    };


    useEffect(() => {
        const currentTime = new Date().getHours();
        if (currentTime >= 0 && currentTime < 12) {
            setGreeting('Good Morning');
            setGreetingIcon(<i className="bi bi-brightness-high text-yellow-500 pr-3" style={{ textShadow: "0 0 1px yellow" }}></i>);
        } else if (currentTime >= 12 && currentTime < 18) {
            setGreeting('Good Afternoon');
            setGreetingIcon(<i className="bi bi-sun text-yellow-500 pr-3" style={{ textShadow: "0 0 1px yellow" }}></i>);
        } else {
            setGreeting('Good Evening');
            setGreetingIcon(<i className="bi bi-moon text-voilet-500 pr-3"></i>);
        }
    }, []);
    return (
        <>
            <div className="transparent grid grid-cols-1 lg:grid-cols-2 w-auto relative ">
                {/* Video background */}
                <div className="flex justify-center items-center h-screen hidden lg:block overflow-hidden">
                    <div className="w-[730px] h-[1200px] xl:w-[964px]">
                        <video autoPlay loop muted className="w-full h-auto">
                            <source src={Video} type="video/mp4" />
                        </video>
                    </div>
                </div>
                {/* Form */}
                <div className="flex justify-center  items-center h-full">
                    <div className="mt-14 lg:mt-0 px-8 py-5 sm:px-32 md:p-20 lg:px-10 lg:pt-0 xl:px-16 lg:pt-0 rounded-md w-full md:w-[75%] h-[530px]">
                        <div className="">
                            <h1 className="text-2xl lg:text-3xl font-bold mb-10">
                                {greetingIcon}
                                {greeting},
                            </h1>
                            <div className="flex justify-center space-x-2">
                                <div className="bg-card w-full rounded-xl grid grid-cols-2 mb-5">
                                    <button
                                        className={`px-4 py-2 m-1 font-bold rounded-xl ${isLoginActive ? 'bg-white' : 'text-gray-700'
                                            }`}
                                        onClick={handleLoginClick}
                                    >
                                        Login
                                    </button>
                                    <button
                                        className={`px-4 py-2 m-1 font-bold rounded-xl ${isSignupActive ? 'bg-white ' : 'text-gray-700'
                                            }`}
                                        onClick={handleSignupClick}
                                    >
                                        Signup
                                    </button>
                                </div>
                            </div>
                        </div>
                        {isLoginActive && (
                            <Login />
                        )}
                        {isSignupActive && (
                            <SignUp />
                        )}
                    </div>
                </div>
                <h2 className="absolute top-1/2 left-[22%] hidden lg:block transform -translate-x-[45%] -translate-y-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-white text-left">
                    {
                        isLoginActive ? (
                            <span>
                                Make a big impact <br /> with seamless effort
                            </span>
                        ) : (
                            <span>
                                Gather information, <br /> teach and share your <br /> AI apps
                            </span>
                        )
                    }
                </h2>
            </div>
        </>
    );
};

export default Register;
