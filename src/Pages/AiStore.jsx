import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EdittorChoiceCard from '../Components/EdittorChoiceCard'
import AiApp from '../Components/AiApp'
import TrendingAiApp from '../Components/TrendingAiApp'
import { useDispatch, useSelector } from 'react-redux'

import img1 from '../assets/ai-store-images/AI-REPRESENTATION-APR23-VOGUEBUS_STORY 1 (1).png'
import img2 from '../assets/ai-store-images/AI-REPRESENTATION-APR23-VOGUEBUS_STORY 1.png'
import rectangle382 from '../assets/ai-store-images/Rectangle 382.png'
import img3 from '../assets/ai-store-images/Free trails for paid apps.jpg'
import Rectangle391 from '../assets/ai-store-images/Rectangle 391.png'
import Rectangle392 from '../assets/ai-store-images/Rectangle 392.png'
import Rectangle393 from '../assets/ai-store-images/Rectangle 393.png'
import Rectangle388 from '../assets/ai-store-images/Rectangle 388.png'

import AiCard from '../Components/AiCard'
import Header from '../Container/Header'
import Footer from '../Container/Footer'
import { getAiApp } from '../features/aiApp/AiAppSlice'

const AiStore = () => {
    const dispatch = useDispatch();
    const { apps, isLoading } = useSelector((state) => state.aiapp);

    useEffect(() => {
        dispatch(getAiApp());
    }, []);

    //Storing all attribute in AppData with the help of flatMap
    const AppData = apps.flatMap(category =>
        category.types.flatMap(type =>
            type.devices.map(device => ({
                category: category.category,
                type: type.type,
                user: device.user,
                title: device.title,
                average_rating: device.average_rating,
                cover_image: device.cover_image,
                summary: device.summary,
                demo: device.demo,
                model_type: device.model_type,
                description: device.description,
                screenshots: device.screenshots,
                reviews: device.reviews,
                created_at: device.created_at,
                published_date: device.published_date,
                is_published: device.is_published,
            }))
        )
    );


    return (
        <>
            <Header title="Ai Store" />
            <div className="container mx-auto max-w-full p-4 md:p-5 lg:p-12 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 xl:gap-12">
                    {/* Left Column  */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:col-span-2 ">
                        <div className="relative ">
                            <div className="relative h-fit">
                                <img className="rounded-3xl hidden sm:block" style={{ width: "100%" }} src={img2} alt="Your Image Alt Text" />
                                <img className="rounded-3xl block sm:hidden" style={{ width: "100%" }} src={img1} alt="Your Image Alt Text" />
                                <div className="rounded-3xl gradient-overlay"></div>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2 relative container">
                                    <small className="text-xs lg:text-base absolute bottom-0 left-0 mb-20 md:mb-24 lg:mb-32 ml-4 text-blue-500 font-semibold">Fashion & wearables</small>
                                    <h2 className="absolute bottom-0 left-0 mb-14 lg:mb-20 ml-4 text-xl md:text-4xl w-max  font-bold">Louis vuitton AI</h2>
                                    <p className="absolute bottom-0 left-0 w-4/6 md:w-auto lg:w-full mb-4 md:mb-6 ml-4 text-xs lg:text-base">Try out Louis Vuitton clothes using AI. Merge our clothing to visualize a standout you.</p>
                                </div>
                                <div className="md:w-1/2 relative">
                                    <button className="absolute bottom-0 text-sm lg:text-xl  right-0 mb-8 mr-4 px-4 md:px-8 py-2 btn-bg text-blue-500 font-semibold rounded-3xl">Open</button>
                                </div>
                            </div>
                        </div>

                        <div className=" hidden md:block">
                            <h1 className="text-2xl lg:text-2xl mb-8 font-semibold">Editor's Choice</h1>
                            <div className=" h-max grid grid-cols-3 gap-3 lg:gap-6">

                                {/* Cards  */}
                                <EdittorChoiceCard />
                                <EdittorChoiceCard />
                                <EdittorChoiceCard />

                            </div>
                        </div>
                    </div>

                    {/* Right Column  */}
                    <div className="grid grid-cols-1 gap-8">
                        <div className="bg-white p-4  lg:py-8 md:py-4 h-auto rounded-3xl trending">
                            <div className="flex justify-between mb-4 lg:px-4">
                                <div className="">
                                    <h1 className="text-xl lg:text-2xl font-semibold">Trending</h1>
                                </div>
                                <div className="">
                                    <Link className="text-xs lg:text-base font-medium text-blue-500  pt-1 text-decoration-underline">View all</Link>
                                </div>
                            </div>
                            {AppData.map((appData, index) => {
                                return (
                                    <AiApp
                                        key={index}
                                        cover_image={appData.cover_image}
                                        title={appData.title}
                                        category={appData.category}
                                        summary={appData.summary}
                                    />

                                )
                            })}
                        </div>
                        <div className="">
                            <div className="relative">
                                <img className="rounded-3xl w-full" src={rectangle382} alt="Your Image Alt Text" />
                                <div className="absolute bottom-0 left-0 p-4 lg:p-6 pb-8 bg-opacity-50 w-full"
                                    style={{ backgroundColor: "#A1DBDA99", borderRadius: "0 0 24px 24px" }}>
                                    <p className="text-blue-600 text-xs lg:text-base mb-1">Social networking & messaging</p>
                                    <h3 className="text-lg lg:text-2xl font-semibold mb-1">Chat GPT</h3>
                                    <p className="text-xs lg:text-base">Ask anything, anywhere and anytime</p>
                                </div>
                            </div>
                        </div>

                        <div className=" sm:h-48 md:h-32 lg:h-44 relative xl:h-60 ">
                            <img className=" inset-0 m-0 p-0 w-full h-fit sm:h-[110%] md:h-[100%] lg:h-[90%] xl:h-[80%] rounded-md"
                                src={img3} alt="Image Alt Text" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container  md:mt-1 mx-auto max-w-full p-5 sm:p-8 lg:px-14">
                <div className='flex justify-between'>
                    <h1 className="text-2xl lg:text-2xl mb-8 font-semibold">Enhance your productivity and work</h1>
                    <Link className='text-blue-500 text-base hidden sm:block text-decoration-underline'>View&nbsp;all</Link>
                </div>
                <div className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {AppData.map((appData, index) => {
                        return (
                            <AiApp
                                key={index}
                                cover_image={appData.cover_image}
                                title={appData.title}
                                category={appData.category}
                                summary={appData.summary}
                            />
                        )
                    })}

                    {/* Mobile View only 4 card */}
                </div>
            </div>


            <div className="container mx-auto max-w-full p-5 sm:p-8 lg:px-14">
                <div className='flex justify-between'>
                    <h1 className="text-2xl lg:text-2xl mb-8 font-semibold">Top paid apps</h1>
                    <Link className='text-blue-500 text-base hidden sm:block text-decoration-underline'>View&nbsp;all</Link>
                </div>
                <div className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {AppData.map((appData, index) => {
                        return (
                            <AiApp
                                key={index}
                                cover_image={appData.cover_image}
                                title={appData.title}
                                category={appData.category}
                                summary={appData.summary}
                            />
                        )
                    })}
                </div>
            </div>


            <div className="container mx-auto max-w-full p-8 hidden md:block lg:px-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
                    {/* Cards  */}
                    <AiCard img={Rectangle391} message={"Featured app"} heading={"Write and build your imagination"} subheading={"Create any style of art with ease."} />
                    <AiCard img={Rectangle392} message={"Future is now"} heading={"Industrial robotics for humanity"} subheading={"Plan, create and execute functions."} />
                    <AiCard img={Rectangle393} message={"Major update"} heading={"Photos like never before"} subheading={"Recorrect any photo instantly with just a swipe."} />
                </div>
            </div>


            <div className=" mt-10 p-8 sm:hidden">
                <div className=" h-max grid">
                    {/* Card  */}
                    <div className="bg-white flex flex-col shadow-md rounded-2xl" style={{ height: "max-content" }}>
                        <img src={Rectangle388} alt="Image 1" className="mb-4" />
                        {/* Grid with two columns  */}
                        <div className="grid grid-cols-2 gap-4 m-4 mb-10">
                            <div>
                                <h3 className="text-sm lg:text-2xl font-semibold mb-1">3D&nbsp;Creator</h3>
                                <small className="text-gray-600">Tools & Creation</small>
                            </div>
                            <div className="flex justify-end items-center">
                                <button
                                    className="btn-bg text-base md:text-sm text-blue-600 px-4 py-2 rounded-3xl">Install</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto max-w-full p-6 lg:p-8 lg:px-14">
                <div className='flex justify-between'>
                    <h1 className="text-2xl lg:text-2xl mb-8 font-semibold">AI apps of the month</h1>
                    <Link className='text-blue-500 text-base hidden sm:block text-decoration-underline'>View&nbsp;all</Link>
                </div>
                <div className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {AppData.map((appData, index) => {
                        return (
                            <AiApp
                                key={index}
                                cover_image={appData.cover_image}
                                title={appData.title}
                                category={appData.category}
                                summary={appData.summary}
                            />
                        )
                    })}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AiStore