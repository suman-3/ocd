import AboutImg from "../assets/componets-bg/AboutImg.jpg";

const AboutTheBrand = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-16 py-8 md:py-12 2xl:py-20">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 2xl:max-w-screen-2xl mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-3/5">
          {/* Heading */}
          <div className="flex gap-6 md:gap-8 sm:items-center mb-4 sm:mb-2">
            <h2
              className="text-red-600 font-bold mb-3 sm:mb-0 sm:mr-4"
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "clamp(48px, 12vw, 90px)",
                letterSpacing: "1px",
                lineHeight: "0.9",
              }}
            >
              ABOUT
            </h2>
            {/* Red & White Blocks */}
            <div className="flex space-x-2 self-start mt-1 md:mt-2">
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-red-600"></div>
              <div className="w-16 h-8 sm:w-24 sm:h-12 md:w-32 md:h-16 bg-white"></div>
            </div>
          </div>

          {/* Subheading */}
          <p
            className="mb-4 sm:mb-6 inter"
            style={{
              fontSize: "clamp(20px, 4vw, 24px)",
              fontWeight: "500",
              textTransform: "none",
            }}
          >
            The Brand
          </p>

          {/* Paragraphs */}
          <div className="space-y-4 sm:space-y-5">
            <p 
              className="inter leading-relaxed" 
              style={{ 
                fontSize: "clamp(14px, 2.5vw, 16px)", 
                fontWeight: "200",
                lineHeight: "1.6"
              }}
            >
              They say that detailers are not made, they are born. <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Detailing is a way of life. Getting into the minutest of details in
              the quest for perfection. Hence the name;
            </p>
            
            <p 
              className="font-semibold inter leading-relaxed" 
              style={{ 
                fontSize: "clamp(16px, 3vw, 18px)",
                lineHeight: "1.5"
              }}
            >
              OCD Detail Studio. Introducing you to the world of perfection.
            </p>
            
            <p 
              className="inter leading-relaxed" 
              style={{ 
                fontSize: "clamp(14px, 2.5vw, 16px)", 
                fontWeight: "300",
                lineHeight: "1.6"
              }}
            >
              The studio is a labour of love incorporated by two brothers with a
              passion for detailing spanning 25 years, <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              both professionals, one a former Executive Chef at a Premier 5 star
              hotel and the other a Retired IAF Officer and a former Fighter
              Pilot.
            </p>
            
            <p 
              className="inter leading-relaxed" 
              style={{ 
                fontSize: "clamp(14px, 2.5vw, 16px)", 
                fontWeight: "300",
                lineHeight: "1.6"
              }}
            >
              We have tied up with some of the most exclusive brands to ensure
              your vehicle stays new for years.
            </p>
            
            <p 
              className="font-bold inter leading-relaxed" 
              style={{ 
                fontSize: "clamp(16px, 3vw, 18px)",
                lineHeight: "1.5"
              }}
            >
              OCD operates two owned stores at Mumbai and Gurgaon and one
              Franchise at Thane.
            </p>
            
            <p 
              className="inter leading-relaxed" 
              style={{ 
                fontSize: "clamp(14px, 2.5vw, 16px)", 
                fontWeight: "300",
                lineHeight: "1.6"
              }}
            >
              The expertise is in providing premium detailing services for all
              kinds of vehicles. We specialise in Paint Protection Film (PPF),
              Ceramic and Graphene coatings.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <img
              src={AboutImg}
              alt="OCD Detail Studio Founders"
              className="w-full h-auto object-cover object-top border-2 sm:border-4 border-black lg:absolute lg:-top-8 lg:right-0 lg:translate-x-6 rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheBrand;