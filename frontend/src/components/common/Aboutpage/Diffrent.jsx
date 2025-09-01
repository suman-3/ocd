import React from "react";
import {
  ShieldCheck,
  Star,
  MapPin,
  BookOpen,
  Award,
  GraduationCap,
  Building2,
  ShieldPlus,
} from "lucide-react";

const Diffrent = () => {
  const features = [
    {
      Icon: ShieldPlus,
      title: "OWNER-LED CRAFTSMANSHIP & A PRO TEAM",
      description:
        "Yes, our founders are industry veterans. But it's the team's daily obsession with precision that drives us.",
    },
    {
      Icon: Award,
      title: "GLOBALLY CERTIFIED PRODUCTS ONLY",
      description:
        "We work with premium brands like Artdeshne, CarPro, and Puris — not catalogue fillers. If it doesn't meet our standards, it doesn't touch your ride.",
    },
    {
      Icon: Building2,
      title: "THREE CITIES. ONE PHILOSOPHY.",
      description:
        "Whether you're walking into our Mumbai, Gurgaon, or Thane studio, expect one thing: Zero shortcuts. Maximum protection.",
    },
    {
      Icon: GraduationCap,
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
      <div className="mx-auto px-5 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-7">
          {features.map(({ Icon, title, description }, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col group cursor-pointer"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <Icon

                  className="text-red-500 size-10 group-hover:text-black transition-colors duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-[16px]  font-bebas md:text-[18px] font-semibold text-gray-800 group-hover:text-gray-900 uppercase tracking-wider mb-4 leading-tight transition-colors duration-300">
                {title}
              </h3>

              {/* Description */}
              <p className="text-[12px] inter md:text-[14px] font-normal text-gray-600 group-hover:text-gray-700 leading-relaxed flex-grow transition-colors duration-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Diffrent;
