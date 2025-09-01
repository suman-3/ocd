import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import logo from "../../../assets/componets-bg/logo.png"; // adjust if path differs

export default function RightPanelBlog({ recent = [], fixURL = (x) => x }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get selected tags from URL params
  const getSelectedTags = () => {
    const tagsParam = searchParams.get('tags');
    return tagsParam ? tagsParam.split(',').map(tag => tag.trim()) : [];
  };

  // Handle tag click
  const handleTagClick = (tag) => {
    const currentTags = getSelectedTags();
    let updatedTags;

    if (currentTags.includes(tag)) {
      // Remove tag if already selected
      updatedTags = currentTags.filter(t => t !== tag);
    } else {
      // Add tag if not selected
      updatedTags = [...currentTags, tag];
    }

    // Update URL search params
    const newSearchParams = new URLSearchParams(searchParams);
    if (updatedTags.length > 0) {
      newSearchParams.set('tags', updatedTags.join(','));
    } else {
      newSearchParams.delete('tags');
    }
    setSearchParams(newSearchParams);
  };

  const selectedTags = getSelectedTags();

  return (
    <div className="space-y-10">
      {/* --- Search --- */}
      <section>
        <h3 className="text-xs font-extrabold uppercase tracking-wide mb-3">
          Search
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search …"
            className="w-full border border-gray-300 rounded-sm pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        </div>
      </section>

      {/* --- Recent Posts --- */}
      <section>
        <h3 className="text-xs font-extrabold uppercase tracking-wide mb-3">
          Recent Posts
        </h3>
        <div className="space-y-5">
          {recent.map((r) => (
            <Link
              key={r.id}
              to={`/blogs/${r.id}`}
              className="flex items-center space-x-4 group"
            >
              {/* thumbnail */}
              <div className="w-[70px] h-[70px] flex-shrink-0 bg-gray-100">
                <img
                  src={fixURL(r.image1) || "https://via.placeholder.com/70"}
                  alt={r.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* text */}
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase font-bold text-gray-900">
                  Standard{" "}
                  <span className="mx-1 text-gray-400">•</span>
                  <span className="text-gray-500">
                    {new Date(r.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h4 className="mt-1 text-[13px] font-extrabold uppercase leading-snug text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                  {r.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- Tags --- */}
      <section>
        <h3 className="text-xs font-extrabold uppercase tracking-wide mb-3">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Cars", "Clean", "dealer", "Detailing", "Drive", "insurance", "Leather",
            "luxury", "News", "Paint", "Parts", "rent", "Rims", "sale", "Soap", "Tint",
            "travel", "Trends",
          ].map((t) => (
            <span
              key={t}
              onClick={() => handleTagClick(t)}
              className={`px-2.5 py-1 text-xs border rounded-sm cursor-pointer transition-all duration-200 ${
                selectedTags.includes(t)
                  ? 'bg-black text-white border-black'
                  : 'border-gray-300 hover:bg-black hover:text-white'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        
        {/* Show selected tags count */}
        {selectedTags.length > 0 && (
          <div className="mt-3 text-xs text-gray-600">
            <span className="font-medium">{selectedTags.length} tag{selectedTags.length !== 1 ? 's' : ''} selected:</span>
            <span className="ml-1">{selectedTags.join(', ')}</span>
          </div>
        )}
      </section>

      {/* --- OCD Logo --- */}
      <section className="bg-gray-100 border border-gray-200 rounded p-4">
        <div className="bg-black border border-gray-300 flex items-center justify-center">
          <img
            src={logo}
            alt="OCD Detail"
            className="max-w-[250px] h-auto object-contain"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
      </section>
    </div>
  );
}
