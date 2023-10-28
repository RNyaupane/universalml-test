import React from 'react'

const AiAppScreenshot = (props) => {
    return (
        <>
            <div className="w-auto mx-3 focus:outline-none">
                <img src={props.img} alt="Image 1" className="focus:ring-0 w-[300px] md:w-96 lg:w-auto" />
            </div>
        </>
    )
}

export default AiAppScreenshot