// Features.jsx
import React from "react";

const features = ["Solar Panel", "Water Heating", "Financing", "Hydro Power"];

export default function Features() {
  return (
    <div className="w-full bg-white py-16">
      

      {/*  marquee */}
      <div className=" overflow-hidden relative w-full">
  <div className="flex animate-marquee space-x-8">
    {features.concat(features).map((feature, index) => (
      <div
        key={index}
        className="flex items-center space-x-2 flex-shrink-0 whitespace-nowrap"
      >
        <span className="text-orange-1 font-bold text-[20px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[48px] leading-tight">
          ✱
        </span>
        <span className="font-bold text-text-1 text-[24px] sm:text-[24px] md:text-[28px] lg:text-[38px] xl:text-[48px] leading-tight">
          {feature}
        </span>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
