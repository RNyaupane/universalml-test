import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AiApp from '../Components/AiApp'
import ReviewModal from '../Modal/ReviewModal';
import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import appPreview1 from '../assets/ai-store-images/app_preview8.png'
import appPreview2 from '../assets/ai-store-images/app_preview9.png'
import appPreview3 from '../assets/ai-store-images/preview 3.png'


import appLogoBig from '../assets/ai-store-images/app-logo-big.png'
import ReviewCard from '../Components/ReviewCard';
import AiAppScreenshot from '../Components/AiAppScreenshot';
import Header from '../Container/Header';
import Footer from '../Container/Footer';
import AppInfo from '../Container/AppInfo';

const AppDetail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const settings = {
        dots: true,
        infinite: false,
        loop: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true, // Make each slide width flexible
        speed: 300,
    };


    return (
        <>
            <Header title='Ai Store'/>

            <div className="container mx-auto max-w-full px-6 lg:px-10">
                <div className="flex justify-between py-0 md:py-4 mt-5 lg:px-14">
                    <div className=" h-40 w-auto grid grid-cols-3 items-center p-0 md:p-3">
                        <div className="col-span-1">
                            <img src={appLogoBig} alt="Logo" className=" w-full h-full " />
                        </div>
                        <div className="col-span-2 flex flex-col justify-center py-2 px-6">
                            <h2 className="text-primary text-base sm:text-2xl font-semibold">Task manager AI</h2>
                            <p className="text-base sm:text-lg text-secondary m-1"> Finance</p>
                            <div className="flex items-center">
                                <div className="btn-bg px-4 md:px-7 py-1 md:py-2 my-1 md:my-3 rounded-full flex items-center justify-center cursor-pointer">
                                    <span className="text-base sm:text-lg text-blue-500 font-semibold">Open</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' '>
                        <div className="flex items-center">
                            <div className="btn-bg px-3 md:px-4 py-2 my-8 md:my-4 rounded-full flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                                <span className=" text-primary text-lg font-semibold hidden md:block mx-2">Share&nbsp;Link</span>
                            </div>
                        </div>
                    </div>
                </div>

                <AppInfo/>

                <div className=" py-4 mt-5 lg:px-14">
                    <Slider {...settings}>
                        <AiAppScreenshot img={appPreview1} />
                        <AiAppScreenshot img={appPreview3} />
                        <AiAppScreenshot img={appPreview1} />
                        <AiAppScreenshot img={appPreview2} />
                    </Slider>
                </div>

                <div className="flex py-4 mt-8 lg:px-14">
                    <div className='px-4 h-auto w-full'>
                        <p className='text-justify ..."'>Do greatest at in learning steepest. Breakfast extremity suffering one who all otherwise suspected.
                            He at no nothing forbade up moments. Wholly uneasy at missed be of pretty whence. John way sir high
                            than law who week. Surrounded prosperous introduced it if is up dispatched. Improved so strictly produced
                            answered elegance is. Sportsman delighted improving dashwoods gay instantly happiness six. <br /><br />
                            Ham now amounted absolute not mistaken way pleasant whatever. At an these still no dried folly stood thing.
                            Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham intention promotion
                            engrossed assurance defective. Confined so graceful building opinions whatever trifling in. Insisted out differed ham man endeavor expenses.
                            At on he total their he songs. Related compact effects is on settled do.</p>
                    </div>
                </div>
                <div className="flex py-4 mt-5 lg:px-14">
                    <div className='h-auto w-full'>
                        <div className='flex justify-between m-4'>
                            <div>
                                <h1 className='text-4xl font-semibold'>Reviews</h1>
                            </div>
                            <div className="flex items-center">
                                <div
                                    className="btn-bg py-1 md:py-2 px-3 md:px-4 cursor-pointer rounded-full flex items-center justify-center border-2 border-gray-500"
                                    onClick={openModal}
                                >
                                    <span className="text-gray-500 font-medium">Write a review</span>
                                </div>
                                <ReviewModal isOpen={isModalOpen} closeModal={closeModal} />
                            </div>
                        </div>
                        <Slider {...settings} dots={false}>
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </Slider>
                    </div>
                </div>
                <div className="container mx-auto max-w-full p-5 sm:p-8 lg-px-14">
                    <div className='flex justify-between'>
                        <h1 className="text-2xl lg:text-2xl mb-8 font-semibold">Enhance your productivity and work</h1>
                        <Link className='text-blue-500 text-base hidden sm:block text-decoration-underline'>View&nbsp;all</Link>
                    </div>
                    <div className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <AiApp />
                        <AiApp />
                        <AiApp />
                        <AiApp />
                        <AiApp />
                        <AiApp />
                        <AiApp />
                        <AiApp />
                        <AiApp />
                        {/* Mobile View only 4 card */}
                    </div>
                </div>
            </div>

           <Footer/>
        </>
    )
}

export default AppDetail