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
      }, 3000); // Change slide every 3 seconds

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

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    minHeight: "500px",
  };

  const leftStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "600px",
    height: "350px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "opacity 0.3s ease-in-out",
    opacity: fade ? 0 : 1,
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    gap: "8px",
  };

  const dotStyle = (isActive) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: isActive ? "red" : "white",
    cursor: "pointer",
  });

  const rightStyle = {
    flex: 1,
    paddingLeft: "30px",
  };

  const headingStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "72px",
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "100%",
    letterSpacing: "0%",
    textTransform: "uppercase",
    marginBottom: "16px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "24px",
  };

  const buttonStyle = {
    backgroundColor: hover ? "#D97706" : "red",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    width: "250px",
    textAlign: "center",
    fontWeight: "520",
    boxShadow: hover ? "0 0 15px #D97706" : "none",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      {/* Left Side - Image Carousel */}
      <div 
        style={leftStyle}
        onMouseEnter={() => setIsPaused(true)}  // Pause auto-slide on hover
        onMouseLeave={() => setIsPaused(false)} // Resume auto-slide when not hovering
      >
        <div style={imageContainerStyle}>
          <a
            href={images[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={imageStyle}
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
            />
          </a>
        </div>
        <div style={dotsContainerStyle}>
          {images.map((_, index) => (
            <div
              key={index}
              style={dotStyle(currentIndex === index)}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Side - Text & Button */}
      <div style={rightStyle}>
        <h1 style={headingStyle}>ARTDESHINE NANO GRAPHENE +</h1>
        <p style={paragraphStyle} className="inter">
          NGC+ (Nano Graphene Coating) is the most advanced protective coating
          yet. <br /> Built for extreme durability, faster curing, and a deeper,
          glossier finish. <br /> Its enhanced hydrophobic and self-cleaning
          properties mean your car stays cleaner for longer, with less effort.
          <br /> <br /> Designed to resist the harshest elements, NGC+ not only protects
          your paint, but
          it also elevates its look and feel. For those who demand the best,
          nothing <br />else comes close.
        </p>
        <button
          style={buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="inter"
        >
          View More
        </button>
      </div>
    </div>
  );
}
