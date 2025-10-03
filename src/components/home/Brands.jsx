import React from "react";
import b1 from "../../assets/images/b1.svg";

const Brands = () => {
  const brands = [b1, b1, b1, b1, b1];

  return (
    <section className="w-full bg-white px-6 lg:px-12 py-16">
      {/* Title */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex-1 h-px bg-[#E3E3E3]"></div>
        <h2 className="mx-4 text-[22px] font-semibold text-text-1 whitespace-nowrap">
          1k+ Brands Trust Us
        </h2>
        <div className="flex-1 h-px bg-[#E3E3E3]"></div>
      </div>

      {/* Desktop / Tablet grid */}
      <div className="hidden sm:flex justify-center items-center gap-12 flex-wrap w-full">
        {brands.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`brand-${idx}`}
            className={`h-10 object-contain transition ${
              idx === 2 ? "" : "grayscale hover:grayscale-0"
            }`}
          />
        ))}
      </div>

      {/* Mobile view */}
      <div className="sm:hidden flex flex-col items-center gap-6">
        {/* First logo full width */}
        
        {/* Marquee for rest */}
        <div className="overflow-hidden relative w-full">
          <div className="flex animate-marquee space-x-6">
            {brands.slice(1).concat(brands.slice(1)).map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`brand-${idx}`}
                className="h-12 object-contain grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
