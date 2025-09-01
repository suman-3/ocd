import React, { useState, useEffect } from "react";
import left from "../assets/componets-bg/left.png";
import right from "../assets/componets-bg/right.png";
import { getYouTubeLinks } from "../services/api";

export default function NanoGr() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [fade, setFade] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [youtubeLinks, setYoutubeLinks] = useState({
    youtube_link1: "",
    youtube_link2: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define images array inside component to access youtubeLinks state
  const images = [
    {
      src: left,
      link: youtubeLinks.youtube_link1,
      title: "Ultimate Paint Protection Guide",
    },
    {
      src: right,
      link: youtubeLinks.youtube_link2,
      title: "Bikers - Why You Need It",
    },
  ];

  useEffect(() => {
    const fetchYoutubeLinks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getYouTubeLinks();
        setYoutubeLinks({
          youtube_link1: data.youtube_link1 || "",
          youtube_link2: data.youtube_link2 || ""
        });
      } catch (err) {
        setError("Failed to load YouTube links");
        console.error("Error fetching YouTube links:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchYoutubeLinks();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused && !loading) {
      const interval = setInterval(() => {
        handleNextSlide();
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused, loading]);

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

  const handleImageClick = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center px-8 md:px-10 bg-black text-white font-sans min-h-[500px] 2xl:max-w-screen-2xl mx-auto 2xl:my-6 gap-6 md:gap-10">
        <div className="flex-1 flex flex-col items-center justify-center relative mb-8 lg:mb-0">
          <div className="relative w-full max-w-[600px] h-[350px] bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          </div>
          <div className="flex justify-center mt-2.5 gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          </div>
        </div>
        <div className="flex-1 lg:pl-8 text-center lg:text-left">
          <div className="h-12 bg-gray-800 rounded mb-6 animate-pulse"></div>
          <div className="space-y-2 mb-8">
            <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
          </div>
          <div className="h-12 bg-gray-800 rounded w-full sm:w-[250px] animate-pulse"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center px-8 md:px-10 bg-black text-white font-sans min-h-[500px] 2xl:max-w-screen-2xl mx-auto 2xl:my-6 gap-6 md:gap-10">
        <div className="flex-1 flex flex-col items-center justify-center relative mb-8 lg:mb-0">
          <div className="relative w-full max-w-[600px] h-[350px] bg-red-900/20 border border-red-500 rounded-lg flex items-center justify-center">
            <p className="text-red-400">Failed to load content</p>
          </div>
        </div>
        <div className="flex-1 lg:pl-8 text-center lg:text-left">
          <h1 className="font-bebas text-4xl sm:text-5xl font-normal leading-tight lg:leading-none tracking-normal uppercase mb-6 text-red-400">
            Error Loading Content
          </h1>
          <p className="text-base leading-relaxed mb-8 inter max-w-prose">
            {error}. Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-8 md:px-10 bg-black text-white font-sans min-h-[500px] 2xl:max-w-screen-2xl mx-auto 2xl:my-6 gap-6 md:gap-10">
      {/* Left Side - Image Carousel */}
      <div
        className="flex-1 flex flex-col items-center justify-center relative mb-8 lg:mb-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full max-w-[600px] h-[350px] overflow-hidden">
          <div
            className="block w-full h-full cursor-pointer"
            onClick={() => handleImageClick(images[currentIndex].link)}
          >
            <img
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ease-in-out ${
                fade ? "opacity-0" : "opacity-100"
              }`}
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              loading="lazy"
            />
          </div>
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
              aria-label={`Go to slide ${index + 1}`}
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
              "_blank",
              "noopener,noreferrer"
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
