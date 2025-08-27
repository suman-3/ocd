import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-app-gray text-app-white">
      {/* Main Footer Content */}
      <div className="py-12 sm:py-16 lg:py-20 px-6 sm:px-6 lg:px-10 2xl:px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 2xl:max-w-screen-2xl mx-auto">
        
        {/* About Section */}
        <div className="flex flex-col gap-4 sm:gap-6 items-start">
          <h2 className="text-lg sm:text-xl lg:text-[20px] font-bold tracking-wider font-bebas uppercase">
            ABOUT OCD DETAIL STUDIO
          </h2>
          <p className="text-sm sm:text-[15px] 2xl:text-[16px] font-thin leading-relaxed inter">
            We're not just a detailing brand, We're a community of
            Perfectionist.
          </p>
          <p className="text-sm sm:text-[15px] 2xl:text-[16px] font-thin leading-relaxed inter">
            From ceramic coatings to PPF, from superbikes to supercars, we
            protect what you love to drive.
          </p>

          <div className="mt-6 sm:mt-8">
            <h3 className="text-base sm:text-[17px] font-bold font-bebas tracking-wider mb-3 sm:mb-4 uppercase">
              LET'S TALK DETAILING
            </h3>
            <a
              href="https://wa.me/919818122723"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-custom-red px-4 sm:px-5 py-2 rounded-md shadow-lg text-white font-bebas text-sm sm:text-[15px] hover:scale-105 transition-transform duration-200"
            >
              WHATSAPP NOW <FaWhatsapp size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          </div>
        </div>

        {/* Studio Locations */}
        <div className="flex flex-col gap-4 sm:gap-6 items-start">
          <h2 className="text-lg sm:text-xl lg:text-[20px] font-bold tracking-wider font-bebas uppercase">
            STUDIO LOCATIONS
          </h2>
          
          {/* Mumbai */}
          <div>
            <h3 className="text-sm sm:text-[15px] 2xl:text-[17px] font-bold tracking-widest font-bebas mb-1 uppercase">
              Mumbai
            </h3>
            <p className="text-xs sm:text-[14px] 2xl:text-[16px] font-thin leading-relaxed inter">
              1121, Shramik Society, Adarsh Nagar,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Jogeshwari West, Mumbai,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Maharashtra 400102
            </p>
          </div>
          
          {/* Gurgaon */}
          <div>
            <h3 className="text-sm sm:text-[15px] 2xl:text-[17px] font-bold tracking-widest font-bebas mb-1 uppercase">
              Gurgaon
            </h3>
            <p className="text-xs sm:text-[14px] 2xl:text-[16px] font-thin leading-relaxed inter">
              Main CRPF Camp Road, Sector 61,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Village Ulahavas, Opp. IOC Petrol Pump,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Gurgaon, Haryana
            </p>
          </div>
          
          {/* Thane */}
          <div>
            <h3 className="text-sm sm:text-[15px] 2xl:text-[17px] font-bold tracking-widest font-bebas mb-1 uppercase">
              Thane
            </h3>
            <p className="text-xs sm:text-[14px] 2xl:text-[16px] font-thin leading-relaxed inter">
              Kothari Compound, Neelkanth Grns Rd,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Opp. Baccha Party, Manpada,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Thane West, Maharashtra 400607
            </p>
          </div>
        </div>

        {/* Connect With Us */}
        <div className="flex flex-col gap-4 sm:gap-5 items-start md:items-start lg:items-center md:col-span-2 lg:col-span-1">
          <h2 className="text-lg sm:text-xl lg:text-[20px] font-bold tracking-widest font-bebas uppercase">
            CONNECT WITH US
          </h2>
          
          {/* Social Links */}
          <div className="flex flex-col gap-3 text-sm sm:text-[15px] 2xl:text-lg font-thin">
            <a
              href="https://www.facebook.com/share/1G6D4LXA4C/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline hover:text-custom-red transition-colors duration-200 inter"
            >
              <FaFacebookF className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> Facebook
            </a>
            <a
              href="https://youtube.com/@ocddetailstudiogurgaon?si=Hm-ktnUTAi_wpR5C"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline hover:text-custom-red transition-colors duration-200 inter"
            >
              <FaYoutube className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> Youtube
            </a>
            <a
              href="https://www.instagram.com/ocddetailstudiogurgaon?igsh=MW5uaWJ3NGpxdmR4Mw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline hover:text-custom-red transition-colors duration-200 inter"
            >
              <FaInstagram className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> Instagram
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="mt-3 sm:mt-4 text-xs sm:text-[14px] 2xl:text-lg font-thin inter">
            <a 
              href="mailto:hello@ocddetailstudio.com" 
              className="underline hover:text-custom-red transition-colors duration-200 break-all sm:break-normal"
            >
              hello@ocddetailstudio.com
            </a>
            <p
              onClick={() => window.open("tel:+919818122723")}
              className="mt-1 cursor-pointer hover:text-custom-red transition-colors duration-200"
            >
              +91-9818122723
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-500 py-4 sm:py-5 px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 sm:gap-0 text-xs sm:text-[13px] font-thin tracking-wide">
        <p className="inter text-center sm:text-left">© 2025 OCD Detail Studio. All rights reserved.</p>
        <p className="inter text-center sm:text-right">Powered by Precision. Fueled by Passion.</p>
      </div>
    </footer>
  );
};

export default Footer;
