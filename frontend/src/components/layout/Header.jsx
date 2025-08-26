import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const tabs = [
  { label: "Home", path: "/" },
  {
    label: "Our Services",
    href: "#ServicesSection",
    isAnchor: true,
  },
  { label: "Testimonials", href: "#testimonials", isAnchor: true },
  { label: "About Us", href: "#AboutUs", isAnchor: true },
  { label: "Blogs", href: "#Blogs", isAnchor: true },
  { label: "Contact Us", href: "#ContactSection", isAnchor: true },
];

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const headerClasses = isHomePage
    ? "absolute top-0 left-0 right-0 z-50 text-white h-20 px-6 flex items-center justify-between bg-transparent"
    : "bg-black text-white py-8 px-4 flex items-center justify-between border-b border-gray-700";

  return (
    <header className={headerClasses}>
      {/* Logo */}
      <div className="w-1/4 flex justify-start items-center mt-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-16 h-auto" />
        </Link>
      </div>

      {/* Navigation Tabs */}
      <nav className="w-3/4 flex justify-end items-center">
        <ul className="flex gap-8 text-[15px] tracking-wide font-medium relative inter">
          {tabs.map((tab) => (
            <li key={tab.label} className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors duration-200">
                {tab.isAnchor ? (
                  <a
                    href={tab.href || "#"}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = tab.href.replace("#", "");
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className=""
                  >
                    {tab.label}
                  </a>
                ) : (
                  <Link to={tab.path || "#"}>{tab.label}</Link>
                )}
                {tab.subItems && (
                  <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                    ▼
                  </span>
                )}
              </div>

              {/* Dropdown */}
              {tab.subItems && (
                <ul className="absolute left-0 top-full mt-2 bg-white text-black shadow-xl rounded-md border border-gray-200 w-60 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  {tab.subItems.map((item) => (
                    <li
                      key={item.label}
                      className="border-b last:border-b-0 border-gray-100"
                    >
                      <Link
                        to={item.path}
                        className="block px-3 py-2 hover:bg-yellow-100 hover:text-yellow-600 transition-all duration-150 text-sm"
                      >
                        {item.label.trim()}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
