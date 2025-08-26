import React from 'react';
import carImage from '../assets/componets-bg/headlights.png'; // adjust path as needed
import { FaPaperPlane } from 'react-icons/fa';

const QuickContactSection = () => {
  return (
    <section className="relative bg-black text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight uppercase">
            STILL THINKING ABOUT IT? <span className="text-custom-red">LET’S TALK.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Whether it’s a swirl, a stain, a startup studio, or your Sunday superbike — we’re ready to help.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Image - slightly overflowing */}
          <div className="relative -ml-6 lg:-ml-12">
            <img 
              src={carImage} 
              alt="Car" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Form */}
          <div>
            <h3 className="text-2xl font-extrabold uppercase mb-6 leading-snug">
              DROP YOUR DETAILS. WE’LL TAKE IT<br />FROM HERE.
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="bg-transparent border-b border-gray-500 focus:border-white outline-none py-2" />
                <input type="text" placeholder="Last Name" className="bg-transparent border-b border-gray-500 focus:border-white outline-none py-2" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="email" placeholder="Email" className="bg-transparent border-b border-gray-500 focus:border-white outline-none py-2" />
                <input type="tel" placeholder="Phone" className="bg-transparent border-b border-gray-500 focus:border-white outline-none py-2" />
              </div>
              <div>
                <input type="text" placeholder="Message" className="bg-transparent border-b border-gray-500 focus:border-white outline-none py-2 w-full" />
              </div>
              
              <button 
                type="submit" 
                className="flex items-center gap-2 bg-custom-red text-white px-6 py-3 font-semibold shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] transition"
              >
                <FaPaperPlane /> Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactSection;
