import React from 'react';
import applogo from '../assets/ai-store-images/app-logo.png';
import { Link } from 'react-router-dom';

const TrendingAiApp = (props) => {
    const { cover_image, title, category, summary} = props;
    const summaryLink = summary + '.space';
    return (
        <div className="flex items-center h-75 w-400 bg-white p-2">
            <Link to={summaryLink} className="w-20 h-20 md:w-12 md:h-12 lg:w-20 lg:h-20 flex-shrink-0 rounded-lg flex items-center justify-center" target="_blank">
                <img className='rounded-lg' src={cover_image} alt="" />
            </Link>
            <div className="flex-grow ml-4 md:ml-2 lg:ml-4">
                <h3 className="text-base md:text-sm lg:text-base font-semibold">{title}</h3>
                <p className="text-xs lg:text-sm text-gray-400 mt-2">{category}</p>
            </div>
            <div className="w-9 h-9 lg:w-12 lg:h-12 btn-bg mx-4 md:mx-2 lg:mx-4 rounded-full flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 lg:h-6 lg:w-6 text-blue-500">
                    <path fillRule="evenodd"
                        d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                        clipRule="evenodd" />
                </svg>
            </div>
        </div>
    );
};

export default TrendingAiApp;
