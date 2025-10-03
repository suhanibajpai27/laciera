import React from "react";

import fb from "../assets/icons/fbw.svg";
import x from "../assets/icons/xw.svg";
import li from "../assets/icons/liw.svg";
import yt from "../assets/icons/ytw.svg";
import phone from "../assets/icons/phone.svg";
import map from "../assets/icons/map.svg";
import envelope from "../assets/icons/envelope.svg";
import logo from "../assets/icons/logo.png";

export default function Footer() {
  return (
    <footer>
    <div className="bg-bg text-white px-6 lg:px-20">
      {/* Top contact section */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left   ">
        {/* Phone */}
        <div className="flex flex-row gap-4 items-center lg:items-start mx-auto">
         
          <img src={phone} className="text-2xl mb-2 border-[3px] border-primary-2 border-dotted rounded-full p-2"  style={{borderStyle: "dotted"}}/>
          
         
          <div>
          <p className="text-[14px] lg:text-[16px] font-regular">Call Us 7/24</p>
          <a href="tel:+2085550112" className="font-semibold text-[16px] md:text-[16px] lg:text-[20px]">
            +208-555-0112
          </a>
          </div>
         
        </div>

        {/* Email */}
        <div className="flex flex-row gap-4 items-center lg:items-start  mx-auto ">
          <img src={envelope} className="text-2xl mb-2 border-[3px] border-primary-2 border-dotted rounded-full p-2"  style={{borderStyle: "dotted"}}/>
          <div>
          <p className="text-[14px] lg:text-[16px] font-regular">Make a Quote</p>
          <a href="tel:+2085550112" className="font-semibold text-[16px] md:text-[16px] lg:text-[20px]">
          suppoert@laciera.in
          </a>
          </div>
         
        </div>

        {/* Location */}
        <div className="flex flex-row gap-4 items-center lg:items-start  mx-auto ">
          <img src={map} className="text-2xl mb-2 border-[3px] border-primary-2 border-dotted rounded-full p-2"  style={{borderStyle: "dotted"}}/>
          <div>
          <p className="text-[14px] lg:text-[16px] font-regular">Location</p>
          <a href="tel:+2085550112" className="font-semibold text-[16px] md:text-[16px] lg:text-[20px]">
          4517 Washington ave.
          </a>
          </div>
         
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30"></div>

      {/* Middle Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-24 text-center md:text-left">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <img
              src={logo}
              alt="Laciera Logo"
              className="w-12 h-12"
            />
            <span className="ml-3 font-semibold text-[16px] md:text-[20px] lg:text-[24px]">LACIERA</span>
          </div>
          <p className="text-[14px]  lg:text-[16px] leading-tight font-light mb-4">
            One platform for insight, optimization, and energy trading.
            Cut costs, increase returns, and maintain comfort while accelerating the energy transition.
          </p>
          <div className="flex space-x-3 justify-center md:justify-start ">
            <a href="#" ><img src={fb} lassName="text-xl hover:text-gray-200 " style={{ color: "#FFF", border: "1px solid white",  padding:"10px" }} /></a>
            <a href="#" style={{ color: "#FFF", border: "1px solid white",  padding:"10px" }}><img src={x} lassName="text-xl hover:text-gray-200"/></a>
            <a href="#" style={{ color: "#FFF", border: "1px solid white",  padding:"10px" }}><img src={li} lassName="text-xl hover:text-gray-200"/></a>
            <a href="#" style={{ color: "#FFF", border: "1px solid white",  padding:"10px" }}><img src={yt} lassName="text-xl hover:text-gray-200"/></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4  ">Quick Links</h3>
          
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#" className="hover:underline ">About</a></li>
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#" className="hover:underline">Consultancy</a></li>
            <li><a href="#" className="hover:underline">Solar System</a></li>
            <li><a href="#" className="hover:underline">Solar Panel</a></li>
            <li><a href="#" className="hover:underline">Style Guide</a></li>
            <li><a href="#" className="hover:underline">License</a></li>
          </ul>
        </div>
      </div>
</div>
      {/* Bottom Section */}
    

      <div className="container min-w-[100vw] px-0 w-full py-4 lg:px-20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 bg-[#E6F1F4] w-full text-text-1" >
          <p>© All Copyright 2024 by <span className="font-semibold">ReEnergy</span></p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Terms & Condition</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
    </footer>
  );
}
