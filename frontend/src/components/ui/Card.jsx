import React from 'react'

const Card = ({ 
  header, 
  description, 
  image, 
  imageAlt = "Card image", 
  buttonText = "Learn More", 
  onButtonClick,
  className = "" 
}) => {
  return (
    <div className={`bg-app-gray rounded-lg shadow-lg text-app-white overflow-hidden ${className}`}>
      {/* Header and Description */}
      <div className="p-6">
        <h3 className="text-xl font-bold  mb-3 font-bebas">
          {header}
        </h3>
        <p className="text-sm  leading-relaxed">
          {description}
        </p>
      </div>

      {/* Full Width Image */}
      <div className="w-full">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Button */}
      <div className="p-6">
        <button 
          onClick={onButtonClick}
          className="bg-custom-red border-custom-red text-white font-bold px-8 py-2 text-lg border-2 rounded-md hover:bg-red-700 transition-colors w-full"
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default Card
