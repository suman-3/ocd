import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SkeletonCard = ({ cardHeight, cardWidth }) => (
  <div
    className="relative overflow-hidden rounded-md bg-gray-800 animate-pulse"
    style={{ height: cardHeight, maxWidth: cardWidth }}
  >
    {/* Image skeleton */}
    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800"></div>
    
    {/* Content skeleton overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
      <div className="absolute left-6 bottom-6">
        {/* Title skeleton */}
        <div className="h-8 bg-gray-600 rounded w-32 mb-2 animate-pulse"></div>
        <div className="h-6 bg-gray-700 rounded w-24 animate-pulse"></div>
      </div>
    </div>
  </div>
);

export default function ServicesSection({
  cardHeight = '26rem',
  cardWidth = undefined
}) {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setError(null);
      })
      .catch((err) => {
        console.error('Error fetching services:', err);
        setError('Failed to load services. Please try again later.');
      })
      .finally(() => setLoading(false));
  }, []);

  // Handle navigation with scroll to top
  const handleNavigation = (serviceId) => {
    // Scroll to top first
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Navigate after a short delay to ensure smooth scroll starts
    setTimeout(() => {
      navigate(`/toolbar/${serviceId}`);
    }, 100);
  };

  // Alternative method - navigate immediately and scroll on the new page
  const handleNavigationImmediate = (serviceId) => {
    navigate(`/toolbar/${serviceId}`);
    // Scroll to top immediately after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  // 🔹 Skeleton Loader UI
  if (loading) {
    return (
      <section className="relative z-30 pt-16">
        <div className="text-center py-16 px-5 md:px-8">
          {/* Header skeleton */}
          <div className="pt-28 mb-4">
            <div className="h-12 bg-gray-700 rounded-md w-3/4 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-600 rounded-md w-1/2 mx-auto animate-pulse"></div>
          </div>

          {/* Cards skeleton grid - Fixed responsive grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard
                key={index}
                cardHeight={cardHeight}
                cardWidth={cardWidth}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 🔹 Error UI
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-black">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <section className="relative z-30 pt-10 md:pt-16 px-4 2xl:px-10">
      <div className="text-center py-12 md:py-16 px-4 md:px-6">
        <h1 className="font-bebas text-5xl md:text-6xl pt-28 text-app-white">
          Where Precision Isn't a Feature
          <span className="text-custom-red"> It's the Standard </span>
        </h1>
        <h3 className="mt-4 text-lg text-gray-300 inter">
          Every surface. Every curve. Every ride. We treat your machine like a masterpiece.
        </h3>

        {/* Fixed responsive grid - removed inline styles and conflicting classes */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.id}
              role="button"
              tabIndex={0}
              onClick={() => handleNavigationImmediate(s.id)}
              onKeyDown={(e) => { 
                if (e.key === 'Enter') handleNavigationImmediate(s.id); 
              }}
              className="relative group cursor-pointer overflow-hidden rounded-md transition-all duration-500 hover:scale-105"
              style={{ height: cardHeight, maxWidth: cardWidth }}
              aria-label={s.name}
            >
              {/* Background Image */}
              <img
                src={s.image_home}
                alt={s.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/* Default overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

              {/* Default title - only visible when not hovering */}
              <div className="absolute left-3 bottom-6 z-20 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                <h3 className="font-bebas text-[2.6rem] leading-none tracking-tighter text-white drop-shadow-lg uppercase">
                  {s.name}
                </h3>
              </div>

              {/* Hover Overlay - Dark background with content */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end px-4 pb-4">
                
                {/* Service Title */}
                <h2 className="font-bebas text-[2rem] text-left leading-tight text-white mb-4 uppercase tracking-wider transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                  {s.name}
                </h2>

                {/* Service Description */}
                <p className="text-gray-200 inter text-left text-base leading-relaxed mb-6 max-w-[85%] transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-200">
                  {s.description}
                </p>

                {/* Call to Action Arrow */}
                <div className="text-white text-3xl text-left transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-300">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
