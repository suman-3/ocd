import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-app-white pb-8">
      <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-24 text-app-white text-center">
        We Don’t Just Detail Cars.
        <span className="text-custom-red"> We Obsess Over Them. </span>
      </h1>
      <p className="text-lg text-center mt-4 inter">
        OCD Detail Studio is where passion meets precision. From ceramic to PPF, every service is a tribute to machines that move us.
      </p>
    </div>
  );
};

export default Hero;
