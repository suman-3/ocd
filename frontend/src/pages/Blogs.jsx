import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Blogs() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const response = await axios.get("http://localhost:4000/blogs?page=1&limit=3");
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE}/blogs?page=1&limit=3`
        );
        const API_BASE = import.meta.env.VITE_API_BASE;
        console.log("API_BASE is:", API_BASE);
        fetch(`${API_BASE}/services`);
        axios.get(`${API_BASE}/blogs?page=1&limit=3`);
        console.log(import.meta.env);

        const blogs = response.data.data || [];

        // fetch details for each blog to get images
        const withImages = await Promise.all(
          blogs.map(async (b) => {
            const details = await axios.get(
              `${import.meta.env.VITE_API_BASE}/blogs/${b.id}`
            );
            return { ...b, image1: details.data.image1 };
          })
        );
        setArticles(withImages);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-black text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Heading */}
        <h2 className="font-bebas uppercase text-3xl md:text-4xl text-center tracking-wider mb-3">
          DETAILING DEMYSTIFIEDgigg:{" "}
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
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Blog Cards */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((a) => (
              <article
                key={a.id}
                className="flex flex-col bg-[#1f1f1f] shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
              >
                <div className="px-6 py-6 bg-[#2a2a2a] min-h-[160px] flex flex-col justify-center">
                  <h3 className="font-bebas uppercase text-lg md:text-xl leading-tight tracking-wide text-white">
                    {a.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-3 inter">
                    {a.minute_read} min read •{" "}
                    {new Date(a.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <img
                  src={a.image1}
                  className="h-[270px] md:h-[290px] object-cover"
                  alt={a.name}
                />

                <div className="px-6 py-6 bg-[#2a2a2a]">
                  <Link
                    to={`/blogs/${a.id}`}
                    className="text-white inter font-semibold hover:text-custom-red transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <span>Read Article</span>
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Read All Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/blogs"
            className="bg-custom-red inter px-8 py-3 text-white font-bold shadow-[0_24px_60px_rgba(255,0,0,0.25)]"
          >
            Read All
          </Link>
        </div>
      </div>
    </section>
  );
}
