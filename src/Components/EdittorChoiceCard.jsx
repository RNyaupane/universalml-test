import React from 'react'
import Rectangle388 from '../assets/ai-store-images/Rectangle 388.png'

const EdittorChoiceCard = () => {
    return (
        <>
            <div className="bg-white flex flex-col shadow-md rounded-2xl" style={{ height: "max-content" }}>
                <img src={Rectangle388} alt="Image 1" className="mb-4" />

                {/*  Grid with two columns  */}
                <div className="grid grid-cols-2 gap-4 m-4 mb-10">
                    <div>
                        <h3 className="text-sm lg:text-2xl font-semibold mb-1">3D&nbsp;Creator</h3>
                        <small className="text-gray-600">Tools & Creation</small>
                    </div>
                    <div className="flex justify-end items-center">
                        <button
                            className="btn-bg text-xs md:text-sm text-blue-500 px-4 py-2 rounded-3xl">Open</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EdittorChoiceCard