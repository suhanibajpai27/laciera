// Catalog.jsx
import React from "react";
import s21 from "../../assets/images/s21.png";
import s22 from "../../assets/images/s22.png";
import s23 from "../../assets/images/s23.png";
import fallback from "../../assets/icons/logo.svg"
import { Link } from "react-router-dom";

const solutions = [
  {
    id: "solar-panels",
    category: "Solar Panels",
    title: "High-Yield Solar Panels",
    image: s21,
     link: "/",
  },
  {
    id: "storage-battery",
    category: "Storage Battery",
    title: "Advanced Battery Systems",
    image: s22,
    link: "/",
  },
  {
    id: "charging-stations",
    category: "Charging Stations",
    title: "Smart Charging Stations",
    image: s23,
    link: "/",
  },
];


const SolutionCard = ({ solution }) => {
  return (
    <Link
      to={solution.link}
      className="group relative block rounded-sm overflow-hidden  transition duration-300 transform hover:shadow-sm"
    >
      {/* Background Image */}
      <div className="overflow-hidden">
        <img
          src={solution.image}
          alt={solution.title}
          // Added max-h-80 to control image height consistently
          className="w-full max-h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
          // Fallback for image loading error
          onError={(e) => { e.target.onerror = null; e.target.src ={fallback}; }}
        />
      </div>

  
<div className="absolute bottom-5 left-5 right-5 sm:bottom-10 bg-white px-0 rounded-sm flex">
  
  {/* Left Side Content */}
  <div className="flex-1 py-3 px-4 flex flex-col justify-center text-left">
    <p className="text-[16px] text-primary-2 font-medium ">{solution.category}</p>
    <h3 className="text-[20px] font-bold text-text-1 leading-tight">{solution.title}</h3>
  </div>

  {/* Right Side - Arrow Button */}
  <div className="w-12 bg-green-100/70 flex items-center justify-center rounded-r-sm">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-6 w-6 text-green-600 transform transition-transform duration-300 group-hover:translate-x-1" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </div>
</div>

    </Link>
  );
};

const S2 = () => {
  return (
    <section className="w-full py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Label */}
          <h2 className="text-[16px] font-medium uppercase text-orange-1 mb-2">
            SERVICES WE OFFER
          </h2>
          {/* Headline - Matches the text in the image */}
          <h1 className="text-[40px]  font-bold text-text-1  max-w-3xl mx-auto leading-tight">
            Smart Devices & Integration
          </h1>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default S2;
