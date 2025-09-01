import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import RightPanelBlog from "../components/common/BlogSection/RightPanelBlog";
import FloatingContactButtons from "./FloatingContactButtons";

//  name: "",
//     minute_read: 5,
//     date: new Date().toISOString().split("T")[0],
//     rich_text1: "",
//     image1: "",
//     image2: "",
//     image3: "",
//     rich_text2: "",
//     video: "",
//     tags: [],
//     rich_text3: "",
//     conclusion: "",

function makeExcerpt(html = "", wordCount = 14) {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return "";
  const words = text.split(" ");
  return (
    words.slice(0, wordCount).join(" ") + (words.length > wordCount ? "…" : "")
  );
}

// Add this helper function for URL fixing
const fixURL = (url) => {
  if (!url) return "";
  return url.startsWith("http") ? url : `${API_BASE}${url}`;
};

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://ocd-deploy.onrender.com";

// Enhanced skeleton component
const BlogSkeleton = () => (
  <article className="flex flex-col sm:flex-row bg-white border border-gray-200 overflow-hidden h-auto sm:h-[310px] w-full animate-pulse">
    {/* Image skeleton */}
    <div className="w-full sm:w-[393px] h-[200px] sm:h-[310px] flex-shrink-0 bg-gray-300"></div>

    {/* Content skeleton */}
    <div className="flex-1 p-4 sm:p-8 flex flex-col space-y-3">
      {/* Tag skeleton */}
      <div className="w-20 h-6 bg-gray-300 rounded"></div>

      {/* Title skeleton */}
      <div className="space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      </div>

      {/* Excerpt skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>

      {/* Meta skeleton */}
      <div className="mt-auto pt-4">
        <div className="w-14 h-[1px] bg-gray-300 mb-2"></div>
        <div className="flex items-center space-x-2">
          <div className="w-16 h-3 bg-gray-200 rounded"></div>
          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
          <div className="w-20 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  </article>
);

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get selected tags from URL params
  const getSelectedTags = () => {
    const tagsParam = searchParams.get("tags");
    return tagsParam ? tagsParam.split(",").map((tag) => tag.trim()) : [];
  };

  // Get page from URL params
  const getPageFromUrl = () => {
    const pageParam = searchParams.get("page");
    return pageParam ? parseInt(pageParam, 10) : 1;
  };

  // Update page state when URL changes
  useEffect(() => {
    const urlPage = getPageFromUrl();
    if (urlPage !== page) {
      setPage(urlPage);
    }
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);

      try {
        const currentTags = getSelectedTags();
        const currentPage = getPageFromUrl();

        let apiUrl = `${API_BASE}/blogs?page=${currentPage}&limit=5`;

        if (currentTags.length > 0) {
          apiUrl += `&tags=${encodeURIComponent(currentTags.join(","))}`;
        }

        console.log("Fetching blogs with URL:", apiUrl);
        console.log("Selected tags:", currentTags);

        const list = await axios.get(apiUrl);
        const items = list.data?.data || [];

        // Fix: Use 'pages' instead of 'totalPages' based on your API response
        setTotalPages(list.data?.pages || 1);

        const withImages = await Promise.all(
          items.map(async (b) => {
            try {
              const d = await axios.get(`${API_BASE}/blogs/${b.id}`);
              return {
                ...b,
                image1: d.data?.image1,
                rich_text1: d.data?.rich_text1,
              };
            } catch {
              return {
                ...b,
                image1: b.image1 || "", // Use the image from the list if detail fetch fails
                rich_text1: "",
              };
            }
          })
        );

        setBlogs(withImages);
      } catch (e) {
        console.error("Error fetching blogs:", e);
        setError("Failed to fetch blogs.");
      } finally {
        setLoading(false);
      }
    })();
  }, [searchParams]);

  // Handle pagination with URL update
  const handlePageChange = (newPage) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newPage === 1) {
      newSearchParams.delete("page");
    } else {
      newSearchParams.set("page", newPage.toString());
    }

    setSearchParams(newSearchParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Clear all filters
  const clearAllFilters = () => {
    const newSearchParams = new URLSearchParams();
    setSearchParams(newSearchParams);
  };

  const selectedTags = getSelectedTags();

  // Enhanced loading state with skeleton
  if (loading) {
    return (
      <div className="bg-white text-black min-h-screen">
        <FloatingContactButtons />

        {/* Page header */}
        <div className="bg-black text-white py-8 sm:py-12 text-center">
          <div className="animate-pulse">
            <div className="h-8 sm:h-12 bg-gray-700 rounded-md w-48 mx-auto"></div>
          </div>
        </div>

        {/* Content + Sidebar */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6 sm:gap-10 items-start">
          {/* Blog Cards Skeleton */}
          <div className="space-y-6 sm:space-y-12">
            {Array.from({ length: 5 }).map((_, index) => (
              <BlogSkeleton key={index} />
            ))}
          </div>

          {/* Sidebar Skeleton */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
          </aside>
        </div>
      </div>
    );
  }

  if (error)
    return (
      <div className="bg-white min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-red-500 text-lg mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );

  return (
    <div className="bg-white text-black min-h-screen">
      <FloatingContactButtons />

      {/* Page header */}
      <div className="bg-black text-white py-6 sm:py-12 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide font-bebas">
          Blog List
        </h1>
      </div>

      {/* Content + Sidebar */}
      <div className="mx-auto px-4 md:px-10 py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6 sm:gap-10 items-start">
        {/* Blog Cards */}
        <div className="space-y-6 sm:space-y-12">
          {blogs.length === 0 ? (
            <div className="text-center py-16 text-gray-600">
              {selectedTags.length > 0 ? (
                <>
                  <p className="text-lg mb-4">
                    No blogs found for the selected tags.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    Clear filters to see all blogs
                  </button>
                </>
              ) : (
                <p className="text-lg">No blogs found.</p>
              )}
            </div>
          ) : (
            blogs.map((b) => (
              <article
                key={b.id}
                className="flex flex-col sm:flex-row bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 h-auto sm:h-[310px] w-full"
              >
                {/* Image */}
                <div className="w-full sm:w-[393px] h-[200px] sm:h-[310px] flex-shrink-0 overflow-hidden">
                  <img
                    src={
                      fixURL(b.image1) ||
                      "https://via.placeholder.com/600x400?text=Blog+Image"
                    }
                    alt={b.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-8 flex flex-col">
                  {/* TAG */}
                  <span className="inline-block bg-red-600 text-white text-[10px] sm:text-[12px] font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-md mb-2 sm:mb-3 uppercase w-fit">
                    Body Shop
                  </span>

                  {/* TITLE */}
                  <Link to={`/blogs/${b.id}`}>
                    <h2 className="font-bebas text-[20px] sm:text-[26px] leading-[24px] sm:leading-[32px] uppercase text-[#18171A] hover:text-red-600 transition mb-2 sm:mb-3 line-clamp-2">
                      {b.name}
                    </h2>
                  </Link>

                  {/* EXCERPT */}
                  <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#615F5C] tracking-[0.1px] mb-4 sm:mb-6 flex-1 line-clamp-3">
                    {makeExcerpt(b.rich_text1, isMobile ? 12 : 16)}
                  </p>

                  {/* Divider + Meta */}
                  <div className="mt-auto">
                    <div className="w-10 sm:w-14 h-[1px] bg-[#18171A] mb-2"></div>
                    <div className="flex items-center text-[11px] sm:text-[13px] text-[#949087] flex-wrap gap-1 sm:gap-0">
                      <span>
                        {new Date(b.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="mx-2 sm:mx-3 w-[2px] sm:w-[3px] h-[2px] sm:h-[3px] bg-[#949087] rounded-full inline-block" />
                      <span>{b.minute_read || 0} min read</span>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}

          {/* Enhanced Mobile-Friendly Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-1 sm:gap-2 pt-6 sm:pt-8 px-4">
              <button
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
                className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] border border-gray-300 flex items-center justify-center font-bebas text-base sm:text-lg disabled:opacity-40 hover:bg-black hover:text-white transition-colors duration-200"
                aria-label="Previous page"
              >
                ←
              </button>

              {/* Mobile: Show only current page and nearby pages */}
              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-[200px] sm:max-w-none">
                {[...Array(totalPages)].map((_, i) => {
                  // On mobile, show current page and 2 pages on each side
                  const pageNumber = i + 1;
                  const showOnMobile =
                    !isMobile ||
                    (pageNumber >= page - 1 && pageNumber <= page + 1);

                  if (!showOnMobile) return null;

                  return (
                    <button
                      key={i}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex items-center justify-center font-bebas text-base sm:text-lg border transition-colors duration-200 ${
                        page === pageNumber
                          ? "bg-black text-white border-black"
                          : "border-gray-300 text-black hover:bg-black hover:text-white"
                      }`}
                      aria-label={`Page ${pageNumber}`}
                      aria-current={page === pageNumber ? "page" : undefined}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
                className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] border border-gray-300 flex items-center justify-center font-bebas text-base sm:text-lg disabled:opacity-40 hover:bg-black hover:text-white transition-colors duration-200"
                aria-label="Next page"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Sidebar - Hidden on mobile, shown on lg+ */}
        <aside className="hidden lg:block lg:sticky lg:top-24 self-start">
          <RightPanelBlog recent={blogs.slice(0, 2)} fixURL={fixURL} />
        </aside>
      </div>

      {/* Mobile Sidebar - Show at bottom on mobile */}
      <div className="lg:hidden px-4 pb-8">
        <RightPanelBlog recent={blogs.slice(0, 2)} fixURL={fixURL} />
      </div>
    </div>
  );
}
