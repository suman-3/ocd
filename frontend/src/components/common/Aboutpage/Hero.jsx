import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-app-white pb-6 md:pb-8 -mt-8 md:mt-0">
      <h1 className="font-bebas text-4xl md:text-5xl lg:text-6xl pt-24 text-app-white text-center">
        We Don’t Just Detail Cars. <br className='md:hidden' />
        <span className="text-custom-red"> We Obsess Over Them. </span>
      </h1>
      <p className="text-md md:text-lg px-4 md:px-0 text-center mt-4 inter">
        OCD Detail Studio is where passion meets precision. From ceramic to PPF, every service is a tribute to machines that move us.
      </p>
    </div>
  );
};

export default Hero;
