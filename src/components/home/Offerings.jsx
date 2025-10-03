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
      className="relative bg-bg  text-white py-20 px-6 lg:px-20"
      You can replace this with your bg image
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "contain", backgroundPosition: "center" }}
    >
      <div className="text-center mb-12">
        <p className="text-[14px] lg:text-[16px] font-medium uppercase tracking-wider">Our Offering</p>
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold  leading-tight mt-2">
          Complete Solutions For <br /> Energy Transition
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {offerings.map((item) => (
          <div
            key={item.id}
            className="bg-secondary  border border-white/50 p-6 rounded-sm shadow-md text-center hover:shadow-lg transition mt-4"
          >
            <div className="flex justify-center items-center bg-white rounded-full w-20 h-20 mx-auto mb-4 -mt-15">
              <img src={item.image} alt={item.title} className="w-20 h-20" />
            </div>
            <h3 className="font-medium  mb-2 text-[16px] lg:text-[20px] mt-2">{item.title}</h3>
            <p className="text-[14px] lg:text-[16px] text-white font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
