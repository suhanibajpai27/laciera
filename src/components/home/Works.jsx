import React from "react";
import bgImage from "../../assets/images/aboutbg.png"
import w1 from "../../assets/images/w1.png"
import w2 from "../../assets/images/w2.png"
import w3 from "../../assets/images/w3.png"

const Works = () => {
  const works = [
    {
      title: "Solar Energy System",
      desc: "Connect smart meters, inverters, batteries, EV chargers, and heat pumps to create a unified view of your energy ecosystem.",
      img: w1,
    },
    {
      title: "AI Optimization",
      desc: "Our advanced algorithms forecast energy needs, optimize usage patterns, and enable optional energy trading to maximize efficiency.",
      img: w2,
    },
    {
      title: "Actionable Insights",
      desc: "Access real-time dashboards with personalized recommendations to make informed decisions about your energy consumption.",
      img: w3,
    },
  ];

  return (
    <section className="w-full  relative py-16 px-4 sm:px-8 lg:px-16" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",       
     
      
    }}>
      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-[14px] text-[16px] font-medium text-orange-1 uppercase tracking-wide">
          How It Works
        </p>
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px]  font-bold text-text-1 mt-2 leading-tight">
          How Laciera Is The Right<br/> Platform For You
        </h2>
        <p className="mt-4 text-text-2 max-w-lg mx-auto text-[14px] lg:text-[16px] ">
          Our platform seamlessly integrates with your existing infrastructure
          to deliver intelligent energy management through a simple three–step
          process.
        </p>
      </div>

      {/* Works cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl lg:mx-auto">
        {works.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-sm overflow-hidden shadow-md group "
          >
            {/* Background image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-sm p-4 shadow text-left ">
              
              <h3 className="font-bold text-text-1 text-[16px] md:text-[16px] lg:text-[20px]">{item.title}</h3>
              <p className=" text-text-2 mt-2 text-[14px] lgLtext-[16px]">{item.desc}</p>
              
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
