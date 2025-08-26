// import React from "react";
// import { Link } from "react-router-dom";
// import logo from '../../../assets/componets-bg/logo.png'

// export default function RightPanelBlog({ recent = [], fixURL = (x) => x }) {
//   return (
//     <div className="space-y-6">
//       {/* Search */}
//       <section className="bg-gray-100 border border-gray-200 rounded-lg p-6 shadow-sm">
//         <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">SEARCH</h3>
//         <input
//           type="text"
//           placeholder="Search…"
//           className="w-full border border-gray-300 bg-white rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
//         />
//       </section>

//       {/* Recent posts */}
//       <section className="bg-gray-100 border border-gray-200 rounded-lg p-6 shadow-sm">
//         <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">RECENT POSTS</h3>
//         <div className="space-y-4">
//           {recent.map((p) => (
//             <div key={p.id} className="flex gap-3">
//               <img
//                 src={
//                   p.image1
//                     ? fixURL(p.image1)
//                     : "https://via.placeholder.com/100x70?text=Img"
//                 }
//                 alt={p.name}
//                 className="w-[82px] h-[62px] object-cover rounded border border-gray-300"
//                 onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/100x70?text=Img")}
//               />
//               <div>
//                 <Link
//                   to={`/blogs/${p.id}`}
//                   className="text-[13px] font-semibold leading-snug hover:text-red-600"
//                 >
//                   {p.name}
//                 </Link>
//                 <div className="text-[11px] text-gray-500 mt-1">
//                   {new Date(p.date).toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "short",
//                     day: "numeric",
//                   })}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Tags */}
//       <section className="bg-gray-100 border border-gray-200 rounded-lg p-6 shadow-sm">
//         <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">TAGS</h3>
//         <div className="flex flex-wrap gap-2">
//           {["Cars", "Clean", "Detailing", "Engine", "Interior", "Leather", "Tips", "Fluid", "Paints", "Wax"].map(
//             (t) => (
//               <span
//                 key={t}
//                 className="text-[12px] bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 cursor-pointer"
//               >
//                 {t}
//               </span>
//             )
//           )}
//         </div>
//       </section>

//       {/* OCD block / logo */}
// <section className="bg-gray-100 border border-gray-200 rounded-lg p-6 shadow-sm text-sm">
//   <div className="bg-black flex items-center justify-center p-4 rounded">
//     <img
//       src={logo}
//       alt="OCD Detail"
//       className="max-w-[200px] h-auto object-contain"
//       onError={(e) => (e.currentTarget.style.display = "none")}
//     />
//   </div>
// </section>

//     </div>
//   );
// }


// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../../assets/logo/logo.png";

// export default function RightPanelBlog({ recent = [], fixURL = (x) => x }) {
//   return (
//     <div className="space-y-8">
//       {/* Search */}
//       <section className="border border-gray-200 rounded-lg p-5 shadow-sm">
//         <h3 className="font-bold uppercase text-sm mb-3">Search</h3>
//         <input
//           type="text"
//           placeholder="Search…"
//           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-500"
//         />
//       </section>

//       {/* Recent posts */}
//       <section className="border border-gray-200 rounded-lg p-5 shadow-sm">
//         <h3 className="font-bold uppercase text-sm mb-4">Recent Posts</h3>
//         <div className="space-y-4">
//           {recent.map((r) => (
//             <div key={r.id} className="flex space-x-3">
//               <img
//                 src={r.image1 || "https://via.placeholder.com/80"}
//                 alt={r.name}
//                 className="w-16 h-16 object-cover border rounded"
//               />
//               <div>
//                 <Link
//                   to={`/blogs/${r.id}`}
//                   className="font-semibold text-sm hover:text-red-600 line-clamp-2"
//                 >
//                   {r.name}
//                 </Link>
//                 <div className="text-xs text-gray-500">
//                   {new Date(r.date).toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "short",
//                     day: "numeric",
//                   })}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Tags */}
//       <section className="border border-gray-200 rounded-lg p-5 shadow-sm">
//         <h3 className="font-bold uppercase text-sm mb-3">Tags</h3>
//         <div className="flex flex-wrap gap-2">
//           {["Cars", "Clean", "Detailing", "Engine", "Interior", "Leather", "Tips", "Fluid", "Paints", "Wax"].map(
//             (t) => (
//               <span
//                 key={t}
//                 className="px-3 py-1 border text-xs rounded cursor-pointer hover:bg-black hover:text-white transition"
//               >
//                 {t}
//               </span>
//             )
//           )}
//         </div>
//       </section>

//       {/* OCD logo block */}
//       <section className="border border-gray-200 rounded-lg p-4 shadow-sm bg-black flex justify-center">
//         <img
//           src={logo}
//           alt="OCD Detail"
//           className="max-w-[200px] object-contain"
//           onError={(e) => (e.currentTarget.style.display = "none")}
//         />
//       </section>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import logo from "../../../assets/componets-bg/logo.png"; // adjust if path differs

export default function RightPanelBlog({ recent = [], fixURL = (x) => x }) {
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
            "Cars","Clean","dealer","Detailing","Drive","insurance","Leather",
            "luxury","News","Paint","Parts","rent","Rims","sale","Soap","Tint",
            "travel","Trends",
          ].map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs border border-gray-300 rounded-sm hover:bg-black hover:text-white cursor-pointer"
            >
              {t}
            </span>
          ))}
        </div>
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
