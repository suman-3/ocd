import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

// Skeleton Components
const SkeletonLine = ({ width = "100%", height = "16px", className = "" }) => (
  <div 
    className={`bg-gray-200 rounded animate-pulse ${className}`}
    style={{ width, height }}
  ></div>
);

const SkeletonImage = ({ height = "200px", className = "" }) => (
  <div 
    className={`bg-gray-200 rounded animate-pulse ${className}`}
    style={{ height }}
  ></div>
);

const BlogDetailSkeleton = () => {
  return (
    <div className="bg-white text-black blog-detail pb-10">
      {/* Hero section skeleton */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full">
        <SkeletonImage height="100%" className="w-full rounded-none" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-300 rounded animate-pulse h-16 sm:h-20 lg:h-24 w-3/4 max-w-4xl mb-4"></div>
          <div className="bg-gray-300 rounded animate-pulse h-4 w-48"></div>
        </div>
      </div>

      {/* Main content skeleton */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content section skeleton */}
        <article className="max-w-4xl mx-auto py-8 sm:py-12">
          <div className="space-y-4">
            <SkeletonLine height="24px" width="90%" />
            <SkeletonLine height="16px" width="100%" />
            <SkeletonLine height="16px" width="95%" />
            <SkeletonLine height="16px" width="85%" />
            <div className="py-4">
              <SkeletonLine height="20px" width="60%" className="mb-3" />
              <SkeletonLine height="16px" width="100%" />
              <SkeletonLine height="16px" width="90%" />
              <SkeletonLine height="16px" width="80%" />
            </div>
            <SkeletonLine height="16px" width="100%" />
            <SkeletonLine height="16px" width="75%" />
          </div>
        </article>

        {/* Images grid skeleton */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-10">
          <SkeletonImage height="320px" className="lg:h-[430px]" />
          <SkeletonImage height="320px" className="lg:h-[430px]" />
        </div>

        {/* More content skeleton */}
        <article className="max-w-4xl mx-auto py-8 sm:py-12">
          <div className="space-y-4">
            <SkeletonLine height="20px" width="70%" />
            <SkeletonLine height="16px" width="100%" />
            <SkeletonLine height="16px" width="95%" />
            <SkeletonLine height="16px" width="88%" />
            <div className="py-4">
              <SkeletonLine height="18px" width="50%" className="mb-3" />
              <SkeletonLine height="16px" width="100%" />
              <SkeletonLine height="16px" width="85%" />
            </div>
          </div>

          {/* Video skeleton */}
          <div className="w-full my-8 sm:my-10">
            <SkeletonImage height="300px" className="sm:h-[400px] rounded-lg" />
          </div>

          {/* More content */}
          <div className="space-y-4 mb-8">
            <SkeletonLine height="16px" width="100%" />
            <SkeletonLine height="16px" width="90%" />
            <SkeletonLine height="16px" width="85%" />
          </div>

          {/* Conclusion skeleton */}
          <div className="relative border-l-4 border-gray-200 pl-4 sm:pl-6 py-4 sm:py-6 bg-gray-50 rounded-md mb-8 sm:mb-12 mt-8">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-200 p-2 rounded-full animate-pulse w-10 h-10"></div>
            <SkeletonLine height="20px" width="40%" className="mb-3" />
            <SkeletonLine height="16px" width="100%" />
            <SkeletonLine height="16px" width="80%" />
          </div>

          {/* Comment form skeleton */}
          <div className="mt-8 sm:mt-12">
            <SkeletonLine height="24px" width="30%" className="mb-6" />
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkeletonLine height="40px" />
                <SkeletonLine height="40px" />
              </div>
              <SkeletonLine height="100px" />
              <div className="flex items-start">
                <div className="bg-gray-200 rounded w-4 h-4 mr-2 mt-1 animate-pulse"></div>
                <SkeletonLine height="16px" width="70%" />
              </div>
              <div className="bg-gray-200 rounded animate-pulse h-12 w-40"></div>
            </div>
          </div>
        </article>
      </div>

      {/* Related blogs skeleton */}
      <div className="w-full py-6 md:py-12">
        <div className="mx-auto px-6 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col bg-white shadow-sm rounded-lg overflow-hidden h-full">
                <SkeletonImage height="224px" className="rounded-none" />
                <div className="flex flex-col gap-3 p-4 sm:p-6 flex-grow">
                  <SkeletonLine height="20px" width="90%" />
                  <SkeletonLine height="16px" width="100%" />
                  <SkeletonLine height="16px" width="80%" />
                  <SkeletonLine height="16px" width="60%" className="mt-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    agreeToTerms: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.comment.trim()) {
      errors.comment = "Comment is required";
    } else if (formData.comment.trim().length < 10) {
      errors.comment = "Comment must be at least 10 characters";
    }

    if (!formData.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the terms";
    }

    return errors;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    console.log("Form submitted with values:", formData);

    // Simulate API call
    try {
      // Add your API call here
      // await axios.post(`${API_BASE}/comments`, { ...formData, blogId: id });
      
      alert("Comment submitted successfully!");
      setFormData({
        name: "",
        email: "",
        comment: "",
        agreeToTerms: false,
      });
      setFormErrors({});
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Failed to submit comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_BASE}/blogs/${id}`);
        setBlog(response.data);

        // fetch ALL blogs
        const rel = await axios.get(`${API_BASE}/blogs`);
        const blogs = rel.data.data || [];

        // fetch details for each blog
        const withDetails = await Promise.all(
          blogs
            .filter((b) => String(b.id) !== String(id))
            .map(async (b) => {
              const details = await axios.get(`${API_BASE}/blogs/${b.id}`);
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

  // Show skeleton loading state
  if (loading) {
    return <BlogDetailSkeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center px-4">
          <div className="text-red-500 text-lg mb-4">⚠️ Something went wrong</div>
          <div className="text-gray-600">{error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center px-4">
          <div className="text-gray-500 text-lg mb-4">📄 Blog post not found</div>
          <Link 
            to="/blogs" 
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Google Fonts Link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Enhanced responsive styles */}
      <style>{`
        .blog-detail h1 {
          font-family: 'Bebas Neue', cursive;
          font-weight: 400;
          font-style: normal;
          line-height: 1.1;
          letter-spacing: 0;
          vertical-align: middle;
          text-transform: uppercase;
          color: #fff;
        }

        .blog-detail h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-style: normal;
          line-height: 1.2;
          letter-spacing: 0.1px;
          vertical-align: middle;
          color: #615F5C;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .blog-detail h2.black-heading {
          color: #18171A !important;
        }

        .blog-detail h2.special-heading {
          font-weight: 700;
          color: #615F5C;
        }

        .mistake-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          color: #615F5C;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .blog-detail .conclusion-heading {
          color: #18171A;
        }

        /* Responsive typography */
        @media (max-width: 768px) {
          .blog-detail h1 {
            font-size: 2.5rem !important;
            line-height: 1.1;
          }
          .blog-detail h2 {
            font-size: 1.5rem;
          }
          .mistake-heading {
            font-size: 1.1rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .blog-detail h1 {
            font-size: 3.5rem !important;
          }
          .blog-detail h2 {
            font-size: 1.7rem;
          }
        }

        @media (min-width: 1025px) {
          .blog-detail h1 {
            font-size: 4rem !important;
          }
          .blog-detail h2 {
            font-size: 1.8rem;
          }
        }

        /* Enhanced swiper styles */
        .swiper-pagination-bullet {
          background: #EA0000 !important;
          opacity: 0.3;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
        }

        /* Form error styles */
        .error-message {
          color: #DC2626;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        .input-error {
          border-color: #DC2626 !important;
        }

        /* Skeleton animation */
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <div className="bg-white text-black blog-detail pb-10">
        {/* Hero section - responsive */}
        {blog.image1 && (
          <div className="relative h-[400px] sm:h-[500px] lg:h-[705px] w-full">
            <img
              src={blog.image1}
              alt={blog.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bebas sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-5xl">
                {blog.name}
              </h1>
              <div className="text-sm sm:text-base text-gray-200">
                {new Date(blog.date).toLocaleDateString()} • {blog.minute_read} min read
              </div>
            </div>
          </div>
        )}

        {/* Main content - responsive container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1 */}
          {blog.rich_text1 && (
            <article className="max-w-4xl mx-auto py-8 sm:py-12 inter">
              <div dangerouslySetInnerHTML={createMarkup(blog.rich_text1)} />
            </article>
          )}

          {/* Images grid - responsive */}
          {(blog.image1 || blog.image2) && (
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-10">
              {blog.image1 && (
                <img
                  src={blog.image1}
                  alt={blog.name}
                  className="w-full h-64 sm:h-80 lg:h-[430px] object-cover rounded-lg"
                />
              )}
              {blog.image2 && (
                <img
                  src={blog.image2}
                  alt={blog.name}
                  className="w-full h-64 sm:h-80 lg:h-[430px] object-cover rounded-lg"
                />
              )}
            </div>
          )}

          {/* Section 2 */}
          {blog.rich_text2 && (
            <article className="max-w-4xl mx-auto py-8 sm:py-12 inter">
              <div dangerouslySetInnerHTML={createMarkup(blog.rich_text2)} />
            </article>
          )}

          {/* Video - responsive */}
          {blog.video && (
            <div className="w-full my-4 sm:my-10">
              <video controls className="w-full max-h-[400px] sm:max-h-[600px] object-cover rounded-lg">
                <source src={blog.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Section 3 */}
          {blog.rich_text3 && (
            <article className="max-w-4xl mx-auto py-8 sm:py-12">
              <div dangerouslySetInnerHTML={createMarkup(blog.rich_text3)} />

              {/* Conclusion */}
              {blog.conclusion && (
                <div className="relative border-l-4 border-red-600 pl-4 sm:pl-6 py-4 sm:py-6 bg-gray-50 rounded-md shadow-sm mb-8 sm:mb-12 mt-8">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <h2 className="conclusion-heading text-lg sm:text-xl font-bold text-gray-900 uppercase mb-3">
                    Conclusion
                  </h2>
                  <div dangerouslySetInnerHTML={createMarkup(blog.conclusion)} />
                </div>
              )}

              {/* Enhanced Comment Form */}
              <div className="mt-8 sm:mt-12">
                <h3 className="text-lg font-bebas tracking-wide sm:text-xl font-bold text-gray-900 uppercase mb-6">
                  Leave a Comment
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6 inter">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name *"
                        className={`border-b border-gray-300 focus:outline-none focus:border-red-500 pb-2 w-full transition-colors ${
                          formErrors.name ? 'input-error' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {formErrors.name && (
                        <div className="error-message">{formErrors.name}</div>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your E-mail *"
                        className={`border-b border-gray-300 focus:outline-none focus:border-red-500 pb-2 w-full transition-colors ${
                          formErrors.email ? 'input-error' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {formErrors.email && (
                        <div className="error-message">{formErrors.email}</div>
                      )}
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      placeholder="Your comment *"
                      className={`w-full border-b border-gray-300 focus:outline-none focus:border-red-500 pb-2 transition-colors ${
                        formErrors.comment ? 'input-error' : ''
                      }`}
                      rows="4"
                      disabled={isSubmitting}
                    />
                    {formErrors.comment && (
                      <div className="error-message">{formErrors.comment}</div>
                    )}
                  </div>
                  <div>
                    <label className="flex inter items-start text-sm text-gray-600">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mr-2 mt-1 flex-shrink-0"
                        disabled={isSubmitting}
                      />
                      <span>
                        I agree that my submitted data is being{" "}
                        <a href="#" className="text-red-500 underline">
                          collected and stored
                        </a>
                        .
                      </span>
                    </label>
                    {formErrors.agreeToTerms && (
                      <div className="error-message">{formErrors.agreeToTerms}</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-red-600 inter hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors"
                  >
                    {isSubmitting ? "Submitting..." : "Leave a Comment"}
                  </button>
                </form>
              </div>
            </article>
          )}
        </div>

        {/* Enhanced Related Blogs Section with Autoplay */}
        {related.length > 0 && (
          <div className="w-full py-6 md:py-12">
            <div className="mx-auto px-6 sm:px-6 lg:px-10">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true 
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { 
                    slidesPerView: 2, 
                    spaceBetween: 24 
                  },
                  1024: { 
                    slidesPerView: 3, 
                    spaceBetween: 32 
                  },
                  1280: { 
                    slidesPerView: 4, 
                    spaceBetween: 34 
                  },
                }}
                className="pb-10"
                loop={related.length > 3}
              >
                {related.map((r) => (
                  <SwiperSlide key={r.id}>
                    <Link
                      to={`/blogs/${r.id}`}
                      className="flex flex-col bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden h-full group"
                    >
                      {/* Image */}
                      <div className="w-full h-48 sm:h-56 bg-gray-100 overflow-hidden">
                        <img
                          src={r.image1 || "https://via.placeholder.com/400x300"}
                          alt={r.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-3 p-4 sm:p-6 flex-grow">
                        {/* Title */}
                        <h4 className="text-lg sm:text-xl lg:text-[22px] leading-tight font-bold font-['Inter'] uppercase text-[#18171A] line-clamp-2 group-hover:text-red-600 transition-colors">
                          {r.name}
                        </h4>

                        {/* Excerpt */}
                        <p className="text-sm sm:text-[15px] leading-relaxed font-normal font-['Inter'] text-[#666] line-clamp-3 flex-grow">
                          {r.excerpt}
                        </p>

                        {/* Minute Read */}
                        <span className="text-sm sm:text-[15px] font-medium font-['Inter'] text-[#EA0000] mt-auto">
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
