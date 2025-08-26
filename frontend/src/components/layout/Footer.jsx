/**
 * Footer Layout Co                          <div className="flex flex-col gap-4">
                <h2 className=" text-xl font-bold tracking-[0.2 rem]   ">ABOUT OCD DETAIL STUDIO</h2>
                <p>We're not just a detailing brand, we're a community of perfectionists.</p>
                <br />
                <p>From ceramic coatings to PPF, from superbikes to supercars, we protect what you love to drive.</p>
            </div> <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold tracking-[0.3rem]">ABOUT OCD DETAIL STUDIO</h2>
                <p>We're not just a detailing brand, we're a community of perfectionists.</p>
                <p>From ceramic coatings to PPF, from superbikes to supercars, we protect what you love to drive.</p>
            </div>
            <div>
                <h2 className="font-bold text-lg tracking-[0.25rem]">LET'S TALK DETAILING</h2>v className="flex flex-col gap-4">
                <h2 className="font-bold text-lg tracking-wider  letter-spacing:0.2rem ">ABOUT OCD DETAIL STUDIO</h2>
                <p>
                  We're not just a detailing brand, we're a community of perfectionists.
                  <br />
                  <br />
                  From ceramic coatings to PPF, from superbikes to supercars, we protect what you love to drive.
                </p>
            </div>nt
 * 
 * Purpose: Application footer with links and company information
 * 
 * Features to implement:
 * - Company/brand information
 * - Footer links (Privacy, Terms, Contact, etc.)
 * - Social media links
 * - Copyright notice
 * - Newsletter signup (optional)
 * - Multi-column layout for large footers
 * 
 * Usage: <Footer />
 */
import { Button } from "../ui";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-app-gray text-app-white">
      {/* Main Footer Content */}
      <div className="py-20 px-8 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* About Section */}
        <div className="flex flex-col gap-6 items-start">
          <h2 className="text-[20px] font-bold tracking-wider font-bebas uppercase">
            ABOUT OCD DETAIL STUDIO
          </h2>
          <p className="text-[15px] font-thin leading-relaxed">
            We’re not just a detailing brand, We’re a community of Perfectionist.
          </p>
          <p className="text-[15px] font-thin leading-relaxed">
            From ceramic coatings to PPF, from superbikes to supercars, we protect what you love to drive.
          </p>

          <div className="mt-8">
            <h3 className="text-[17px] font-bold font-bebas tracking-wider mb-4 uppercase">
              LET’S TALK DETAILING
            </h3>
            <a
              href="https://wa.me/9198XXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-custom-red px-5 py-2 rounded-md shadow-lg text-white font-bebas text-[15px] hover:scale-105 transition"
            >
              WHATSAPP NOW <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* Studio Locations */}
        <div className="flex flex-col gap-6 items-start">
          <h2 className="text-[20px] font-bold tracking-wider font-bebas uppercase">
            STUDIO LOCATIONS
          </h2>
          <div>
            <h3 className="text-[15px] font-bold tracking-wider font-bebas mb-1 uppercase">Mumbai</h3>
            <p className="text-[14px] font-thin leading-relaxed">
              1121, Shramik Society, Adarsh Nagar,<br />
              Jogeshwari West, Mumbai,<br />
              Maharashtra 400102
            </p>
          </div>
          <div>
            <h3 className="text-[15px] font-bold tracking-wider font-bebas mb-1 uppercase">Gurgaon</h3>
            <p className="text-[14px] font-thin leading-relaxed">
              Main CRPF Camp Road, Sector 61,<br />
              Village Ulahavas, Opp. IOC Petrol Pump,<br />
              Gurgaon, Haryana
            </p>
          </div>
          <div>
            <h3 className="text-[15px] font-bold tracking-wider font-bebas mb-1 uppercase">Thane</h3>
            <p className="text-[14px] font-thin leading-relaxed">
              Kothari Compound, Neelkanth Grns Rd,<br />
              Opp. Baccha Party, Manpada,<br />
              Thane West, Maharashtra 400607
            </p>
          </div>
        </div>

        {/* Connect With Us */}
        <div className="flex flex-col gap-5 items-start md:items-center">
          <h2 className="text-[20px] font-bold tracking-wider font-bebas uppercase">
            CONNECT WITH US
          </h2>
          <div className="flex flex-col gap-3 text-[15px] font-thin">
            <a href="#" className="flex items-center gap-3 hover:underline">
              <FaFacebookF /> Facebook
            </a>
            <a href="#" className="flex items-center gap-3 hover:underline">
              <FaYoutube /> Youtube
            </a>
            <a href="#" className="flex items-center gap-3 hover:underline">
              <FaInstagram /> Instagram
            </a>
          </div>
          <div className="mt-4 text-[14px] font-thin">
            <a href="mailto:hello@ocddetailstudio.com" className="underline">
              hello@ocddetailstudio.com
            </a>
            <p className="mt-1">+91-98XXXXXXX</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-500 py-5 px-8 md:px-16 lg:px-32 flex flex-col md:flex-row justify-between text-[13px] font-thin tracking-wide">
        <p>© 2025 OCD Detail Studio. All rights reserved.</p>
        <p>Powered by Precision. Fueled by Passion.</p>
      </div>
    </footer>
  );
};

export default Footer;
