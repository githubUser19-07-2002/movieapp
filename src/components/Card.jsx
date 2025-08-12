import React from 'react'

const Card = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-xs">
      <img
        src={backdrop_path}
        alt={original_title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{original_title}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {overview}
        </p>
        <div className="flex items-center mt-3">
          <span className="text-yellow-500 text-lg">⭐</span>
          <span className="ml-1 text-gray-700 font-medium">{vote_average}</span>
        </div>
      </div>
    </div>
  )
}

export default Card