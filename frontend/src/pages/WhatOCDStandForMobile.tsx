import React from "react";
// @ts-ignore
import SampleVideo from "../assets/componets-bg/CarCleaning.mp4";
// @ts-ignore
import WheelImage from "../assets/componets-bg/bi.jpg";

const WhatOCDStandsForMobile = () => {
  return (
    <section className="w-full bg-white text-black md:hidden">
      <div className="flex flex-col lg:flex-row min-h-screen lg:max-h-[94vh]">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-[65%] flex flex-col">
          {/* Top Text Section */}
          <div className="flex-1 p-6 sm:p-8 md:p-14 lg:pl-16 xl:pl-24 2xl:pl-48">
            {/* Main Heading */}
            <h2
              className="font-semibold tracking-wide font-bebas mb-0 leading-none"
              style={{ 
                fontSize: "clamp(32px, 8vw, 72px)",
                lineHeight: "0.9"
              }}
            >
              WHAT OCD REALLY
            </h2>
            <h2
              className="font-semibold text-red-600 font-bebas -mt-1 sm:-mt-2 md:-mt-4 leading-none"
              style={{ 
                fontSize: "clamp(32px, 8vw, 72px)",
                lineHeight: "0.9"
              }}
            >
              STANDS FOR
            </h2>

            {/* Subtitle */}
            <h3 
              className="font-semibold tracking-wide mb-6 mt-4 sm:mt-6 font-bebas leading-tight"
              style={{
                fontSize: "clamp(20px, 4vw, 32px)"
              }}
            >
              OBSESSIVE. CUSTOM. DETAILING.
            </h3>

            {/* List */}
            <ul className="space-y-3 sm:space-y-4 list-disc pl-4 sm:pl-8">
              <li 
                className="inter leading-relaxed"
                style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
              >
                <span className="font-bold">Obsessive:</span> Because we see
                things others miss.
              </li>
              <li 
                className="inter leading-relaxed"
                style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
              >
                <span className="font-bold">Custom:</span> Because no two
                vehicles are the same.
              </li>
              <li 
                className="inter leading-relaxed"
                style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
              >
                <span className="font-bold">Detailing:</span> Because that's the
                art, not just the service.
              </li>
            </ul>
          </div>

          {/* Bottom Section - Image + Black Box */}
          <div className="flex flex-col sm:flex-row min-h-[300px] sm:min-h-[400px]">
            {/* Wheel Image */}
            <div className="w-full sm:w-2/5 h-48 sm:h-auto">
              <img
                src={WheelImage}
                alt="BMW Wheel"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Black Box */}
            <div
              className="w-full sm:w-3/5 text-white p-6 sm:p-8 md:p-10 flex flex-col justify-center"
              style={{ backgroundColor: "#232225" }}
            >
              <h2 
                className="font-semibold tracking-wide mb-2 sm:mb-3 font-bebas leading-tight"
                style={{ fontSize: "clamp(24px, 5vw, 40px)" }}
              >
                LET'S BUILD A RELATIONSHIP
              </h2>
              
              <p 
                className="text-red-500 font-semibold mb-4 font-bebas tracking-widest leading-tight"
                style={{ fontSize: "clamp(14px, 3vw, 18px)" }}
              >
                THIS ISN'T JUST A ONE NIGHT STAND
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                <p 
                  className="inter leading-relaxed"
                  style={{ fontSize: "clamp(14px, 2.5vw, 16px)" }}
                >
                  Most of our customers stay with us for years because once they
                  experience detailing done right, it's hard to settle for less.
                </p>
                
                <p 
                  className="inter leading-relaxed"
                  style={{ fontSize: "clamp(14px, 2.5vw, 16px)" }}
                >
                  Come in for a conversation.
                </p>
                
                <p 
                  className="inter leading-relaxed"
                  style={{ fontSize: "clamp(14px, 2.5vw, 16px)" }}
                >
                  Leave with a car that feels{" "}
                  <span className="text-red-500 font-bold inter">
                    better than new
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Video */}
        <div className="w-full lg:w-[35%] h-64 sm:h-80 lg:h-auto flex items-stretch order-first lg:order-last">
          <video
            src={SampleVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default WhatOCDStandsForMobile;