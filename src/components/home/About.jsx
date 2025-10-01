import React from "react";
import f1 from "../../assets/images/f1.png"
import f1bg from "../../assets/images/f1bg.png"
import f2 from "../../assets/images/f2.png"
import f2bg from "../../assets/images/f2bg.png"
import f3 from "../../assets/images/f3.png"
import f3bg from "../../assets/images/f3bg.png"
import about from "../../assets/images/about.png"
import bgImage from "../../assets/images/aboutbg.png"
import author from "../../assets/images/author.svg"
import quotes from "../../assets/images/quotes.svg"

export default function About() {
  return (
    <section className="relative w-full py-20 bg-white m-0 p-0">
      <div className=" mx-auto ">

        <div className="px-6 lg:px-12">
 {/* Top Heading */}
 <div className="text-center  mx-auto">
          <p className="text-xs font-medium text-[16px] tracking-wide text-orange-1 uppercase">
            Make The Right Choice
          </p>
          <h2 className="mt-3 text-[40px] sm:text-3xl md:text-4xl font-bold text-text-1">
            Navigate The Energy Transition With Confidence
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-start text-left hover:shadow-xl transition overflow-hidden">
  {/* Background shape in top-right */}
  <div className="absolute top-0 right-0 w-3/4   overflow-hidden">
    <img
      src={f1bg} 
      alt="bg-shape"
      className="w-full h-full object-cover opacity-90"
    />
  </div>

  {/* Icon */}
  <img
    src={f1}
    alt="Sustainable Generation"
    className="w-20 h-20 rounded-full object-cover mb-4 relative z-10 mt-4"
  />

  {/* Title */}
  <h3 className="text-[20px] font-bold text-text-1 relative z-10">
    Sustainable Generation
  </h3>

  {/* Text */}
  <p className="mt-2 text-[16px] text-text-2 relative z-10">
    Implementation of solar panels and other renewable energy sources,
    including subsidy applications and optimization for your specific
    situation.
  </p>
</div>


          {/* Card 2 */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-start text-left hover:shadow-xl transition overflow-hidden">
  {/* Background shape in top-right */}
  <div className="absolute top-0 right-0 w-3/4   overflow-hidden">
    <img
      src={f2bg} 
      alt="bg-shape"
      className="w-full h-full object-cover opacity-90"
    />
  </div>

  {/* Icon */}
  <img
    src={f2}
    alt="Sustainable Generation"
    className="w-20 h-20 rounded-full object-cover mb-4 relative z-10 mt-4"
  />

  {/* Title */}
  <h3 className="text-[20px] font-bold text-text-1 relative z-10">
  Energy Storage
  </h3>

  {/* Text */}
  <p className="mt-2 text-[16px] text-text-2 relative z-10">
  Installation of storage systems to maximize self-consumption, flatten peaks, and reduce energy costs.
  </p>
</div>


          {/* Card 3 */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-start text-left hover:shadow-xl transition overflow-hidden">
  {/* Background shape in top-right */}
  <div className="absolute top-0 right-0 w-3/4   overflow-hidden">
    <img
      src={f3bg} 
      alt="bg-shape"
      className="w-full h-full object-cover opacity-90"
    />
  </div>

  {/* Icon */}
  <img
    src={f3}
    alt="Sustainable Generation"
    className="w-20 h-20 rounded-full object-cover mb-4 relative z-10 mt-4"
  />

  {/* Title */}
  <h3 className="text-[20px] font-bold text-text-1 relative z-10">
  Energy Trading
  </h3>

  {/* Text */}
  <p className="mt-2 text-[16px] text-text-2 relative z-10">
  Advanced systems for dynamic energy management and trading on energy markets for large consumers.
  </p>
</div>

        </div>
        </div>

     

        {/* About Section */}
        <div className="-mt-20 pt-40 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-0 m-0 w-full" style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",        // let it use the image’s natural size
        backgroundPosition: "top left",
        backgroundRepeat: "repeat",    // repeat with no spacing
        
      }}>
          {/* Left Illustration */}
          <div className="flex justify-center">
            <img
              src={about}
              alt="About Illustration"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left w-full max-w-md lg:max-w-lg" >
            <p className="text-[16px] font-medium tracking-wide text-orange-1 uppercase">
              About Us
            </p>
            <h2 className="mt-3 text-[40px] sm:text-3xl md:text-4xl font-bold text-primary-3 leading-snug">
              Expertise In<br/>
              <span className="text-primary-2">Energy Transition</span>
            </h2>
            <p className="mt-4 text-text-2 text-[16px] sm:text-base max-w-lg mx-auto lg:mx-0">
              As a specialized partner in energy management, we understand the
              challenges your organization faces. The energy market is changing
              rapidly, and new regulations require smart adjustments to your
              energy strategy.
            </p>

            {/* Founder words */}
            <div className="flex items-center gap-4 mt-3">
                <img
                  src={author}
                  alt="CEO"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                <img
                  src={quotes}
                 
                />
                  <p className="text-text-2 text-[12px] mt-1">Our mission is to accelerate the energy transition with a data-driven, affordable Energy Management System for homes to industry. Laciera unifies consumption, generation and storage; auto-optimizes; and enables optional energy trading.</p>
                </div>
              </div>
<hr className="my-4 " style={{borderWidth: "1px" ,borderColor: "#E3E3E3"}} />
            {/* Buttons + Profile */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-6">
              <button className="bg-primary-3 text-white px-6 py-3 rounded-sm font-medium hover:bg-gray-800 transition text-[16px]">
                Explore More →
              </button>

              <div className="flex items-center gap-4">
                <img
                  src={author}
                  alt="CEO"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-text-1 text-[16px]">Ronald Richards</p>
                  <p className="text-text-2 text-[14px]">CEO, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
