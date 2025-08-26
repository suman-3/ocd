// src/components/toolbar/rightPanels/RightPanelContact.jsx
import React from 'react';

const RightPanelContact = () => {
  return (
    <div className="bg-white w-full md:max-w-xs p-6 rounded-md shadow-md md:sticky md:top-32 mx-auto">
      {/* Contact Form */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b border-gray-300 focus:outline-none pb-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 focus:outline-none pb-2"
          />
          <textarea
            placeholder="Message"
            rows="3"
            className="w-full border-b border-gray-300 focus:outline-none pb-2"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white px-5 py-3 flex items-center gap-2 hover:bg-red-700 transition"
          >
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
            Get In Touch
          </button>
        </form>
      </div>

      {/* Studio Locations */}
      <div className="mb-6">
        <h4 className="text-md font-bold mb-2">STUDIO LOCATIONS</h4>

        <div className="mb-3">
          <p className="font-semibold">Mumbai</p>
          <p className="text-sm text-gray-700">
            1121, Shramik Society, Adarsh Nagar,<br />
            Jogeshwari West, Mumbai, Maharashtra 400102
          </p>
        </div>

        <div className="mb-3">
          <p className="font-semibold">Gurgaon</p>
          <p className="text-sm text-gray-700">
            Main CRPF Camp Road, Sector 61, Village Ulahavas,<br />
            Opp. IOC Petrol Pump, Gurgaon, Haryana
          </p>
        </div>

        <div className="mb-3">
          <p className="font-semibold">Thane</p>
          <p className="text-sm text-gray-700">
            Kothari Compound, Neelkanth Grns Rd,<br />
            Opp. Baccha Party, Manpada, Thane West,<br />
            Maharashtra 400607
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-sm">
        <p className="text-gray-700 underline mb-1">
          hello@ocddetailstudio.com
        </p>
        <p className="text-gray-800 font-medium">+91-98XXXXXXX</p>
      </div>
    </div>
  );
};

export default RightPanelContact;
