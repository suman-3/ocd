import React from "react";
import ShopFront from "../../../assets/componets-bg/ShopFront.jpg";

const Ethos = () => {
  return (
    <section className="text-app-black bg-[#F4F4F4] px-6 md:px-10 py-8 md:py-14 w-full flex flex-col lg:flex-row gap-8 md:gap-10 2xl:max-w-screen-2xl mx-auto">
      {/* Left side: Text */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2">
        {/* Small Heading */}
        <p
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontWeight: 400,
            fontSize: "clamp(24px, 5vw, 30px)",
            lineHeight: "100%",
            textTransform: "capitalize",
          }}
        >
          Our Ethos
        </p>

        {/* Main Heading */}
        <h1
          style={{
            fontFamily: "'Bebas Neue', cursive",
            textTransform: "capitalize",
            fontSize: "clamp(28px, 6vw, 48px)",
            lineHeight: "1.1",
          }}
          className="text-app-black"
        >
          A Studio Built For The Obsessed
          <br />
          <span className="text-custom-red">- By The Obsessed</span>
        </h1>

        {/* Paragraphs */}
        <div className="space-y-4 sm:space-y-6">
          <p
            style={{
              fontSize: "clamp(14px, 2.5vw, 16px)",

              textTransform: "capitalize",
              lineHeight: "1.6",
            }}
            className="inter"
          >
            Some See Swirl Marks. We See Missed Potential.{" "}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Some Settle For "Good Enough." We Chase Just Right.
          </p>

          <p
            className="text-sm sm:text-base inter font-light"
            style={{ textTransform: "capitalize" }}
          >
            OCD Detail Studio Was Born Out Of One Simple Belief:
          </p>

          <p
            className="text-base sm:text-lg inter font-semibold leading-relaxed"
            style={{ textTransform: "capitalize" }}
          >
            Your Machine Deserves More Than A Quick Shine — It Deserves
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Reverence.
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 2.5vw, 16px)",
              lineHeight: "1.6",
            }}
            className="inter"
          >
            We Don't Believe In Volume. We Believe In Value.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Each Vehicle We Work On — Whether It's A Porsche, A Ducati, A
            Defender, Or A Ninja Is Treated Like A Personal Project.
          </p>
        </div>

        {/* Final Line */}
        <p
          style={{
            textTransform: "capitalize",
            fontSize: "clamp(16px, 3vw, 20px)",
            lineHeight: "1.5",
          }}
          className="inter font-medium mt-4"
        >
          We're Not Just A Detailing Studio.{" "}
          <span className="text-custom-red font-semibold">
            We're A Perfectionist's Garage
          </span>
        </p>
      </div>

      {/* Right side: Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden order-first lg:order-last">
        <img
          src={ShopFront}
          alt="Shop Front"
          className="w-full max-w-md lg:max-w-none lg:w-[95%] 2xl:w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover rounded-md shadow-lg"
        />
      </div>
    </section>
  );
};

export default Ethos;
