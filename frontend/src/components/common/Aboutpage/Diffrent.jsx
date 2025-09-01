import React from "react";

const Diffrent = () => {
  const features = [
    {
      defaultImage: "../../assets/icon/diff1.svg", // Replace with your image path
      hoverImage: "../assets/icon/diff1-hover.svg", // Replace with your hover image path
      title: "OWNER-LED CRAFTSMANSHIP & A PRO TEAM",
      description:
        "Yes, our founders are industry veterans. But it's the team's daily obsession with precision that drives us.",
    },
    {
      defaultImage: "../assets/icon/diff2.svg",
      hoverImage: "../assets/icon/diff2-hover.svg",
      title: "GLOBALLY CERTIFIED PRODUCTS ONLY",
      description:
        "We work with premium brands like Artdeshne, CarPro, and Puris — not catalogue fillers. If it doesn't meet our standards, it doesn't touch your ride.",
    },
    {
      defaultImage: "../assets/icon/diff3.svg",
      hoverImage: "../assets/icon/diff3-hover.svg",
      title: "THREE CITIES. ONE PHILOSOPHY.",
      description:
        "Whether you're walking into our Mumbai, Gurgaon, or Thane studio, expect one thing: Zero shortcuts. Maximum protection.",
    },
    {
      defaultImage: "../assets/icon/diff4.svg",
      hoverImage: "../assets/icon/diff4-hover.svg",
      title: "WE EDUCATE, NOT UPSELL",
      description:
        "Our clients don't leave confused. We break it down the science, the service, and the real-world impact so you make informed decisions.",
    },
  ];

  return (
    <section className="bg-[#F4F4F4] w-full py-8 md:py-16">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 px-4">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-700 font-bebas tracking-wider mb-2">
          WHAT SETS US APART
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black font-bebas uppercase leading-tight">
          what makes ocd <span className="text-red-500">different</span>
        </h1>
      </div>

      {/* Features Grid */}
      <div className="mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col group cursor-pointer"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300 relative">
                  {/* Default Image */}
                  <img
                    src={feature.defaultImage}
                    alt={feature.title}
                    className="w-12 h-12 object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {/* Hover Image */}
                  <img
                    src={feature.hoverImage}
                    alt={`${feature.title} hover`}
                    className="w-12 h-12 object-contain absolute inset-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bebas tracking-wider md:text-base font-bold text-gray-800 group-hover:text-gray-900 uppercase mb-4 leading-tight transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] inter text-gray-600 group-hover:text-gray-700 leading-relaxed flex-grow transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diffrent;
