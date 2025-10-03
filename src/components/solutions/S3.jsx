import React from 'react';
import s31 from "../../assets/icons/s31.svg"
import s32 from "../../assets/icons/s32.svg"
import s33 from "../../assets/icons/s33.svg"
import fallback from "../../assets/icons/logo.svg"
import { Link } from 'react-router-dom';

// Data for the service cards
const serviceCardsData = [
  {
    id: 1,
    iconUrl: s31,
    title: 'Smart Meters',
    description: 'Advanced metering infrastructure that provides detailed, real-time data on your energy consumption and production patterns.',
    link:"/products",
  },
  {
    id: 2,
    iconUrl: s32,
    title: 'Sensors & Controls',
    description: 'Environmental and occupancy sensors that help optimize energy use based on actual conditions and usage patterns.',
    link:"/products",
  },
  {
    id: 3,
    iconUrl: s33,
    title: 'Cloud Platform',
    description: 'Secure, scalable cloud infrastructure built on Azure and Databricks that powers our AI algorithms and ensures reliable service.',
    link:"/products",
  },
];

// Helper component for the individual card
const ServiceCard = ({ iconUrl, title, description, link }) => (
  <div className="bg-white p-6 sm:p-8 rounded-sm shadow-md hover:shadow-md transition duration-300 transform hover:-translate-y-1 border border-gray-100 h-full">
    {/* Icon/Image Placeholder */}
    <div className="mb-2">
      <img
        src={iconUrl}
        alt={`${title} Icon`}
        className="w-24 h-24 rounded-sm object-contain p-2"
        // Fallback for image loading error
        onError={(e) => { e.target.onerror = null; e.target.src = {fallback}; }}
      />
    </div>

    {/* Title */}
    <h3 className="text-[16px] md:text-[16px] lg:text-[20px] font-bold text-text-1 mb-2 text-left">{title}</h3>

    {/* Description */}
    <p className="text-text-2 text-[14px] lg:text-[16px] mb-3 leading-relaxed text-left grow">{description}</p>

    {/* Read More Link */}
    <Link to={link} className="flex items-center text-[16px] font-semibold text-text-1 hover:text-teal-600 transition duration-150 group">
      Read More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-1 transition-transform duration-150 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  </div>
);

// Main S1 Component
const S3 = () => {
  return (
    <div className="py-10 md:py-20 px-6 lg:px-20 bg-white ">
      <div className="mx-auto w-full">

        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Label */}
          <h2 className="text-[14px] lg:text-[16px] font-medium uppercase  text-orange-1 uppercase mb-2">
            SERVICES WE OFFER
          </h2>
          {/* Headline */}
          <h1 className="text-[24px] md:text-[32px] lg:text-[40px]  font-bold text-text-1  max-w-3xl mx-auto leading-tight">
          Smart Devices & Integration
          </h1>
        </div>

        {/* Cards Section - Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {serviceCardsData.map((card) => (
            <ServiceCard
              key={card.id}
              iconUrl={card.iconUrl}
              title={card.title}
              description={card.description}
              link={card.link} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default S3;
