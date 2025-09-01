import React, { useState } from "react";
import Img1 from "../assets/componets-bg/Saurabh.jpg";
import Img2 from "../assets/componets-bg/Sumant.jpg";

const ImageCard = ({ src, alt, name, title, onHover, onLeave, isHovered, hoveredData }) => {
  return (
    <div 
      className="relative border-4 border-black w-full md:w-[400px] h-[500px] md:h-[600px] overflow-hidden"
      onMouseEnter={() => onHover({ name, title })}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

const WhatWeDo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const handleCardHover = (cardData) => {
    setHoveredCard(cardData);
  };
  
  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="bg-[#f5f5f5] px-6 py-8 md:py-12 text-center">
      {/* Small heading */}
      <p
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "28px",
          letterSpacing: "1px",
        }}
        className="text-black mb-4"
      >
        WHAT WE DO
      </p>

      {/* Main heading */}
      <h2
        className="text-4xl md:text-6xl max-w-5xl mx-auto leading-snug text-center uppercase"
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontWeight: "400",
          color: "#18171A",
          letterSpacing: "-0.5px",
          wordSpacing: "-2px",
        }}
      >
        <span className="font-normal">WE DON'T JUST</span>{" "}
        <span className="font-normal">
          DETAIL VEHICLES. WE RESTORE PRIDE, PRESERVE VALUE, AND PROTECT PASSION
          — ONE MACHINE AT A TIME.
        </span>
      </h2>

      {/* Image section with shared overlay */}
      <div className="mt-8 md:mt-10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-center items-center relative">
          <ImageCard
            src={Img1}
            alt="Saurabh"
            name="SAURABH"
            title="Co-founders, OCD Detail Studio"
            onHover={handleCardHover}
            onLeave={handleCardLeave}
          />
          <div className="md:-ml-[4px]">
            <ImageCard
              src={Img2}
              alt="Sumant"
              name="SUMANT"
              title="Co-founders, OCD Detail Studio"
              onHover={handleCardHover}
              onLeave={handleCardLeave}
            />
          </div>
          
          {/* Shared overlay that spans full width but stays within container */}
          {hoveredCard && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent px-4 py-8 text-center opacity-100 transition-opacity duration-300 pointer-events-none">
              <p
                className="text-4xl font-bold"
                style={{ fontFamily: "'Bebas Neue', cursive" }}
              >
                SAURABH & SUMANT
              </p>
              <p className="text-xl text-red-600 inter">{hoveredCard.title}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
