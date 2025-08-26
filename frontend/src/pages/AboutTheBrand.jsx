
import AboutImg from "../assets/componets-bg/AboutImg.jpg"; 

const AboutTheBrand = () => {
  return (
    <section className="bg-black text-white px-6 py-8 2xl:py-20 md:px-16 pb-14">
      <div className="flex flex-col md:flex-row items-start 2xl:max-w-screen-2xl mx-auto">
        {/* Left Section */}
        <div className="md:w-3/5">
          {/* Heading */}
          <div className="flex items-center mb-2">
            <h2
              className="text-red-600 font-bold mr-4"
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "90px",
                letterSpacing: "1px",
              }}
            >
              ABOUT
            </h2>
            {/* Red & White Blocks */}
            <div className="flex space-x-2">
              <div className="w-16 h-16 bg-red-600"></div>
              <div className="w-32 h-16 bg-white"></div>
            </div>
          </div>

          {/* Subheading */}
          <p
            className="mb-4 inter"
            style={{

              fontSize: "24px",
              fontWeight: "500",
              textTransform: "none",
            }}
          >
            The Brand
          </p>

          {/* Paragraphs */}
          <p className="mb-4 inter" style={{ fontSize: "16px", fontWeight: "200" }}>
            They say that detailers are not made, they are born. <br />
            Detailing is a way of life. Getting into the minutest of details in
            the quest for perfection. Hence the name;
          </p>
          <p className="mb-4 font-semibold inter" style={{ fontSize: "18px" }}>
            OCD Detail Studio. Introducing you to the world of perfection.
          </p>
          <p className="mb-4 inter" style={{ fontSize: "16px", fontWeight: "300" }}>
            The studio is a labour of love incorporated by two brothers with a
            passion for detailing spanning 25 years, <br />
            both professionals, one a former Executive Chef at a Premier 5 star
            hotel and the other a Retired IAF Officer and a former Fighter
            Pilot.
          </p>
          <p className="mb-4 inter" style={{ fontSize: "16px", fontWeight: "300" }}>
            We have tied up with some of the most exclusive brands to ensure
            your vehicle stays new for years.
          </p>
          <p className="font-bold inter" style={{ fontSize: "18px" }}>
            OCD operates two owned stores at Mumbai and Gurgaon and one
            Franchise at Thane.
          </p>
          <p className="inter mt-2" style={{ fontSize: "16px", fontWeight: "300" }}>
            The expertise is in providing premium detailing services for all
            kinds of vehicles. We specialise in Paint Protection Film (PPF),
            Ceramic and Graphene coatings.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-2/5 mt-8 md:mt-0 md:pl-12 flex-shrink-0 relative overflow-visible">
          <img
            src={AboutImg}
            alt="OCD Detail Studio Founders"
            className="max-w-lg w-[90%] h-auto object-cover object-top border-4 border-black absolute md:-top-8 md:right-0 md:translate-x-6 inter"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTheBrand;
