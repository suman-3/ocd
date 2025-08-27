import React from "react";
import kumar from "../assets/componets-bg/kumar.jpg";
import bajaj from "../assets/componets-bg/Bajaj.jpg";
import narula from "../assets/componets-bg/narula.png";
import mathew from "../assets/componets-bg/mathew.jpg";
import quoteIcon from "../assets/icon/quoate.png";

const MoreCustomersSay = () => {
  return (
    <div className="bg-black text-white px-1 md:px-10 lg:px-12 2xl:px-0 font-arial 2xl:max-w-screen-2xl mx-auto">
      <h2 className="text-left font-['Bebas_Neue'] text-5xl md:text-6xl font-normal mb-6 md:mb-8 mt-6 md:mt-8 pl-4 leading-tight">
        MORE <br className="md:hidden" /> CUSTOMERS SAY
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 lg:gap-8 2xl:gap-10 justify-center px-4 items-stretch mx-auto">
        {/* Card 1 */}
        <div className="bg-white text-black rounded-sm p-5 shadow-lg flex flex-col h-full max-w-[600px] mx-auto lg:mx-0">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center mb-4">
              <img
                src={kumar}
                alt="Satyendra Kumar"
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div>
                <h3 className="text-xl font-bold m-0">Satyendra Kumar</h3>
                <div className="text-yellow-500 text-lg">★★★★★</div>
              </div>
            </div>
            <img src={quoteIcon} alt="ICON" className="size-10 shrink-0 mt-4" />
          </div>
          <p className="inter font-normal text-sm leading-6 text-justify text-gray-500 flex-1">
            I got to know about OCD through Ducati owners group, I spoke to
            Saurabh before office timings and I was pleasantly surprised as he
            was available to talk and explained everything. He went over and
            above and told me to visit him in person to show me a car which he
            had worked on.
            <br />
            I had a bitter experience of ceramic coating with one of the
            detailers in the city who did it on my black Creta 2020. So I was
            kind of on edge about whether I should go for it or not. But then I
            decided to at least hear what he had in store for me.
            <br />
            I am glad I made the trip to his workshop as I haven't seen any
            other person with this in depth knowledge about paint, ceramic
            coatings and general external upkeep of car.
            <br />
            Whatever I read aligned with what Saurabh had said. And man, when I
            picked the car after 3 days, I was mighty impressed.
            <br />
            Kudos Saurabh, Keep up the good work.
            <br />
            PS: I got my Kodiaq Sportline straight from the showroom to him in
            two days time. The earlier you get your car, the better it is I
            believe.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black rounded-sm p-5 shadow-lg flex flex-col h-full max-w-[600px] mx-auto lg:mx-0">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center mb-4">
              <img
                src={bajaj}
                alt="Akul Bajaj"
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div>
                <h3 className="text-xl font-bold m-0">Akul Bajaj</h3>
                <div className="text-yellow-500 text-lg">★★★★★</div>
              </div>
            </div>
            <img src={quoteIcon} alt="ICON" className="size-10 shrink-0 mt-4" />
          </div>
          <p className="inter font-normal text-sm leading-6 text-justify text-gray-500 flex-1">
            I had contacted Saurabh in May 2022 after getting a Versys 1000 for
            its detailing.
            <br />
            He patiently explained to me the process and options available post
            which I chose the best possible (graphene) coating for my bike.
            <br />
            He's very meticulous and is a complete hands-on guy. The best part
            of his detailing is that he treats the vehicle as his own and gives
            it similar level of pampering and treatment.
            <br />
            The guys make sure to reach every possible nook and corner of the
            bike while cleaning and coating the bike. You'll be amazed to see
            the final results in person.
            <br />
            6 months down the line, I got the maintenance coating done today and
            the day spent was like therapy. You'll enjoy every moment in the
            studio. And the most important thing was that after 6 months, I can
            say with confidence that the coating has done its job. The bike
            doesn't get dirty easily and even if it does, it's super easy to
            clean with a simple swipe with microfiber cloth. Kudos to the
            amazing service!
            <br />
            And as I mentioned to him in person, it's always a pleasure to drop
            by his studio and get some work done.
            <br />
            10/10 would recommend everyone to get their detailing work done from
            Saurabh.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black rounded-sm p-5 shadow-lg flex flex-col h-full max-w-[600px] mx-auto lg:mx-0">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center mb-4">
              <img
                src={narula}
                alt="Sarthak Narula"
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div>
                <h3 className="text-xl font-bold m-0">Sarthak Narula</h3>
                <div className="text-yellow-500 text-lg">★★★★★</div>
              </div>
            </div>
            <img src={quoteIcon} alt="ICON" className="size-10 shrink-0 mt-4" />
          </div>
          <p className="inter font-normal text-sm leading-6 text-justify text-gray-500 flex-1">
            I recently got Nano Graphene coating done on my Triumph Scrambler
            400X from OCD details studio and the entire experience from dropping
            off the bike to collecting it was just phenomenal!
            <br />
            Upon arrival I was precisely explained about the process which will
            be happening on the bike and an accurate timeline was given to me.
            <br />
            At the time of delivery, I was just completely flabbergasted after
            seeing the bike, it looked better than the day I took delivery from
            the showroom. I was informed how to take care of the bike post
            detailing and when to visit again for the service checks.
            <br />
            It's their genuine love towards the process which makes them
            standout, they genuinely care and are emotionally invested towards
            their craft. The team's passion and dedication is unmatched.
            <br />
            A big thank you to Mr. Saurabh and the entire team for their
            outstanding service. I just absolutely loved the service and would
            highly recommend OCD Detail Studio to anyone looking for detailing
            services, <br />I can surely vouch that you will not be
            disappointed.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white text-black rounded-sm p-5 shadow-lg flex flex-col h-full max-w-[600px] mx-auto lg:mx-0">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center mb-4">
              <img
                src={mathew}
                alt="Mathew Vadakkel"
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div>
                <h3 className="text-xl font-bold m-0">Mathew Vadakkel</h3>
                <div className="text-yellow-500 text-lg">★★★★★</div>
              </div>
            </div>

            <img src={quoteIcon} alt="ICON" className="size-10 shrink-0 mt-4" />
          </div>
          <p className="inter font-normal text-sm leading-6 text-justify text-gray-500 flex-1">
            Great attention to detail, quite literally! I had my new car's paint
            detailed and protected with a ceramic coat almost 1.5 years ago and
            followed the coating checkup/maintenance visits recommended every 6
            months since. The car looked better than how it left the showroom
            and still has the same lustre and gloss even today despite, dust,
            heat, grime, monsoons in Gurgaon, frequent highway runs for work and
            holiday trips to the hills. Saurabh, the owner of the shop works on
            the vehicles himself along with his crew and this makes a great
            difference to quality of workmanship. Work is completed punctually
            and I've never had to wait longer than estimated when I've handed
            over the vehicle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreCustomersSay;
