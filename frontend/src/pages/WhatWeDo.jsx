import React from "react";
import Img1 from "../assets/componets-bg/Saurabh.jpg";
import Img2 from "../assets/componets-bg/Sumant.jpg";

const ImageCard = ({ src, alt, name, title }) => {
  return (
    <div className="relative border-4 border-black w-full md:w-[400px] h-[600px] overflow-hidden group">
      {/* Image */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {/* Show on hover: Name + Title */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white to-transparent px-4 py-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p
          className="text-4xl font-bold"
          style={{ fontFamily: "'Bebas Neue', cursive" }}
        >
          {name}
        </p>
        <p className="text-xl text-red-600">{title}</p>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <section className="bg-[#f5f5f5] px-4 py-12 text-center">
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
        className="text-5xl md:text-6xl max-w-5xl mx-auto leading-snug text-center uppercase"
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontWeight: "400",
          color: "#18171A",
          letterSpacing: "-0.5px",
          wordSpacing: "-2px",
        }}
      >
        <span className="font-normal">WE DON’T JUST</span>{" "}
        <span className="font-normal">
          DETAIL VEHICLES. WE RESTORE PRIDE, PRESERVE VALUE, AND PROTECT PASSION
          — ONE MACHINE AT A TIME.
        </span>
      </h2>

      {/* Image section */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center">
        <ImageCard
          src={Img1}
          alt="Saurabh"
          name="SAURABH"
          title="Co-founder, OCD Detail Studio"
        />
        <div className="-ml-[4px]">
          <ImageCard
            src={Img2}
            alt="Sumant"
            name="SUMANT"
            title="Co-founder, OCD Detail Studio"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
