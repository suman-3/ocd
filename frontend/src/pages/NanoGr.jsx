import React, { useState, useEffect } from "react";
import left from "../assets/componets-bg/left.png";
import right from "../assets/componets-bg/right.png";

export default function NanoGr() {
  const images = [
    {
      src: left,
      link: "https://youtu.be/zvqRX10mjnI?feature=shared",
      title: "Ultimate Paint Protection Guide",
    },
    {
      src: right,
      link: "https://youtu.be/ySdni52z8Qk?feature=shared",
      title: "Bikers - Why You Need It",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [fade, setFade] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // To pause auto-slide on hover

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNextSlide();
      }, 4000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const handleNextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 300);
  };

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setFade(false);
      }, 300);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-8 md:px-10 bg-black text-white font-sans min-h-[500px] 2xl:max-w-screen-2xl mx-auto 2xl:my-6 gap-6 md:gap-10">
      {/* Left Side - Image Carousel */}
      <div
        className="flex-1 flex flex-col items-center justify-center relative mb-8 lg:mb-0"
        onMouseEnter={() => setIsPaused(true)} // Pause auto-slide on hover
        onMouseLeave={() => setIsPaused(false)} // Resume auto-slide when not hovering
      >
        <div className="relative w-full max-w-[600px] h-[350px] overflow-hidden">
          <a
            href={images[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              className={`w-full h-full object-cover rounded-lg cursor-pointer transition-opacity duration-300 ease-in-out ${
                fade ? "opacity-0" : "opacity-100"
              }`}
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
            />
          </a>
        </div>

        {/* Dots Container */}
        <div className="flex justify-center mt-2.5 gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-200 ${
                currentIndex === index ? "bg-red-500" : "bg-white"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Side - Text & Button */}
      <div className="flex-1 lg:pl-8 text-center lg:text-left">
        <h1
          className="font-bebas text-4xl sm:text-5xl font-normal leading-tight lg:leading-none tracking-normal uppercase mb-6"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            lineHeight: "100%",
          }}
        >
          ARTDESHINE NANO GRAPHENE +
        </h1>

        <p className="text-base leading-relaxed mb-8 inter max-w-prose">
          NGC+ (Nano Graphene Coating) is the most advanced protective coating
          yet. <br className="hidden lg:block" />
          Built for extreme durability, faster curing, and a deeper, glossier
          finish. <br className="hidden lg:block" />
          Its enhanced hydrophobic and self-cleaning properties mean your car
          stays cleaner for longer, with less effort.
          <br />
          <br />
          Designed to resist the harshest elements, NGC+ not only protects your
          paint, but it also elevates its look and feel. For those who demand
          the best, nothing <br className="hidden lg:block" />
          else comes close.
        </p>

        <button
          onClick={() =>
            window.open(
              "https://youtube.com/@ocddetailstudiogurgaon?si=Hm-ktnUTAi_wpR5C",
              "_blank"
            )
          }
          className={`inter py-3 px-6 border-none rounded-lg text-base cursor-pointer w-full sm:w-[250px] text-center font-medium transition-all duration-300 ease-in-out ${
            hover
              ? "bg-amber-600 shadow-[0_0_15px_#D97706]"
              : "bg-red-500 hover:bg-red-600"
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          View More
        </button>
      </div>
    </div>
  );
}
