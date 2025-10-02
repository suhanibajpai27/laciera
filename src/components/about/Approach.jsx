// Approach.jsx
import React from "react";
import approachImg from "../../assets/images/approach.png"; 

const Approach = () => {
  return (
    <section className="w-full py-20 px-6 lg:px-20 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        
        {/* Left Content */}
        <div>
          <h2 className="text-[30px] text-text-1 font-semibold mb-4">Our Approach</h2>
          <p className="text-text-2 mb-8 leading-relaxed">
            Our experienced advisors work with leading partners to provide complete
            solutions for both SMEs and large consumers. From energy islands to
            advanced energy management systems – we support you at every step of
            your energy transition.
          </p>

          <h3 className="text-[30px] text-text-1 font-semibold mb-4 mt-4">Our Core Values</h3>
          <ul className="space-y-2 text-text-2 leading-relaxed list-disc list-inside">
            <li>Reliable expertise and customised advice</li>
            <li>Innovative technological solutions</li>
            <li>Long-term partnership focused on sustainability</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src={approachImg}
            alt="Our Approach"
            className="w-full rounded-sm shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Approach;
