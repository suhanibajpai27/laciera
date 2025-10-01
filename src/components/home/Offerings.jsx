// Offering.jsx
import React from "react";
import o1 from "../../assets/images/o1.svg";
import o2 from "../../assets/images/o2.svg";
import o3 from "../../assets/images/o3.svg";
import o4 from "../../assets/images/o4.svg";
import bgImage from "../../assets/images/ooverlay.svg"


const Offerings = () => {
  const offerings = [
    {
      id: 1,
      image: o1,
      title: "Energy Scan",
      description:
        "We Begin With A Thorough Analysis Of Your Current Energy Situation, Identify Savings Opportunities, And Create A Step–By–Step Plan For Sustainability.",
    },
    {
      id: 2,
      image: o2,
      title: "Implementation",
      description:
        "Professional Installation Of Solar Panels, Storage Systems, And Charging Infrastructure Through Our Network Of Certified Installation Partners.",
    },
    {
      id: 3,
      image: o3,
      title: "Optimization",
      description:
        "Our Advanced EMS Continuously Optimizes Your Energy Flows, Maximizing Self–Consumption And Minimizing Costs.",
    },
    {
      id: 4,
      image: o4,
      title: "Trading & Management",
      description:
        "For Larger Users, We Enable Participation In Energy Markets And Provide Comprehensive Asset Management.",
    },
  ];

  return (
    <section
      className="relative bg-primary-1 text-white py-16 px-6 lg:px-20"
      You can replace this with your bg image
      style={{ backgroundImage: `url(${bgImage})/50`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-wider">Our Offering</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Complete Solutions For <br /> Energy Transition
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {offerings.map((item) => (
          <div
            key={item.id}
            className="bg-teal-700/60 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            <div className="flex justify-center items-center bg-white rounded-full w-16 h-16 mx-auto mb-4">
              <img src={item.image} alt={item.title} className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-100">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
