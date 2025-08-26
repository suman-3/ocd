import React from "react";
import SampleVideo from "../assets/componets-bg/CarCleaning.mp4";
import WheelImage from "../assets/componets-bg/bi.jpg";

const WhatOCDStandsFor = () => {
  return (
    <section className="w-full bg-white text-black">
      <div className="flex flex-col md:flex-row min-h-screen 2xl:max-h-[94vh]">
        {/* LEFT HALF */}
        <div className="md:w-[65%] flex flex-col">
          {/* Top Text Section */}
          <div className="flex-1 p-8 md:p-14 2xl:pl-48">
            <h2
              className="font-semibold tracking-wide font-bebas mb-0"
              style={{ fontSize: "72px" }}
            >
              WHAT OCD REALLY
            </h2>
            <h2
              className="font-semibold text-red-600 font-bebas -mt-4"
              style={{ fontSize: "72px" }}
            >
              STANDS FOR
            </h2>

            <h3 className="text-3xl md:text-4xl font-semibold tracking-wide mb-6 font-bebas">
              OBSESSIVE. CUSTOM. DETAILING.
            </h3>
            <ul className="space-y-2 list-disc pl-8 text-xl md:text-2xl">
              <li className="inter">
                <span className="font-bold">Obsessive:</span> Because we see
                things others miss.
              </li>
              <li className="inter">
                <span className="font-bold">Custom:</span> Because no two
                vehicles are the same.
              </li>
              <li className="inter">
                <span className="font-bold">Detailing:</span> Because that’s the
                art, not just the service.
              </li>
            </ul>
          </div>

          {/* Bottom Image + Black Box */}
          <div className="flex min-h-[400px]">
            {/* Wheel Image */}
            <div className="w-2/5">
              <img
                src={WheelImage}
                alt="BMW Wheel"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Black Box */}
            <div
              className="w-3/5 text-white px-10 flex flex-col justify-center"
              style={{ backgroundColor: "#232225" }}
            >
              <h2 className="text-5xl font-semibold tracking-wide mb-2 font-bebas">
                LET’S BUILD A RELATIONSHIP
              </h2>
              <p className="text-red-500 font-semibold mb-4 text-xl font-bebas tracking-widest">
                THIS ISN’T JUST A ONE NIGHT STAND
              </p>
              <p className="mb-2 inter">
                Most of our customers stay with us for years because once they
                experience detailing done right, it’s hard to settle for less.
              </p>
              <p className="mb-2 inter">Come in for a conversation.</p>
              <p className="inter">
                Leave with a car that feels{" "}
                <span className="text-red-500 font-bold inter">
                  better than new
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT HALF - Video aligned extreme right & full height */}
        <div className="md:w-[35%] flex items-stretch">
          <video
            src={SampleVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default WhatOCDStandsFor;
