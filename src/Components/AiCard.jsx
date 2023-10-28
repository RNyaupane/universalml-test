import React from 'react'

const AiCard = (props) => {

    return (
        <>
            <div className=" h-auto flex flex-col justify-between">
                <img src={props.img} alt="Image 1" className="mb-2" />
                <div className="px-1 py-4">
                    <p className="text-gray-500 text-xs lg:text-sm">{props.message}</p>
                    <h3 className="text-lg font-semibold mb-1">{props.heading}</h3>
                    <p className="text-gray-400 text-xxs lg:text-sm">{props.subheading}</p>
                </div>
            </div>
        </>
    )
}

export default AiCard