import React, { useState, useEffect } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const headerClasses = isHomePage
    ? "absolute top-0 left-0 right-0 z-50 text-white h-20 px-6 2xl:px-14 flex items-center justify-between bg-transparent"
    : "bg-black text-white py-8 px-4 flex items-center justify-between border-b border-gray-700";

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleAnchorClick = (href) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={headerClasses}>
        {/* Logo */}
        <div className="flex items-center mt-2 md:mt-5">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 md:h-20 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center space-x-8">
          {tabs.map((tab) => (
            <div key={tab.label} className="relative group">
              <div>
                {tab.isAnchor ? (
                  <a
                    href={tab.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAnchorClick(tab.href);
                    }}
                    className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                  >
                    {tab.label}
                  </a>
                ) : (
                  <Link
                    to={tab.path}
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    {tab.label}
                  </Link>
                )}
                {tab.subItems && (
                  <span className="ml-1 text-xs">▼</span>
                )}
              </div>

              {/* Dropdown */}
              {tab.subItems && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {tab.subItems.map((item) => (
                    <div key={item.label} className="p-3 hover:bg-gray-100">
                      <Link to={item.path} className="block">
                        {item.label.trim()}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden mobile-menu-button z-50 relative"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"></div>
      )}

      {/* Mobile Menu Slider */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden mobile-menu ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-700">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <h1 className="text-3xl font-bebas tracking-wide">OCD STUDIO</h1>
        </div>

        {/* Mobile Menu Items */}
        <nav className="flex flex-col p-6 space-y-4">
          {tabs.map((tab) => (
            <div key={tab.label}>
              {tab.isAnchor ? (
                <a
                  href={tab.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick(tab.href);
                  }}
                  className="block py-3 px-4 text-lg hover:bg-gray-800 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  {tab.label}
                </a>
              ) : (
                <Link
                  to={tab.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-lg hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  {tab.label}
                </Link>
              )}

              {/* Mobile Dropdown Items */}
              {tab.subItems && (
                <div className="ml-4 mt-2 space-y-2">
                  {tab.subItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-4 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                    >
                      {item.label.trim()}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;