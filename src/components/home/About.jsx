import React from "react";
import f1 from "../../assets/images/f1.png"
import f1bg from "../../assets/images/f1bg.png"
import f2 from "../../assets/images/f2.png"
import f2bg from "../../assets/images/f2bg.png"
import f3 from "../../assets/images/f3.png"
import f3bg from "../../assets/images/f3bg.png"
import about from "../../assets/images/about.png"
import bgImage from "../../assets/images/aboutbg.png"

export default function About() {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className=" mx-auto px-6 lg:px-12">
        
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

        {/* About Section */}
        <div className="-mt-20 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-0 m-0 w-full" style={{
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
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold tracking-wide text-orange-500 uppercase">
              About Us
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Expertise In{" "}
              <span className="text-green-600">Energy Transition</span>
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
              As a specialized partner in energy management, we understand the
              challenges your organization faces. The energy market is changing
              rapidly, and new regulations require smart adjustments to your
              energy strategy.
            </p>

            {/* Bullet List */}
            <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                Customizable solutions for energy transition with data-driven insights.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                Affordable Energy Management System for homes and businesses.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                Reduce consumption, generate returns, and optimize comfort.
              </li>
            </ul>

            {/* Buttons + Profile */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-6">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                Explore More →
              </button>

              <div className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/50"
                  alt="CEO"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Ronald Richards</p>
                  <p className="text-gray-500 text-sm">CEO, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
