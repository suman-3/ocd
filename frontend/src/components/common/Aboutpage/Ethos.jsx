import React from "react";
import ShopFront from "../../../assets/componets-bg/ShopFront.jpg";

const Ethos = () => {
  return (
    <section className="text-app-black bg-[#F4F4F4] px-10 pt-14 w-full flex gap-10 2xl:max-w-screen-2xl mx-auto">
      {/* Section Title */}

      {/* Left side: Text */}
      <div className="flex flex-col gap-6 w-1/2">
        {/* Heading */}
         <p
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontWeight: 400,
          fontSize: "30.01px",
          lineHeight: "100%",
          textTransform: "capitalize", // Capitalize first letter of each word
        }}
      >
        Our Ethos
      </p>
        <h1
          style={{
            fontFamily: "'Bebas Neue', cursive",
            textTransform: "capitalize", // Capitalize each word
          }}
          className="text-5xl text-app-black whitespace-nowrap"
        >
          A Studio Built For The Obsessed
          <br />
          <span className="text-custom-red">- By The Obsessed</span>
        </h1>

        {/* Paragraphs */}
        <p
          style={{
            fontSize: "16px",
            fontWeight: 100, // lighter text
            textTransform: "capitalize", // Capitalize each word
          }}
          className="inter"
        >
          Some See Swirl Marks. We See Missed Potential. <br />
          Some Settle For “Good Enough.” We Chase Just Right. <br /> <br />
          <span className="text-[16px] inter block font-light">
            OCD Detail Studio Was Born Out Of One Simple Belief:
          </span>
          <br />
          <span className="text-lg inter font-semibold">
            Your Machine Deserves More Than A Quick Shine — It Deserves
            <br /> Reverence.
          </span>
          <br /> <br /> We Don’t Believe In Volume. We Believe In Value.
          <br /> Each Vehicle We Work On — Whether It’s A Porsche, A Ducati, A
          Defender, Or A Ninja Is Treated Like A Personal Project.
        </p>

        {/* Final Line */}
        <p
          style={{
            fontWeight: 100,
            textTransform: "capitalize", // Capitalize each word
          }}
          className="inter font-medium text-lg 2xl:text-xl"
        >
          We’re Not Just A Detailing Studio.{" "}
          <span className="text-custom-red font-semibold">
            We’re A Perfectionist’s Garage
          </span>
        </p>
      </div>

      {/* Right side: Image */}
      <div className="w-1/2 flex items-center justify-center overflow-hidden">
        <img
          src={ShopFront}
          alt="Shop Front"
          className="w-[95%] 2xl:w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>
    </section>
  );
};

export default Ethos;
