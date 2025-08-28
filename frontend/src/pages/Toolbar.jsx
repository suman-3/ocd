import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RightPanelContact from "../components/common/ToolbarSection/GetInTouch";

// Skeleton Components
const SkeletonHeader = () => (
  <div className="bg-black text-white py-12 px-4 text-center">
    <div className="animate-pulse">
      <div className="h-8 md:h-12 bg-gray-700 rounded-lg max-w-sm mx-auto"></div>
    </div>
  </div>
);

const SkeletonVideo = () => (
  <div className="animate-pulse">
    <div className="bg-gray-300 rounded-lg aspect-video w-full"></div>
  </div>
);

const SkeletonText = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-4 bg-gray-300 rounded w-full"></div>
    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    <div className="h-4 bg-gray-300 rounded w-4/5"></div>
    <div className="h-4 bg-gray-300 rounded w-full"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
    <div className="h-4 bg-gray-300 rounded w-4/5"></div>
  </div>
);

const SkeletonRightPanel = () => (
  <div className="animate-pulse">
    <div className="bg-gray-300 rounded-lg h-96 w-full"></div>
  </div>
);

const LoadingSkeleton = () => (
  <div className="bg-white min-h-screen">
    <SkeletonHeader />

    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8 w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-7xl mx-auto">
      {/* Left Content Skeleton */}
      <div className="flex-1 space-y-6 lg:space-y-8">
        <SkeletonVideo />
        <SkeletonText />
        <SkeletonVideo />
      </div>

      {/* Right Panel Skeleton */}
      <div className="w-full lg:w-[350px] xl:w-[400px] lg:sticky lg:top-8">
        <SkeletonRightPanel />
      </div>
    </div>
  </div>
);

const Toolbar = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${import.meta.env.VITE_API_BASE}/services/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch service");
        }
        return res.json();
      })
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching service:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoadingSkeleton />;

  if (error) {
    return (
      <div className="bg-[#F4F4F4] min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Error Loading Service
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="bg-[#F4F4F4] min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Service Not Found
          </h1>
          <p className="text-gray-600 mt-4">
            The requested service could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F4F4] min-h-screen w-full">
      {/* Black Top Header */}
      <div className="bg-black text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-bebas tracking-wide uppercase leading-tight">
            {service.name}
          </h1>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="mx-auto px-4 sm:px-6 lg:px-10 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 space-y-6 lg:space-y-8">
            {/* Media 1 */}
            {service.media1 && (
              <div className="w-full">
                <video
                  src={service.media1}
                  controls
                  autoPlay
                  playsInline
                  className="w-full rounded-lg shadow-lg aspect-video object-cover"
                  onError={(e) => {
                    console.error("Video failed to load:", e);
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}

            {/* Rich Text Content */}
            {service.rich_text && (
              <div className="w-full inter">
                <div
                  className="prose prose-sm sm:prose-base lg:prose-lg max-w-none 
                           prose-headings:font-bold prose-headings:text-gray-900
                           prose-p:text-gray-700 prose-p:leading-relaxed
                           prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                           prose-strong:text-gray-900 prose-em:text-gray-800
                           prose-ul:text-gray-700 prose-ol:text-gray-700
                           prose-li:text-gray-700 prose-blockquote:text-gray-600
                           prose-blockquote:border-l-gray-400 prose-code:text-gray-800
                           prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
                  dangerouslySetInnerHTML={{ __html: service.rich_text }}
                />
              </div>
            )}

            {/* Media 2 */}
            {service.media2 && (
              <div className="w-full">
                <video
                  src={service.media2}
                  controls
                  playsInline
                  className="w-full rounded-lg shadow-lg aspect-video object-cover"
                  onError={(e) => {
                    console.error("Video failed to load:", e);
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>

          {/* Right Panel - Sticky on larger screens */}
          <div className="w-full lg:w-[400px] xl:w-[400px] lg:sticky lg:top-8 lg:self-start">
            <div className="bg-transparent">
              <RightPanelContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
