import React from "react";
import GauravJha from '../assets/componets-bg/GauravJha.png'
import Joydeep from '../assets/componets-bg/Joydeep.jpg'
import Shiraj from '../assets/componets-bg/Shiraj.jpg'
import logo from '../assets/logo/logo.png'

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-10 items-stretch max-w-[1400px] 2xl:max-w-screen-2xl mx-auto  py-4 md:py-6 px-6 md:px-9 2xl:px-4">
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-6 md:gap-8 items-stretch">
        {/* Card 1 */}
        <div className="bg-white p-5 md:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.45),0_6px_15px_rgba(0,0,0,0.2)] rounded-md flex flex-col justify-between max-w-[800px] mx-auto h-full">
          <div>
            <h3 
              className="text-4xl lg:text-[36px] leading-none mb-3 uppercase text-gray-900 font-normal tracking-normal"
              style={{
                fontFamily: 'Bebas Neue',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
              }}
            >
              UNMATCHED CRAFTSMANSHIP & <br />PREMIUM SERVICE!
            </h3>
            <p className="inter text-gray-600 text-sm leading-relaxed mb-2.5 tracking-tight">
              I've now known OCD Detailing for a few years now. And since then I've not taken my vehicles anywhere else. The level of personal attention, the skill and craftsmanship in the work they deliver, and the care with which they treat every single vehicle as their own, goes well beyond customer satisfaction. It's obsession. The whole team at OCD only has one goal, work on every vehicle as if it's the epitome of their skill. I'm thoroughly impressed with the bespoke nature of engagement I have every single time I visit OCD. Thank you Saurabh for taking such good care of the machines that keep us moving. Adding some pictures of my bike which was recently attended to by OCD. They've done a fantastic job on my cars as well and I only wish I could always keep them looking as they do when they come out of OCD.
            </p>
          </div>
          <div className="flex gap-3 items-center mt-4">
            <img 
              src={GauravJha} 
              alt="Gaurav's bike" 
              className="w-16 h-16 object-cover rounded border-4 border-white shadow-[0_8px_18px_rgba(0,0,0,0.08)]"
            />
            <div>
              <strong className="block text-base mb-1 text-gray-900 inter">Gaurav Jha</strong>
              <div className="text-yellow-400 text-sm tracking-[2px]">★★★★★</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 md:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.45),0_6px_15px_rgba(0,0,0,0.2)] rounded-md flex flex-col justify-between max-w-[800px] mx-auto h-full">
          <div>
            <h3 
              className="text-4xl lg:text-[36px] leading-none mb-3 uppercase text-gray-900 font-normal tracking-normal"
              style={{
                fontFamily: 'Bebas Neue',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
              }}
            >
              LIKE WATCHING ARTISTS CRAFT A <br />MASTERPIECE!
            </h3>
            <p className="font-bold text-gray-800 mb-2.5 text-sm inter">OCD – can also be termed as Outstanding Car Detailing!</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-2.5 inter tracking-tight">
              I recently had a ceramic coating (Graphene Plus) done on my car, and I <br />couldn't be more impressed with the results. What truly sets this experience apart is the personal involvement of Saurabh and his son Ritwik. They approach detailing like artists working on a canvas, and it absolutely shows in the final result.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-2.5 inter tracking-tight">
              My car literally shone like a diamond when they were finished — every inch gleamed with a mirror-like gloss. Their attention to detail and passion for their craft are unmatched. It's rare to find professionals who take such pride in their work. Saurabh is a pleasure to deal with. He goes that extra mile to explain the process and the technicalities involved in the detailing process. Highly recommended to anyone looking to give their car the royal treatment. <br />You won't be disappointed.
            </p>
          </div>
          <div className="flex gap-3 items-center mt-4">
            <img 
              src={Joydeep} 
              alt="Joydeep's car" 
              className="w-16 h-16 object-cover rounded border-4 border-white shadow-[0_8px_18px_rgba(0,0,0,0.08)]"
            />
            <div>
              <strong className="block text-base mb-1 text-gray-900 font-inter">Joydeep Mohanty</strong>
              <div className="text-yellow-400 text-sm tracking-[2px]">★★★★★</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-2 md:gap-8 items-stretch order-first lg:order-none">
        {/* Header */}
        <div className="mb-4 md:mb-10 2xl:mb-0">
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Logo" className="w-[30px] h-[30px]" />
            <h5 className="font-inter text-xs uppercase tracking-[6px] text-gray-500 m-0 font-bold">TESTIMONIALS</h5>
          </div>
          <h1 className="font-bebas tracking-wider font-bold text-4xl sm:text-5xl lg:text-6xl leading-none m-0 mb-5 uppercase text-gray-900">
            WHAT OUR<br />CUSTOMERS SAY
          </h1>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="text-yellow-400 text-xl">★★★★★</div>
            <div className="text-red-700 font-bold text-[15px]">(176 Reviews)</div>
          </div>
          <p 
            className="text-gray-700 inter text-base leading-relaxed m-0 mb-3.5 tracking-tight"
            style={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '23.8px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            Our customers trust OCD Detailing for unmatched car and bike detailing, premium ceramic coatings and PPF. With years of expertise and a passion for perfection, we treat every vehicle as our own, delivering showroom-like shine and long-lasting protection.
          </p>
          <p 
            className="text-gray-700 inter text-base leading-relaxed m-0 mb-3.5 tracking-tight"
            style={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '23.8px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            Read what our happy customers have to say about their OCD experience — from mirror-like gloss finishes to exceptional attention to detail, we're proud to be their go-to detailing studio.
          </p>
          <button className="bg-red-500 text-white inter border-none py-2.5 px-10 font-semibold cursor-pointer rounded-sm mt-3.5 inter normal-case transition-all duration-300 ease-in-out hover:bg-red-400 hover:shadow-[0_0_15px_rgba(255,77,77,0.6)] hover:scale-105">
            View All &gt;
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white 2xl:-mt-4 p-5 md:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.45),0_6px_15px_rgba(0,0,0,0.2)] rounded-md flex flex-col justify-between max-w-[800px] mx-auto h-full">
          <div>
            <h3 
              className="text-4xl lg:text-[36px] leading-none mb-3 uppercase text-gray-900 font-normal tracking-normal"
              style={{
                fontFamily: 'Bebas Neue',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
              }}
            >
              UNMATCHED DETAILING EXPERIENCE LIKE <br />MAGIC ,LIKE HOME.
            </h3>
            <p className="text-gray-600 inter text-sm leading-relaxed mb-2.5 tracking-tight">
              I firmly believe that there is no better detailing studio in Delhi/NCR (probably India) as well. I took my <br />Mercedes C250D to Saurabh with permanent water marks & mineral deposits on all the glass panels.<br /> Having visited almost all the big detailing studios in NCR for the problem, I had little to no hope that the <br />issue could be rectified. But to my surprise Saurabh & his team did the MAGIC. They explain all the <br />details, insights & process with patience and smile. Saurabh being an automobile enthusiast himself, the conversations are a delight! I make it a point to visit them whenever I'm travelling from Noida to Gurgaon,<br/> even if it is for a basic wash. The place has warmth just like HOME. Next project Kawasaki ZX10R :)
            </p>
          </div>
          <div className="flex gap-3 items-center mt-4">
            <img 
              src={Shiraj} 
              alt="Shiraj's vehicle" 
              className="w-16 h-16 object-cover rounded border-4 border-white shadow-[0_8px_18px_rgba(0,0,0,0.08)]"
            />
            <div>
              <strong className="block text-base mb-1 text-gray-900 inter">Shiraj Khanna</strong>
              <div className="text-yellow-400 text-sm tracking-[2px]">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
