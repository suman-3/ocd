import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatMistakes = (text) => {
    return text.replace(
      /(\d+\.\s.*?)(<br>|$)/g,
      `<h3 class="mistake-heading">$1</h3>`
    );
  };

  const formatSpecialHeadings = (text) => {
    return text
      .replace(
        /How to Avoid These Paint-Damaging Mistakes/gi,
        `<h2 class="special-heading black-heading">How to Avoid These Paint-Damaging Mistakes</h2>`
      )
      .replace(
        /Why OCD Detail Studio is Trusted in Thane and Gurugram/gi,
        `<h2 class="special-heading black-heading">Why OCD Detail Studio is Trusted in Thane and Gurugram</h2>`
      );
  };

  const formatBullets = (text) => {
    if (text.includes("How to Avoid")) {
      const afterHeading = text.split("How to Avoid These Paint-Damaging Mistakes")[1];
      if (afterHeading) {
        const parts = afterHeading.split(".");
        const list =
          "<ul class='avoid-list'>" +
          parts
            .filter((p) => p.trim().length > 0)
            .map((p) => `<li>${p.trim()}.</li>`)
            .join("") +
          "</ul>";
        return text.replace(afterHeading, list);
      }
    }
    return text;
  };

  const createMarkup = (htmlContent) => {
    if (!htmlContent) return { __html: "" };
    let formatted = htmlContent;
    formatted = formatMistakes(formatted);
    formatted = formatSpecialHeadings(formatted);
    formatted = formatBullets(formatted);
    return { __html: formatted };
  };

  // useEffect(() => {
  //   const fetchBlog = async () => {
  //     try {
  //       const response = await axios.get(`${API_BASE}/blogs/${id}`);
  //       setBlog(response.data);

  //       // Fetch related blogs
  //       const rel = await axios.get(`${API_BASE}/blogs?limit=3`);
  //       setRelated(rel.data.data.filter((b) => b.id !== id));
  //     } catch (err) {
  //       setError("Failed to fetch blog details. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchBlog();
  // }, [id]);

    useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_BASE}/blogs/${id}`);
        setBlog(response.data);
  
        // fetch ALL blogs
        const rel = await axios.get(`${API_BASE}/blogs`);
        const blogs = rel.data.data || [];
  
        // fetch details for each blog (to get image1 + rich_text1 excerpt)
        const withDetails = await Promise.all(
          blogs
            .filter((b) => String(b.id) !== String(id))
            .map(async (b) => {
              // const details = await axios.get(`${API_BASE}/blogs/${b.id}`);
                  const details = await axios.get(`${import.meta.env.VITE_API_BASE}/blogs/${b.id}`);

              return {
                ...b,
                image1: details.data.image1,
                excerpt: details.data.rich_text1
                  ? details.data.rich_text1.replace(/<[^>]+>/g, "").slice(0, 90) + "..."
                  : "",
              };
            })
        );
  
        setRelated(withDetails);
      } catch (err) {
        setError("Failed to fetch blog details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);
  

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-4 text-gray-600">Loading blog post...</span>
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  if (!blog) {
    return <div className="text-center mt-20">Blog post not found.</div>;
  }

  return (
    <>
      {/* Google Fonts Link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Inline styles for h1, h2 */}
      <style>{`
        /* Make title always white */
        .blog-detail h1 {
          font-family: 'Bebas Neue', cursive;
          font-weight: 400;
          font-style: normal;
          line-height: 1;
          letter-spacing: 0;
          vertical-align: middle;
          text-transform: uppercase;
          color: #fff;  /* Title color white */
          font-size: 3rem; /* Increased font size for title */
        }

        /* Heading 2 general style */
        .blog-detail h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-style: normal;
          line-height: 1;
          letter-spacing: 0.1px;
          vertical-align: middle;
          color: #615F5C;
          font-size: 1.8rem; /* Adjust as needed */
        }

        /* Black color for specific headings */
        .blog-detail h2.black-heading {
          color: #18171A !important;  /* Override with black color */
        }

        .blog-detail h2.special-heading {
          font-weight: 700;
          color: #615F5C;
        }

        .blog-detail h2 * {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-style: normal;
          letter-spacing: 0.1px;
          color: #615F5C;
        }

        /* Optional: Mistake headings styling */
        .mistake-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
          color: #615F5C;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        /* Conclusion heading small and black */
        .blog-detail .conclusion-heading {
          color: #18171A;
          font-size: 1.2rem;  /* Smaller size */
        }
      `}</style>

      <div className="bg-white text-black blog-detail">
        {/* Hero with main image and title overlay */}
        {blog.image1 && (
          <div className="relative h-[400px] w-full">
            <img
              src={blog.image1}
              alt={blog.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
              {/* Title with white text */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 max-w-3xl">
                {blog.name}
              </h1>
              <div className="text-sm text-gray-200">
                {new Date(blog.date).toLocaleDateString()} • {blog.minute_read} min
                read
              </div>
            </div>
          </div>
        )}

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Section 1 */}
          {blog.rich_text1 && (
            <div
              dangerouslySetInnerHTML={createMarkup(blog.rich_text1)}
            />
          )}
        </article>

                  {(blog.image1 || blog.image2) && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            {blog.image1 && (
              <img
                src={blog.image1}
                alt={blog.name}
                className="w-full h-80 md:h-[430px] object-cover"
              />
            )}
            {blog.image2 && (
              <img
                src={blog.image2}
                alt={blog.name}
                className="w-full h-80 md:h-[430px] object-cover"
              />
            )}
          </div>
        )}

          {/* Section 2 */}
           <article className="max-w-4xl mx-auto px-6 py-12">
          {blog.rich_text2 && (
            <div
              dangerouslySetInnerHTML={createMarkup(blog.rich_text2)}
            />
          )}
          </article>

          {blog.video && (
          <div className="w-full my-10 px-0">
            <video controls className="w-full max-h-[600px] object-cover">
              <source src={blog.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

          {/* Section 3 */}
      <article className="max-w-4xl mx-auto px-6 py-12">
          {blog.rich_text3 && (
            <div
              dangerouslySetInnerHTML={createMarkup(blog.rich_text3)}
            />
          )}

          {/* Conclusion styled */}
          {blog.conclusion && (
            <div className="relative border-l-4 border-red-600 pl-6 py-6 bg-gray-50 rounded-md shadow-sm mb-12">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                <Quote className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="conclusion-heading text-xl font-bold text-gray-900 uppercase mb-3">
                Conclusion
              </h2>
              <div
                dangerouslySetInnerHTML={createMarkup(blog.conclusion)}
              />
            </div>
          )}

          {/* Leave a Comment Section */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 uppercase mb-6">
              Leave a Comment
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="border-b border-gray-300 focus:outline-none focus:border-red-500 pb-2 w-full"
                />
                <input
                  type="email"
                  placeholder="Your E-mail *"
                  required
                  className="border-b border-gray-300 focus:outline-none focus:border-red-500 pb-2 w-full"
                />
              </div>
              <textarea
                placeholder="Your comment *"
                required
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 pb-2"
                rows="4"
              ></textarea>
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" required className="mr-2" />
                I agree that my submitted data is being{" "}
                <a href="#" className="text-red-500 underline ml-1">
                  collected and stored
                </a>
                .
              </label>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition"
              >
                Leave a Comment
              </button>
            </form>
          </div>
        </article>

        {/* Related Blogs Section */}
        {/* {related.length > 0 && (
          <div className="bg-gray-50 py-12 mt-12">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    to={`/blogs/${r.id}`}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                  >
                    <img
                      src={r.image1 || "https://via.placeholder.com/600x400"}
                      alt={r.name}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-bold mb-2 line-clamp-2">
                        {r.name}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {r.minute_read} min read
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )} */}
        {related.length >= 0 && (
          <div className="w-full bg-white py-16 mt-16">
            <div className="max-w-[1360px] mx-auto px-4 relative">
              
        
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={40} // increased spacing between cards
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 34 },
                  1024: { slidesPerView: 4, spaceBetween: 34 },
                }}
                className="pb-12"
              >
                {related.map((r) => (
                  <SwiperSlide key={r.id}>
                    <Link
                      to={`/blogs/${r.id}`}
                      className="flex flex-col w-[300px] h-[380px] bg-white shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      {/* Image */}
                      <div className="w-full h-[224px] bg-gray-100 overflow-hidden">
                        <img
                          src={r.image1 || "https://via.placeholder.com/300x224"}
                          alt={r.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
        
                      {/* Content */}
                      <div className="flex flex-col gap-3 p-2 mt-2">
                        {/* Title */}
                        <h4 className="text-[22px] leading-[28px] font-bold font-['Inter'] uppercase text-[#18171A] line-clamp-2">
                          {r.name}
                        </h4>
        
                        {/* Excerpt */}
                        <p className="text-[15px] leading-[22px] font-normal font-['Inter'] text-[#666] line-clamp-2">
                          {r.excerpt}
                        </p>
        
                        {/* Minute Read */}
                        <span className="text-[15px] font-medium font-['Inter'] text-[#EA0000]">
                          {r.minute_read} min Read
                        </span>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogDetail;
