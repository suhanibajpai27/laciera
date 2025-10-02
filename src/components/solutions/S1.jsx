import React from 'react';
import s11 from "../../assets/icons/s11.svg"
import s12 from "../../assets/icons/s12.svg"
import s13 from "../../assets/icons/s13.svg"
import fallback from "../../assets/icons/logo.svg"
import { Link } from 'react-router-dom';

// Data for the service cards
const serviceCardsData = [
  {
    id: 1,
    iconUrl: s11,
    title: 'Inventory & Monitoring',
    description: 'Track all your energy assets, from solar panels to charging stations. The system automatically monitors status, performance, and maintenance needs.',
    link:"/products",
  },
  {
    id: 2,
    iconUrl: s12,
    title: 'Maintenance Planning',
    description: 'Schedule preventive maintenance, manage service partners, and receive automatic notifications when maintenance is needed to maximize the lifespan of your assets.',
    link:"/products",
  },
  {
    id: 3,
    iconUrl: s13,
    title: 'Garden Renewal',
    description: 'Compare actual performance with expected output to quickly identify deviations and optimize the ROI of your energy investments.',
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
    <h3 className="text-[20px] font-bold text-text-1 mb-2 text-left">{title}</h3>

    {/* Description */}
    <p className="text-text-2 text-[16px] mb-3 leading-relaxed text-left grow">{description}</p>

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
const S1 = () => {
  return (
    <div className="py-16 px-6 lg:px-20 bg-white ">
      <div className="mx-auto w-full">

        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Label */}
          <h2 className="text-[16px] font-medium uppercase  text-orange-1 uppercase mb-2">
            SERVICES WE OFFER
          </h2>
          {/* Headline */}
          <h1 className="text-[40px]  font-bold text-text-1  max-w-3xl mx-auto leading-tight">
            Provide Comprehensive Ecological Service
          </h1>
        </div>

        {/* Cards Section - Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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

export default S1;
