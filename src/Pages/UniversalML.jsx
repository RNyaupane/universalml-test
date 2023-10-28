import React, { useRef, useState } from 'react'
import umlLogo from '../assets/login-register/umllogo.svg'
import { ProgressBar, Step } from 'react-step-progress-bar';
import "react-step-progress-bar/styles.css";

import { GoArrowUpRight } from 'react-icons/go'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { AiOutlineArrowUp } from 'react-icons/ai'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slideImg1 from '../assets/umlAssets/AI store.png'
import slideImg2 from '../assets/umlAssets/App description.png'
import slideImg3 from '../assets/umlAssets/Zero-shot.png'

import Audio from '../assets/umlAssets/Audio.png'
import Multimoddal from '../assets/umlAssets/Multimoddal.png'
import ComputerVision from '../assets/umlAssets/Computer vision.png'
import NaturalLanguageProcessing from '../assets/umlAssets/Natural language processing.png'
import UmlLogo from '../assets/umlAssets/UmlLogo.svg'
import CardLogo1 from '../assets/umlAssets/cardlogo1.svg'
import CardLogo2 from '../assets/umlAssets/cardlogo2.svg'

import video from '../assets/login-register/UML1.mp4'
import openai from '../assets/sponsor-logo/openai.png'
import digitalOcean from '../assets/sponsor-logo/digital-ocean.png'
import cloudflare from '../assets/sponsor-logo/cloudflare.png'
import microsoft from '../assets/sponsor-logo/microsoft.png'
import nvidia from '../assets/sponsor-logo/nvidia.png'
import stripe from '../assets/sponsor-logo/stripe.png'

import img1 from '../assets/umlAssets/1.svg'
import img2 from '../assets/umlAssets/2.svg'
import img3 from '../assets/umlAssets/3.svg'
import img4 from '../assets/umlAssets/4.svg'
import img5 from '../assets/umlAssets/5.svg'
import img6 from '../assets/umlAssets/6.svg'
import img7 from '../assets/umlAssets/7.svg'
import img8 from '../assets/umlAssets/8.svg'

import { AiOutlinePlus } from 'react-icons/ai'
import { FiEdit3 } from 'react-icons/fi'
import AiAppScreenshot from '../Components/AiAppScreenshot';

