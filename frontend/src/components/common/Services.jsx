import React from 'react'
import Card from '../ui/Card'
import s1 from '../../assets/componets-bg/service1.png'
import s2 from '../../assets/componets-bg/service2.png'
import s3 from '../../assets/componets-bg/service3.png'

const servicesData = [
    {
        title: "How Car Body Polish Can Restore Factory-Like Finish",
        description: "Restore gloss, remove micro-marring, and prep your paint for coating like a pro.",
        image: s1
    },
    {
        title: "Why Headlight Sealing After Polish Is a Game-Changer",
        description: "Extend clarity, avoid yellowing, and protect against oxidation — using PPF or film.",
        image: s2
    },
    {
        title: "Best Soap & Wax Combos for Coated Cars",
        description: "Not all soaps are coating-safe. Learn what to avoid, and what brings out that slick finish.",
        image: s3
    }
]

export const Services = () => {
  const handleServiceClick = (title) => {
    console.log(`Clicked on: ${title}`);
    // Add your click handler logic here
  };

  return (
    <div className="py-16 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-bebas text-white mb-4">
            Detailing Demystified: <span className="text-custom-red">From Myths to Mastery</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional detailing services that bring out the best in your vehicle
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              header={service.title}
              description={service.description}
              image={service.image}
              imageAlt={service.title}
              buttonText="Learn More"
              onButtonClick={() => handleServiceClick(service.title)}
              className="transform hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
