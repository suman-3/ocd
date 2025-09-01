import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Blogs() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = import.meta.env.VITE_API_BASE || "https://ocd-deploy.onrender.com";

  // Helper function to fix URL paths
  const fixURL = (url) => {
    if (!url) return "https://via.placeholder.com/600x400?text=Blog+Image";
    return url.startsWith("http") ? url : `${API_BASE}${url}`;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("API_BASE is:", API_BASE);
        
        const response = await axios.get(`${API_BASE}/blogs?page=1&limit=3`);
        console.log("API Response:", response.data);
        
        const blogs = response.data.data || [];

        // Fetch details for each blog to get images and rich_text
        const withImages = await Promise.all(
          blogs.map(async (blog) => {
            try {
              const details = await axios.get(`${API_BASE}/blogs/${blog.id}`);
              return { 
                ...blog, 
                image1: details.data.image1,
                rich_text1: details.data.rich_text1 
              };
            } catch (detailError) {
              console.warn(`Failed to fetch details for blog ${blog.id}:`, detailError);
              // Return blog with existing image1 from the list response
              return { 
                ...blog, 
                image1: blog.image1 || "",
                rich_text1: "" 
              };
            }
          })
        );
        
        console.log("Blogs with images:", withImages);
        setArticles(withImages);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [API_BASE]);

  return (
    <section className="bg-black text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Heading */}
        <h2 className="font-bebas uppercase text-3xl md:text-4xl text-center tracking-wider mb-3">
          DETAILING DEMYSTIFIED:{" "}
          <span className="text-custom-red">FROM MYTHS TO MASTERY.</span>
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10 inter">
          Straight from the studio : insights, how-tos, and expert tips to help
          you protect what you drive.
        </p>

        {/* Loader */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3 text-gray-400">Loading blogs...</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-8">
            <p className="text-red-500 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Blog Cards */}
        {!loading && !error && (
          <>
            {articles.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No blogs found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="flex flex-col bg-[#1f1f1f] shadow-[0_8px_30px_rgba(0,0,0,0.6)] overflow-hidden"
                  >
                    {/* Header Section */}
                    <div className="px-6 py-6 bg-[#2a2a2a] min-h-[160px] flex flex-col justify-center">
                      <h3 className="font-bebas uppercase text-lg md:text-xl leading-tight tracking-wide text-white line-clamp-3">
                        {article.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-3 inter">
                        {article.minute_read || 5} min read •{" "}
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>

                    {/* Image Section */}
                    <div className="h-[270px] md:h-[290px] overflow-hidden">
                      <img
                        src={fixURL(article.image1)}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        alt={article.name}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/600x400?text=Blog+Image";
                        }}
                      />
                    </div>

                    {/* Footer Section */}
                    <div className="px-6 py-6 bg-[#2a2a2a] mt-auto">
                      <Link
                        to={`/blogs/${article.id}`}
                        className="text-white inter font-semibold hover:text-custom-red transition-colors duration-200 inline-flex items-center gap-2"
                      >
                        <span>Read Article</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}

        {/* Read All Button */}
        {!loading && !error && articles.length > 0 && (
          <div className="flex justify-center mt-12">
            <Link
              to="/blogs"
              className="bg-custom-red inter px-8 py-3 text-white font-bold shadow-[0_24px_60px_rgba(255,0,0,0.25)] hover:bg-red-700 transition-colors duration-200"
            >
              Read All
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
