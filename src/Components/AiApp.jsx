import React from 'react'
import appLogo from '../assets/ai-store-images/app-logo.png'
import { Link } from 'react-router-dom';

const AiApp = (props) => {
  const { cover_image, title, category, summary } = props;
  const summaryLink = summary + '.space';


  return (
    <>
      <div className="flex items-center h-75 w-400  p-1">
        <Link to={summaryLink} className="w-20 h-20 flex-shrink-0  rounded-lg flex items-center justify-center cursor-pointer" target='_blank'>
          <img className='rounded-lg' src={cover_image} alt="" />
        </Link>
        <div className="flex-grow ml-4">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-xs text-gray-400 mt-2">{category}</p>
        </div>
        <div className="flex items-center">
          <Link to={`/ai-app?dynamicUrl=${encodeURIComponent(summaryLink)}`} className="btn-bg py-1 md:py-2 px-3 md:px-4 mx-1 md:mx-4 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-blue-500 font-medium">Open</span>
          </Link>
        </div>
      </div>

    </>
  )
}

export default AiApp