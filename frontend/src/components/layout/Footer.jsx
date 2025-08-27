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
      <div className="py-20 px-10 2xl:px-2 grid grid-cols-1 md:grid-cols-3 gap-16 2xl:max-w-screen-2xl mx-auto">
        {/* About Section */}
        <div className="flex flex-col gap-6 items-start">
          <h2 className="text-[20px] font-bold tracking-wider font-bebas uppercase">
            ABOUT OCD DETAIL STUDIO
          </h2>
          <p className="text-[15px] 2xl:text-[16px] font-thin leading-relaxed inter">
            We’re not just a detailing brand, We’re a community of
            Perfectionist.
          </p>
          <p className="text-[15px] 2xl:text-[16px] font-thin leading-relaxed inter">
            From ceramic coatings to PPF, from superbikes to supercars, we
            protect what you love to drive.
          </p>

          <div className="mt-8">
            <h3 className="text-[17px] font-bold font-bebas tracking-wider mb-4 uppercase">
              LET’S TALK DETAILING
            </h3>
            <a
              href="https://wa.me/919818122723"
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
            <h3 className="text-[15px] 2xl:text-[17px] font-bold tracking-widest font-bebas mb-1 uppercase">
              Mumbai
            </h3>
            <p className="text-[14px] 2xl:text-[16px] font-thin leading-relaxed inter">
              1121, Shramik Society, Adarsh Nagar,
              <br />
              Jogeshwari West, Mumbai,
              <br />
              Maharashtra 400102
            </p>
          </div>
          <div>
            <h3 className="text-[15px] 2xl:text-[17px] font-bold tracking-widest font-bebas mb-1 uppercase">
              Gurgaon
            </h3>
            <p className="text-[14px] 2xl:text-[16px] font-thin leading-relaxed inter">
              Main CRPF Camp Road, Sector 61,
              <br />
              Village Ulahavas, Opp. IOC Petrol Pump,
              <br />
              Gurgaon, Haryana
            </p>
          </div>
          <div>
            <h3 className="text-[15px] 2xl:text-[17px] font-bold tracking-widest font-bebas mb-1 uppercase">
              Thane
            </h3>
            <p className="text-[14px] 2xl:text-[16px] font-thin leading-relaxed inter">
              Kothari Compound, Neelkanth Grns Rd,
              <br />
              Opp. Baccha Party, Manpada,
              <br />
              Thane West, Maharashtra 400607
            </p>
          </div>
        </div>

        {/* Connect With Us */}
        <div className="flex flex-col gap-5 items-start md:items-center">
          <h2 className="text-[20px] font-bold tracking-widest font-bebas uppercase">
            CONNECT WITH US
          </h2>
          <div className="flex flex-col gap-3 text-[15px] 2xl:text-lg font-thin">
            <a
              href="https://www.facebook.com/share/1G6D4LXA4C/?mibextid=wwXIfr"
              target="_blank"
              className="flex items-center gap-3 hover:underline"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href="https://youtube.com/@ocddetailstudiogurgaon?si=Hm-ktnUTAi_wpR5C"
              target="_blank"
              className="flex items-center gap-3 hover:underline"
            >
              <FaYoutube /> Youtube
            </a>
            <a
              href="https://www.instagram.com/ocddetailstudiogurgaon?igsh=MW5uaWJ3NGpxdmR4Mw=="
              target="_blank"
              className="flex items-center gap-3 hover:underline"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
          <div className="mt-4 text-[14px] 2xl:text-lg font-thin inter">
            <a href="mailto:hello@ocddetailstudio.com" className="underline">
              hello@ocddetailstudio.com
            </a>
            <p
              onClick={() => window.open("tel:+919818122723")}
              className="mt-1 cursor-pointer"
            >
              +91-9818122723
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-500 py-5 px-10 flex flex-col md:flex-row justify-between text-[13px] font-thin tracking-wide">
        <p className="inter">© 2025 OCD Detail Studio. All rights reserved.</p>
        <p className="inter">Powered by Precision. Fueled by Passion.</p>
      </div>
    </footer>
  );
};

export default Footer;