const logos = [microsoft, nvidia, openai, cloudflare, digitalOcean, stripe]
const img = [ComputerVision, Audio, NaturalLanguageProcessing, Multimoddal]
const UniversalML = () => {
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);
    const [hovered5, setHovered5] = useState(false);
    const [hovered6, setHovered6] = useState(false);
    const [hovered7, setHovered7] = useState(false);
    const [hovered8, setHovered8] = useState(false);

    const handleMouseEnter1 = () => { setHovered1(true); };
    const handleMouseLeave1 = () => { setHovered1(false); };
    const handleMouseEnter2 = () => { setHovered2(true); };
    const handleMouseLeave2 = () => { setHovered2(false); };
    const handleMouseEnter3 = () => { setHovered3(true); };
    const handleMouseLeave3 = () => { setHovered3(false); };
    const handleMouseEnter4 = () => { setHovered4(true); };
    const handleMouseLeave4 = () => { setHovered4(false); };
    const handleMouseEnter5 = () => { setHovered5(true); };
    const handleMouseLeave5 = () => { setHovered5(false); };
    const handleMouseEnter6 = () => { setHovered6(true); };
    const handleMouseLeave6 = () => { setHovered6(false); };
    const handleMouseEnter7 = () => { setHovered7(true); };
    const handleMouseLeave7 = () => { setHovered7(false); };
    const handleMouseEnter8 = () => { setHovered8(true); };
    const handleMouseLeave8 = () => { setHovered8(false); };

    const firstSectionRef = useRef();

    const scrollToFirstSection = () => {
        const section = firstSectionRef.current;
        const scrollY = window.scrollY;
        const sectionTop = section.offsetTop;
        const duration = 1500; // Adjust this value for the desired scroll duration
        const startTime = performance.now();

        function scrollAnimation(currentTime) {
            const elapsedTime = currentTime - startTime;
            const scrollProgress = Math.min(elapsedTime / duration, 1);
            window.scrollTo(0, scrollY + (sectionTop - scrollY) * scrollProgress);

            if (scrollProgress < 1) {
                requestAnimationFrame(scrollAnimation);
            }
        }
        requestAnimationFrame(scrollAnimation);
    };
    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        loop: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true, // Make each slide width flexible
        speed: 300,
    };
    return (
        <>
            <div className="bg-[#222222] min-h-screen flex  justify-center" ref={firstSectionRef}>
                <div className="p-4 w-full">
                    <div className="mb-4 mt-10 md:mt-20 md:px-6 lg:px-20" >
                        <div className="mb-2">
                            <div className="overflow-hidden">
                                {/* For small screens, switch to a column layout */}
                                <div className="flex flex-col md:flex-row">
                                    {/* First Column (Larger) */}
                                    <div className="w-full md:w-3/5 p-4">
                                        {/* Content for the first column */}
                                        <h2 className="font-semibold mb-2 text-white text-4xl lg:text-5xl xl:text-6xl">Innovation from within you.
                                            Symphony created with you</h2>
                                        <p className='text-light text-2xl lg:text-3xl mt-4 md:mt-6'>Create, build & publish AI apps with zero code</p>
                                        <div className="flex justify-start mt-20">
                                            <button className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-full mr-6 text-xl">
                                                Explore
                                                <GoArrowUpRight className="ml-2" />
                                            </button>
                                            <button className="flex items-center btn-purple text-white py-3 px-6 rounded-full mr-2 text-xl">
                                                Explore
                                                <GoArrowUpRight className="ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Second Column (Smaller) */}
                                    <div className="w-full md:w-2/5 p-4 relative">
                                        {/* Logo */}
                                        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                                            <img src={umlLogo} alt="Logo" className="w-[70%] h-[70%] opacity-20 z-10" />
                                        </div>

                                        {/* Video */}
                                        {/* <video src={video} controls loop muted className="absolute inset-0 w-full h-full z-0"></video> */}
                                        <video autoPlay loop muted className="absolute inset-0 w-full h-full z-0">
                                            <source src={video} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="btn-dark rounded-[60px] p-4 mb-5 mt-32">
                            <h2 className='text-4xl text-white text-center mt-10 font-[700]'>Supported and trusted for innovation</h2>
                            <div className="flex flex-wrap my-16">
                                {logos.map((logo, index) => (
                                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-10">
                                        <img src={logo} alt={`Logo ${index + 1}`} className="mx-auto max-w-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 my-32 h-96">
                            <h2 className='font-semibold mb-2 text-white text-4xl lg:text-5xl xl:text-6xl md:ms-24'>Four simple steps to make <br /> your dream AI apps</h2>
                            <div className="flex items-center justify-between  py-20 px-32">
                                <button className="btn-light text-secondary px-10 py-3 rounded-lg mr-4 flex justify-center items-center"><AiOutlinePlus className="me-2" />Add Label</button>
                                <div className="custom-scrollbar flex justify-center flex-grow">
                                    <ProgressBar
                                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                                        percent={75}
                                    />
                                </div>
                                <div>
                                    <div className='flex items-center'>
                                        <AiOutlinePlus className="me-2 text-green-400 text-2xl" />
                                        <p className='text-white'>Name your label</p>
                                    </div>
                                    <div className='flex items-center mt-3'>
                                        <FiEdit3 className="me-2 text-green-400 text-2xl" />
                                        <p className='text-white'>Choose your label style</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <h2 className='font-semibold mb-2 text-white text-4xl lg:text-5xl xl:text-6xl text-center'>Build with simplicity.<br />
                                Make a difference easily.</h2>
                            <p className='text-xl text-white text-center px-48 mt-10'>Whether you're diving into AI for the first time or expanding your ML toolkit. Create AI apps with UniversalML and discover a world of possibilities on the AI store.</p>
                            <div className="flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-80 mt-28 ">
                                    <div className="h-[255px]">
                                        <div
                                            className={`relative rounded-full overflow-hidden h-[200px] w-[200px] cursor-pointer transition-transform duration-700 ${hovered1 ? 'translate-y-[-30px] transition-transform duration-700 ease-in-out' : ''
                                                }`}
                                            onMouseEnter={handleMouseEnter1}
                                            onMouseLeave={handleMouseLeave1}
                                        >   <div className="">
                                                <img
                                                    src={img1}
                                                    width='200px'
                                                    alt="Image 5"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        {hovered1 && (
                                            <h1 className={`text-white relative text-center text-3xl font-[500] fade-in `}>EYE</h1>
                                        )}
                                    </div>
                                    <div className="h-[255px]">
                                        <div
                                            className={`relative rounded-full overflow-hidden bg-white h-[200px] w-[200px] cursor-pointer transition-transform duration-700 ${hovered2 ? 'translate-y-[-30px] transition-transform duration-700 ease-in-out' : ''
                                                }`}
                                            onMouseEnter={handleMouseEnter2}
                                            onMouseLeave={handleMouseLeave2}
                                        >
                                            <img
                                                src={img2}
                                                alt="Image 5"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        {hovered2 && (
                                            <h1 className={`text-white absolute text-center text-3xl font-[500] fade-in `}>Remove anything</h1>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-80 mt-10">
                                    <div className="h-[255px]">
                                        <div
                                            className={`relative rounded-full overflow-hidden h-[200px] w-[200px] cursor-pointer transition-transform duration-700 top-[-100px] ${hovered3 ? 'translate-y-[-30px] transition-transform duration-700 ease-in-out' : ''
                                                }`}
                                            onMouseEnter={handleMouseEnter3}
                                            onMouseLeave={handleMouseLeave3}
                                        >
                                            <div className="">
                                                <img
                                                    src={img3}
                                                    width='200px'
                                                    alt="Image 5"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        {hovered3 && (
                                            <h1 className={`text-white relative text-center text-3xl font-[500] fade-in top-[-100px] `}>Image-2-story</h1>
                                        )}
                                    </div>

                                    <div
                                        className={`relative rounded-full overflow-hidden h-[255px] w-[200px] cursor-pointer transition-transform duration-700 top-[-100px] ${hovered4 ? 'translate-y-[-30px] transition-transform duration-700 ease-in-out' : ''
                                            }`}
                                        onMouseEnter={handleMouseEnter4}
                                        onMouseLeave={handleMouseLeave4}
                                    >
                                        <img
                                            src={img4}
                                            alt="Image 5"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div
                                        className={`relative rounded-full overflow-hidden h-[255px] w-[200px] cursor-pointer transition-transform duration-700 top-[-100px] ${hovered5 ? 'translate-y-[-30px] transition-transform duration-700 ease-in-out' : ''
                                            }`}
                                        onMouseEnter={handleMouseEnter5}
                                        onMouseLeave={handleMouseLeave5}
                                    >
                                        <img
                                            src={img5}
                                            alt="Image 5"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-80 mt-10 ">
                                    <div
                                        className={`relative rounded-full overflow-hidden h-[255px] w-[200px] cursor-pointer transition-transform duration-700 top-[-200px] ${hovered6 ? 'translate-y-[-30px] transition-transform duration-700 ease-in-out' : ''
                                            }`}
                                        onMouseEnter={handleMouseEnter6}
                                        onMouseLeave={handleMouseLeave6}
                                    >
                                        <img
                                            src={img6}
                                            width='200px'
                                            alt="Image 5"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div
                                        className={`relative rounded-full overflow-hidden h-[255px] w-[200px] cursor-pointer transition-transform duration-700 top-[-200px] ${hovered7 ? 'translate-y-[-30px] transition-transform duration-700 ease-in-out' : ''
                                            }`}
                                        onMouseEnter={handleMouseEnter7}
                                        onMouseLeave={handleMouseLeave7}
                                    >
                                        <img
                                            src={img7}
                                            alt="Image 5"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="grid grid-cols-1 gap-80 mt-10 ">
                                    <div
                                        className={`relative rounded-full overflow-hidden h-[255px] w-[200px] cursor-pointer transition-transform duration-700 top-[-300px] ${hovered8 ? 'translate-y-[-30px] transition-transform duration-700 ease-in-out' : ''
                                            }`}
                                        onMouseEnter={handleMouseEnter8}
                                        onMouseLeave={handleMouseLeave8}
                                    >
                                        <img
                                            src={img8}
                                            alt="Image 5"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative p-4 mb-10  '>
                            <h2 className='font-semibold mb-2 text-white text-4xl lg:text-5xl xl:text-6xl mb-20'>Experience AI store</h2>
                            <Slider {...settings}>
                                <div className="w-auto mx-3 focus:outline-none">
                                    <img src={slideImg1} alt="Image 1" className="focus:ring-0 w-[300px] md:w-96 lg:w-auto" />
                                </div>
                                <div className="w-auto mx-3 focus:outline-none">
                                    <img src={slideImg2} alt="Image 1" className="focus:ring-0 w-[300px] md:w-96 lg:w-auto" />
                                </div>
                                <div className="w-auto mx-3 focus:outline-none">
                                    <img src={slideImg3} alt="Image 1" className="focus:ring-0 w-[300px] md:w-96 lg:w-auto" />
                                </div>

                            </Slider>
                        </div>

                        <div className='p-4 mb-2 mt-32'>
                            <h2 className='font-semibold mb-2 text-white text-4xl lg:text-5xl xl:text-6xl mb-20'>Create your AI apps <br />with our variety of AI types</h2>
                            <div className="grid grid-cols-2 gap-10">
                                {img.map((img, index) => {
                                    return (
                                        <div className=" p-4" key={index}>
                                            <img src={img} alt='images' className="w-full h-auto" />
                                        </div>
                                    )
                                })}

                            </div>
                        </div>

                        <div className='p-4 mb-2 mt-20 text-center'>
                            <div className="flex items-center justify-center">
                                <img src={UmlLogo} alt='UmlLogo' className="h-auto rounded-[96px] uml-logo" />
                            </div>
                            <div className=''>
                                <h3 className='text-secondary text-3xl mb-7 font-[500] mt-20'>UniversalML</h3>
                                <h2 className='text-white text-6xl font-[700]'>Swift and serene,<br />an artistic dream.</h2>
                            </div>
                            <div className="flex items-center justify-center mt-20 ">
                                <button className="flex items-center justify-center btn-light text-primary py-2 px-10 rounded-full mr-2 text-xl font-[700]">
                                    Download
                                </button>
                            </div>
                            <p className='text-secondary font-[500] mt-3'>Coming soon for mac and linux</p>
                        </div>

                        <div className="container mx-auto px-10 lg:px-10 mt-20">
                            <div className="grid grid-cols-2 gap-20">
                                <div>
                                    <div className="btn-dark rounded-[40px] shadow p-7">
                                        <p className='text-light text-base font-[600]'>Developer plan</p>
                                        <h2 className="text-4xl text-white font-bold mb-2">Power to the pro</h2>
                                        <div className="flex jusity-center items-end mt-3 font-[500]">
                                            <h1 className='text-4xl text-white'>$0.40</h1>
                                            <small className='p-1 text-white'>per request</small>
                                        </div>
                                        <div className="flex items-end justify-end mt-10">
                                            <img src={CardLogo1} alt='Card Logo' className=" h-auto" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-dark rounded-[40px] shadow p-7">
                                        <p className='text-light text-base font-[600]'>Business plan</p>
                                        <h2 className="text-4xl text-white font-bold mb-2">Power to the Visionary</h2>
                                        <div className="flex jusity-center items-end mt-3 font-[500]">
                                            <h1 className='text-4xl text-white'>$0.80</h1>
                                            <small className='p-1 text-white'>per request</small>
                                        </div>
                                        <div className="flex items-end justify-end mt-10">
                                            <img src={CardLogo2} alt='Card Logo' className=" h-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='footer flex justify-end  mt-48'>
                            <div className='btn-dark rounded-[63px] px-12 py-4'>
                                <div className='flex justify-center items-center gap-10'>
                                    <div className="flex justify-center items-center">
                                        <AiOutlineCopyrightCircle className='text-white me-1' />
                                        <p className='text-sm text-white font-[500]'>2023 UniversalML</p>
                                    </div>
                                    <p className='text-sm text-white font-[500]'>Privacy policy</p>
                                    <p className='text-sm text-white font-[500]'>Terms of use</p>
                                </div>
                            </div>
                            <div className="btn-light rounded-full  flex items-center px-4 ms-4 cursor-pointer" onClick={scrollToFirstSection}>
                                <AiOutlineArrowUp className='text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UniversalML