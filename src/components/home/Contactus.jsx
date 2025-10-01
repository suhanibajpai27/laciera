// Contactus.jsx
import React from "react";
import contactform from "../../assets/images/contactform.png";

const Contactus = () => {
  return (
    <section className="relative w-full">
      {/* Two Columns: Left Image + Right Gray */}
      <div className="grid md:grid-cols-2 min-h-[600px]">
        
        {/* Left Image */}
        <div className="h-[600px] md:h-auto">
          <img
            src={contactform}
            alt="Nature"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Gray Side */}
        <div className="bg-gray-50 h-[600px] md:h-auto"></div>
      </div>

      {/* Centered Overlay Form */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="bg-white shadow-lg rounded-sm p-8 w-full max-w-lg">
          <p className="text-[16px] text-orange-1 font-medium mb-2 uppercase text-left">
            Get In Touch
          </p>
          <h2 className="text-[40px] text-text-1 font-bold mb-4 leading-tight text-left">
            Impactful Results <br /> With Laciera
          </h2>

          <form
            action="mailto:contact@suhanibajpai.com"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                className="w-full border border-[#e3e3e3] rounded-sm p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-[#757575]"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                className="w-full border border-[#e3e3e3] rounded-sm p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-[#757575]"
                required
              />
            </div>

            {/* Phone + Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="Phone"
                placeholder="Phone Number"
                className="w-full border border-[#e3e3e3] rounded-sm p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-[#757575]"
              />
              <input
                type="text"
                name="Subject"
                placeholder="Subject"
                className="w-full border border-[#e3e3e3] rounded-sm p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-[#757575]"
              />
            </div>

            {/* Message */}
            <textarea
              name="Message"
              placeholder="Your Message"
              rows="5"
              className="w-full border border-[#e3e3e3] rounded-sm p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-[#757575]"
              required
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="bg-primary-2 text-white px-8 py-4 rounded-sm font-medium hover:bg-teal-700 transition flex items-center text-[16px]"
            >
              Submit Here →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
