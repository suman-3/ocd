import React from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaPencilAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: white card form */}
          <div className="bg-white p-10 shadow-sm max-w-[760px]">
            {/* CONTACT FORM heading */}
        <h3 className="font-bebas text-5xl uppercase tracking-wider mb-10">
          CONTACT FORM
        </h3>


            <form className="space-y-6">
              {/* Name */}
              <div className="relative">
                <FaUserAlt className="absolute left-0 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Name"
                  className="pl-8 w-full border-b border-gray-300 py-3 placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-0 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="pl-8 w-full border-b border-gray-300 py-3 placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FaPencilAlt className="absolute left-0 top-4 text-gray-400" />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="pl-8 w-full border-b border-gray-300 py-3 placeholder-gray-400 focus:outline-none resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input id="privacy" type="checkbox" className="mt-1" />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree that my data is collected and stored as per the privacy
                  policy.
                </label>
              </div>

              {/* Button */}
              <div>
                <button
                  type="submit"
                  className="mt-4 bg-custom-red hover:bg-red-700 text-white py-3 px-8 font-bold w-48 flex items-center justify-center gap-3"
                >
                  <FaPaperPlane />
                  Get In Touch
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: contact info */}
          <div className="flex flex-col justify-center">
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontSize: 50,
                fontStyle: "normal",
                lineHeight: "55.28px",
                letterSpacing: "-0.58px",
                verticalAlign: "middle",
                textTransform: "uppercase"
              }}
              className="text-3xl md:text-4xl leading-tight"
            >
              HAVE QUESTIONS? GOT A MACHINE
              <br />
              <span className="text-custom-red">THAT DESERVES BETTER?</span>
            </h2>


            <p className="mt-5 text-gray-700 text-base leading-relaxed max-w-[540px]">
              Whether it’s about paint correction, PPF, ceramic coating, or just
              getting started — drop us a message and we’ll guide you with
              clarity, not fluff.
            </p>

            {/* Studio Locations label */}
            <div className="mt-6">
              <p className="font-bebas uppercase text-xl mb-3">Studio Locations</p>

              <div className="space-y-5 text-gray-700">
                {/* Mumbai */}
                <div>
                  <p className="flex items-center gap-2 font-semibold text-gray-900">
                    <FaMapMarkerAlt className="text-custom-red" />
                    Mumbai
                  </p>
                  <p className="text-sm text-gray-600">
                    1121, Shramik Society, Adarsh Nagar, Jogeshwari West, Mumbai,
                    Maharashtra 400102
                  </p>
                </div>

                {/* Gurgaon */}
                <div>
                  <p className="flex items-center gap-2 font-semibold text-gray-900">
                    <FaMapMarkerAlt className="text-custom-red" />
                    Gurgaon
                  </p>
                  <p className="text-sm text-gray-600">
                    Main CRPF Camp Road, Sector 61, Village Ullahavas, Opp. IOC
                    Petrol Pump, Gurgaon, Haryana
                  </p>
                </div>

                {/* Thane */}
                <div>
                  <p className="flex items-center gap-2 font-semibold text-gray-900">
                    <FaMapMarkerAlt className="text-custom-red" />
                    Thane
                  </p>
                  <p className="text-sm text-gray-600">
                    Kothari Compound, Neelkanth Grns Rd, Opp. Baccha Party,
                    Manpada, Thane West, Maharashtra 400607
                  </p>
                </div>
              </div>
            </div>

            {/* Email & Phone */}
            <div className="mt-6 text-gray-800">
              <p className="underline decoration-gray-300 decoration-2 mb-2 inline-block">
                hello@ocddetailstudio.com
              </p>
              <p className="mb-3">+91-98XXXXXXX</p>
            </div>

            {/* Social Icons (outlined squares) */}
            <div className="flex gap-3 mt-3">
              <a
                href="#"
                className="border border-gray-300 p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition"
                aria-label="YouTube"
              >
                <FaYoutube className="text-gray-800" />
              </a>
              <a
                href="#"
                className="border border-gray-300 p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-gray-800" />
              </a>
              <a
                href="#"
                className="border border-gray-300 p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-gray-800" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
