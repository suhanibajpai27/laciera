// Hero.jsx
import { useState } from "react";
import placeholderImage from "../../assets/images/img.png";
import sampleVideo from "../../assets/videos/sample.mp4";
import bgImage from "../../assets/images/bg.jpg";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className="relative w-full min-h-[80vh] h-[90%] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary-1/90"></div>

      {/* Content Container */}
      <div className="relative  w-full mx-auto  flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 py-10  ">
        
        {/* Left Text Content */}
        <div className=" text-left lg:text-left text-white px-4 lg:px-4  xl:px-18  2xl:px-20 lg:w-2/3">
          <h1 className="text-[64px] sm:text-4xl md:text-5xl font-bold ">
            Your Smart Energy 
            Management System
          </h1>
          <p className="mt-4   text-white/90 max-w-lg mx-auto lg:mx-0 text-[24px] text-left md:max-w-full">
            One platform for insight, optimization, and energy trading. Cut costs, increase returns, and maintain comfort while accelerating the energy transition.
          </p>

          <div className="mt-8 flex flex-wrap  lg:justify-start gap-4">
            <button className="bg-white text-text-1 px-6 py-3 rounded-sm font-semibold hover:bg-gray-200 transition text-[16px]">
              Signup Now &rarr;
            </button>
            <button className="bg-primary-3 text-white px-6 py-3 rounded-sm font-medium hover:bg-gray-900 transition text-[16px]">
              Request Demo
            </button>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="md:w-full lg:w-1/3 flex justify-center items-center p-0 m-0 ">
          {!isPlaying ? (
            <div
              className="relative cursor-pointer rounded-tl-[200px] rounded-bl-[200px] overflow-hidden  sm:w-80 sm:h-80  lg:w-[100%]  md:h-[320px] flex items-center justify-center shadow-xl ml-auto"
              onClick={() => setIsPlaying(true)}
              
            >
              <img
                src={placeholderImage}
                alt="Video Cover"
                className="w-full h-full object-cover"
              />
              {/* Play Button */}
              <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white flex items-center justify-center hover:scale-110 transition bg-black/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 sm:w-8 sm:h-8 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          ) : (
            <video
              src={sampleVideo}
              controls
              autoPlay
              className="relative cursor-pointer rounded-tl-[200px] rounded-bl-[200px] overflow-hidden  sm:w-80 sm:h-80  lg:w-[480px]  md:h-[320px] flex items-center justify-center shadow-xl ml-auto"
            />
          )}
        </div>
      </div>
    </section>
  );
}
