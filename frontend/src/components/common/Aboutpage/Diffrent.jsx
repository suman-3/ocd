import React from "react";
import set1 from "../../../assets/componets-bg/set1.png";
import set2 from "../../../assets/componets-bg/set2.png";
import set3 from "../../../assets/componets-bg/set3.png";
import set4 from "../../../assets/componets-bg/set4.png";

const Diffrent = () => {
  return (
    <section className="bg-[#F4F4F4] w-full 2xl:pt-6">
      <div className="flex flex-col items-center justify-center text-center py-8 md:py-16 gap-4">
        <h2 className="text-2xl font-semibold text-black font-bebas">
          WHAT sets us apart
        </h2>
        <h1 className="text-4xl md:text-6xl font-medium text-black font-bebas mt-1">
          what makes ocd <span className="text-custom-red">different</span>
        </h1>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center gap-6 md:gap-8 md:px-4 flex-wrap pb-6 md:pb-10">
          <img
            src={set1}
            alt="What sets us apart"
            className="w-60 h-64 object-cover rounded-md shadow-md"
          />
          <img
            src={set2}
            alt="What sets us apart"
            className="w-60 h-64 object-cover rounded-md shadow-md"
          />
          <img
            src={set3}
            alt="What sets us apart"
            className="w-60 h-64 object-cover rounded-md shadow-md"
          />
          <img
            src={set4}
            alt="What sets us apart"
            className="w-60 h-64 object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Diffrent;
