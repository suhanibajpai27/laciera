// Features.jsx
import React from "react";

const features = ["Solar Panel", "Water Heating", "Financing", "Hydro Power"];

export default function Features() {
  return (
    <div className="w-full bg-white py-16">
      <div className="flex justify-center items-center space-x-4 ">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-1">
            {/* Star separator (hide before first item) */}
            {index !== 0 && (
              <span className="text-orange-1  text-4xl font-bold ">✱</span>
            )}
            {/* Feature text */}
            <span className="text-5xl font-bold text-text-1 ">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
