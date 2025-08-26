import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RightPanelBlog from "../components/common/BlogSection/RightPanelBlog";
import FloatingContactButtons from "./FloatingContactButtons";

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


const API_BASE =
  import.meta.env.VITE_API_BASE || "https://ocd-deploy.onrender.com";
const fixURL = (u) => (u ? u.replace("http://localhost:4000", API_BASE) : "");

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        // const list = await axios.get(`${API_BASE}/blogs?page=${page}&limit=5`);
        const list = await axios.get(`${API_BASE}/blogs?page=${page}&limit=5`);
        const items = list.data?.data || [];
        setTotalPages(list.data?.totalPages || 1);

        const withImages = await Promise.all(
          items.map(async (b) => {
            try {
              const d = await axios.get(`${API_BASE}/blogs/${b.id}`);
              return {
                ...b,
                image1: fixURL(d.data?.image1),
                rich_text1: d.data.rich_text1,
              };
            } catch {
              return { ...b, image1: "" };
            }
          })
        );

        setBlogs(withImages);
      } catch (e) {
        setError("Failed to fetch blogs.");
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-4 text-gray-600">Loading blogs…</span>
      </div>
    );
  }

  if (error)
    return <div className="py-16 text-center text-red-500">{error}</div>;

  return (
    <div className="bg-white text-black min-h-screen">
      <FloatingContactButtons />

      {/* Page header */}
      <div className="bg-black text-white py-12 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-wide">
          Blog List
        </h1>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10 items-start">
        {/* Blog Cards */}
        <div className="space-y-12">
          {blogs.map((b) => (
            <article
              key={b.id}
              className="flex flex-col sm:flex-row bg-white border border-gray-200 overflow-hidden h-[310px] w-full"
            >
              {/* Image */}
              <div className="w-full sm:w-[393px] h-[310px] flex-shrink-0">
                <img
                  src={
                    b.image1 ||
                    "https://via.placeholder.com/600x400?text=Blog+Image"
                  }
                  alt={b.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col">
                {/* TAG */}
                <span className="inline-block bg-red-600 text-white text-[12px] font-semibold px-4 py-2 rounded-md mb-3 uppercase w-fit">
                  Body Shop
                </span>

                {/* TITLE */}
                <Link to={`/blogs/${b.id}`}>
                  <h2 className="font-bebas text-[26px] leading-[32px] uppercase text-[#18171A] hover:text-red-600 transition mb-3">
                    {b.name}
                  </h2>
                </Link>

                {/* EXCERPT */}
                <p className="text-[16px] leading-[26px] text-[#615F5C] tracking-[0.1px] mb-6">
                  {makeExcerpt(b.rich_text1, 16)}
                </p>

                {/* Divider + Meta */}
                <div className="mt-auto">
                  <div className="w-14 h-[1px] bg-[#18171A] mb-2"></div>
                  <div className="flex items-center text-[13px] text-[#949087]">
                    <span>
                      {new Date(b.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="mx-3 w-[3px] h-[3px] bg-[#949087] rounded-full inline-block" />
                    <span>
                      {b.commentsCount ?? 0}{" "}
                      {Number(b.commentsCount ?? 0) === 1
                        ? "Comment"
                        : "Comments"}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 pt-8">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="w-[50px] h-[50px] border border-gray-300 flex items-center justify-center font-bebas text-lg disabled:opacity-40 hover:bg-black hover:text-white"
            >
              ←
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-[50px] h-[50px] flex items-center justify-center font-bebas text-lg border ${
                  page === i + 1
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-black hover:bg-black hover:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="w-[50px] h-[50px] border border-gray-300 flex items-center justify-center font-bebas text-lg disabled:opacity-40 hover:bg-black hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 self-start">
          <RightPanelBlog recent={blogs.slice(0, 2)} fixURL={fixURL} />
        </aside>
      </div>
    </div>
  );
}
