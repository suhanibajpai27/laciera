// Banner.jsx
import React from "react";
import bgImage from "../assets/images/bannerbg.jpg"

const Banner = ({  heading, description }) => {
  return (
    <section
      className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` ,  backgroundSize: "cover",}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-1/70"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 max-w-3xl mx-auto">
        <h2 className="text-[36px] md:text-[48px] lg:text-[64px] font-bold mb-3">{heading}</h2>
        <p className="text-[14px] md:text-[16px]">{description}</p>
      </div>
    </section>
  );
};

export default Banner;
