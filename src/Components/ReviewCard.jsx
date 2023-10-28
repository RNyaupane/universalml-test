import React from 'react'

const ReviewCard = () => {
  return (
    <>
      <div className="bg-card rounded-2xl p-6 max-w-sm m-3">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Need more flexibility</h3>
          <p className="text-gray-500 text-sm">Mar 12</p>
        </div>
        <div className="flex items-center">
          <p className="text-yellow-500 text-2xl mr-1">⭐️</p>
          <p className="text-gray-700 font-semibold">3.0</p>
        </div>
        <p className="text-gray-800 leading-relaxed mt-4 line-clamp-4">
          This one seems to be of the same great quality. If you want a simple code-along,
          this is not for you. Angela will Challenge you to actually use what she teaches
          you many times along the way. You WILL know how to program Python when you finish
          this course! Ham now amounted absolute not mistaken way pleasant whatever.
          At an these still no dried folly stood thing. Rapid it on hours hills it seven years.
          At an these still no dried folly stood thing. Rapid it on hours hills it seven years. If polit
        </p>
      </div>
    </>
  )
}

export default ReviewCard