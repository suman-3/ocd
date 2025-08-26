import { Phone } from "lucide-react"
import mancarwash from '../../assets/background/mancarwash.jpg'
import womenhandshake from '../../assets/background/women.png'
import frontCar from '../../assets/componets-bg/CarFront.jpg'

const CallToaction = () => {
  return (
    <div className="w-full font-bebas text-white text-center "> 
      <div className="grid grid-cols-1 lg:grid-cols-2 h-auto min-h-[60vh] w-full ">
        {/* Left Side - Need Help Section */}
        <div 
          className="relative flex flex-col justify-center items-center p-12 w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${frontCar})` }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/60"></div>

          {/* Content */}
          <div className="relative z-10 max-w-lg text-center">
            <h1
              className="mb-6"
              style={{
                fontFamily: 'Bebas Neue',
                fontStyle: 'normal',
                fontSize: '44px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              NEED HELP WITH YOUR CAR OR BIKE?
            </h1>

            <p
              className="mb-8 inter"
              style={{
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#FFFFFF',
                textTransform: 'none',
                fontSize: '16px',
              }}
            >
              We’re here to answer your questions, fix past detailing issues, or guide you on the right service for your vehicle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <button
              className="bg-custom-red text-white rounded-md hover:bg-red-700 transition-colors min-w-[150px] flex items-center justify-center inter"
              style={{ fontFamily: 'Inter', padding: '8px 16px', fontSize: '14px' }} // reduced font size
            >
              Book a Free Consultation
            </button>

            <button
              onClick={() => window.open("tel:+919818122723", "_blank")}
              className="bg-custom-red text-white rounded-md hover:bg-red-700 transition-colors min-w-[150px] flex items-center justify-center gap-2 inter"
              style={{ fontFamily: 'Inter', padding: '8px 16px', fontSize: '14px' }} // reduced font size
            >
              <Phone className="w-5 h-5" /> Call Now
            </button>

            </div>


            {/* Bottom text */}
            <p
              className="text-white text-lg leading-relaxed"
              style={{ fontWeight: 400, fontFamily: 'Inter', maxWidth: '600px', margin: '0 auto', fontSize: '14px' }}
            >
              Ppf peeling? Swirl marks after ceramic? Something not sitting right? Let's get it sorted — the right way.
            </p>


          </div>
        </div>

        {/* Right Side - Franchise Section */}
        <div 
          className="relative flex flex-col justify-center items-center p-12 w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${womenhandshake})` }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-black/30"></div>

          {/* Content */}
          <div className="relative z-10 max-w-lg text-center">
            <h1
              className="mb-6 whitespace-nowrap"
              style={{
                fontFamily: 'Bebas Neue',
                fontStyle: 'normal',
                fontSize: '38px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              WANT TO BRING OCD DETAIL STUDIO TO YOUR CITY?
            </h1>

            <p
              className="mb-8 tracking-wide"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#FFFFFFE6', // same as white/90
                textTransform: 'none',
                fontSize: '16px',
              }}
            >
              We're opening up select franchise opportunities for auto enthusiasts who believe in quality, not shortcuts
            </p>

            {/* Button */}
            <div className="mb-8 flex justify-center">
             <button
              className="bg-custom-red text-white rounded-md hover:bg-red-700 transition-colors min-w-[200px] flex items-center justify-center"
              style={{
                fontFamily: 'Inter',   // normal lowercase
                padding: '8px 16px',   // reduced padding
                fontSize: '14px',      // reduced font size
                textTransform: 'none', // ensure normal case
              }}
            >
              Apply For Franchise
            </button>

            </div>

            {/* Bottom text */}
            <p
            className="text-white leading-relaxed"
            style={{
              fontWeight: 400,
              fontFamily: 'Inter',   // allows lowercase
              maxWidth: '600px',     // reduce width
              margin: '0 auto',
              fontSize: '14px',      // smaller font
            }}
          >
            If you're passionate about cars, bikes, and customer-first service let's build something real together.
            Limited slots open across Tier-1 & Tier-2 cities.
          </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToaction
