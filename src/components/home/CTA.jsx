// CTA.jsx
import React from "react";
import cta1 from "../../assets/images/cta1.svg";
import cta2 from "../../assets/images/cta2.svg";
import cta3 from "../../assets/images/cta3.svg";

const CTA = () => {
  return (
    <section className="bg-bg-2 text-white py-20 px-6 lg:px-20">
      <div className=" mx-auto">
        {/* Top Section: Left Text + Right 3 Columns */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Left: Heading */}
          <div className="md:w-1/3 text-left w-full">
            <p className="uppercase text-[14px] text-[16px] font-medium tracking-wide mb-3 uppercase ">FIRST STEPS</p>
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px]  font-bold leading-tight">
              Ready To Transform <br  />
              Your Energy Management?
            </h2>
          </div>

          {/* Right: 3 Columns */}
          <div className="grid md:grid-cols-3 divide-y  md:divide-y-0 md:divide-x divide-white/30 md:w-2/3">
            {/* Request A Demo */}
            <div className="flex flex-col items-start space-y-4 px-2 pb-5 pt-5 md:pb-0 md:pt-0 md:px-4 text-left ">
              <img src={cta1} alt="Request Demo" className="h-15" />
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-tight">Request A Demo</h3>
              <p className="text-[14px] lg:text-[16px]">
                See how Laciera can transform your energy management with 2
                personalized demonstration of our platform.
              </p>
            </div>

            {/* Start Your Energy Scan */}
            <div className="flex flex-col items-start space-y-4 px-2 pb-5 pt-5  md:pb-0 md:pt-0 md:px-4 text-left mt-0 sm:pt-10">
              <img src={cta2} alt="Energy Scan" className="h-15" />
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]  font-bold leading-tight ">Start Your Energy Scan</h3>
              <p className="text-[14px] lg:text-[16px]">
                Begin with our comprehensive energy scan to identify
                opportunities for improvement and savings.
              </p>
            </div>

            {/* Become A Partner */}
            <div className="flex flex-col items-start space-y-4 px-2 pb-5 pt-5 md:pb-0 md:pt-0 md:px-4 text-left">
              <img src={cta3} alt="Become Partner" className="h-15" />
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]  font-bold leading-tight">Become A Partner</h3>
              <p className="text-[14px] lg:text-[16px]">
                Join our ecosystem of technology, installation, and knowledge
                partners to help accelerate the energy transition.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-16 align-center justify-center">
          <button className="bg-white text-text-1 px-8 py-4 rounded-sm font-medium hover:bg-gray-100 transition inline-flex items-center justify-center text-[14px] lg:text-[16px]">
            Contact Us <span className="ml-2">→</span>
          </button>
          <button className="bg-primary-3 text-white px-8 py-4 rounded-sm font-medium hover:bg-gray-800 transition text-[14px] lg:text-[16px]">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
