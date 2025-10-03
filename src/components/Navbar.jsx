import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Package, Info, Phone, Layers } from "lucide-react";
import email from "../assets/icons/email.svg";
import alarm from  "../assets/icons/alarm.svg";
import fb from "../assets/icons/fb.svg";
import x from "../assets/icons/x.svg";
import li from "../assets/icons/li.svg";
import yt from "../assets/icons/yt.svg";
import logo from "../assets/icons/logo.png";
import dd from "../assets/icons/dd.svg";
import call from "../assets/icons/call.svg";
import arrow from "../assets/icons/arrow.svg";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="w-full overflow-auto ">
      {/* Top Bar */}
      <div className="bg-[#0A778D]/10 text-sm hidden lg:block px-4 lg:px-4  xl:px-18  2xl:px-20">
        <div className=" mx-auto flex flex-wrap items-center justify-between  py-2 ">
          {/* Left */}
          <div className="flex flex-wrap items-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
             
              <span className="text-green-600"><img src={email} size={15} /></span>
              <span className="text-[15px]">info@laciera.energy</span> 
          
            </div>
            <div className="flex items-center gap-2 ">
              <span className="text-green-600"><img src={alarm} size={15} /></span>
              <span className="text-[15px]">55 Main Street, 2nd block, Spain</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center  gap-4 text-gray-700">
            <span className="text-[16px] font-medium">Follow Us:</span>
            <div className="flex items-center gap-2">
            <a href="#" className="hover:text-primary-2"><img src={fb} size={10} /></a>
              <a href="#" className="hover:text-primary-2"><img src={x} size={10} /></a>
              <a href="#" className="hover:text-primary-2"><img src={li} size={10} /></a>
              <a href="#" className="text-primary-2"><img src={yt} size={10} /></a>
            </div>
          </div>
        </div>
      </div>

     

    
    </header>
     {/* Navbar */}
     <nav className="bg-white shadow-sm sticky top-0 z-50 px-4 lg:px-4  xl:px-18  2xl:px-20 ">
     <div className=" mx-auto flex items-center justify-between  py-3">
       <div className="flex gap-[44px]">

      
       {/* Logo */}
       <div >
       <Link to="/" className="flex items-center gap-3">
        <span className="max-w-[47px] max-h-[60px]"> <img
           src={logo} 
           alt="Laciera Logo"
           className="w-[100%] h-[100%]"
         /></span>
         <span className="text-[24px] font-semibold text-primary-2">LACIERA</span>
         </Link>
       </div>

       {/* Desktop Menu */}
       <div className="hidden lg:flex items-center gap-8 text-text-1  ">
         <Link to="/" className="text-text-1 hover:text-primary-2  font-semibold text-[16px] link-current">Home</Link>
         <div className="relative group">
           <Link 
to="/solutions" className="flex items-center gap-1 hover:text-primay-2 link-current text-[16px] font-semibold" >
             Solutions
             <span><img src={dd} size={8} /></span>
           </Link>
           {/* Dropdown */}
           <div className="absolute hidden group-hover:block bg-white shadow rounded mt-2 p-2 z-20 "> 
             <Link to="/solution1" className="block px-4 py-2 hover:bg-gray-100 ">Solution</Link>
             <Link to="/solution2" className="block px-4 py-2 hover:bg-gray-100 ">Solution </Link>
           </div>
         </div>
         <Link to="/products" className="  text-[16px] font-semibold hover:text-primay-2 link-current">Products</Link>
         <Link to="/about" className="hover:text-primay-2 link-current  text-[16px] font-semibold">About</Link>
         <Link to="/contact" className="hover:text-primay-2 link-current  text-[16px] font-semibold">Contact</Link>
       </div>
       </div>
       {/* Right Side (Desktop) */}
       <div className="hidden lg:flex items-center gap-6">
         <div className="flex items-center gap-2 text-gray-700">
           <span><img src={call} size={15} /></span>
           <span className="font-semibold text-[16px]">+208-666-0112</span>
         </div>
         <Link
           to="/quote"
           className="bg-primary-2 text-white px-6 py-4 rounded hover:bg-green-700 text-[16px] font-semibold flex items-center gap-2"
         >
           Get A Quote <span><img src={arrow} /></span>
         </Link>
       </div>

       {/* Mobile Menu Button */}
       <button
         className="lg:hidden text-text-1"
         onClick={() => setIsOpen(!isOpen)}
       >
         {isOpen ? <X size={28} /> : <Menu size={28} />}
       </button>
     </div>

     {/* Mobile Menu (Dropdown from top) */}
     {isOpen && (
       <div className="lg:hidden bg-white px-4 pb-4 space-y-2 fixed top-18 w-full">
         <Link to="/" className="block  text-text-1 hover:text-primary-2  font-semibold  link-current">Home</Link>
         <Link to="/solutions" className="block text-text-1 hover:text-primary-2  font-semibold  link-current">Solutions</Link>
         <Link to="/products" className="block text-text-1 hover:text-primary-2  font-semibold  link-current">Products</Link>
         <Link to="/about" className="block text-text-1 hover:text-primary-2  font-semibold  link-current">About</Link>
         <Link to="/contact" className="block text-text-1 hover:text-primary-2  font-semibold  link-current">Contact</Link>
         <div className="pt-2 border-t border-gray-200">
           <div className="flex items-center justify-center gap-2 py-2 text-text-1">
           <span className="text-primary-2"><img src={email} size={15} /></span>
           <span className="text-[15px]">info@laciera.energy</span> 
           </div>
           <Link
             to="/quote"
             className="inline-flex items-center justify-center bg-primary-2 text-white px-4 py-2 rounded-sm px-8 py-4 hover:bg-primary-1 "
           >
             Get A Quote →
           </Link>
         </div>
       </div>
     )}
   </nav>


     {/* Bottom Navbar for Mobile/Tablet */}
     {/* <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md flex justify-around items-center py-2 md:hidden z-50">
        <Link to="/" className="flex flex-col items-center text-sm text-text-1 hover:text-primary-2  font-semibold text-[16px] link-current ">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link to="/solutions" className="flex flex-col items-center text-sm text-text-1 hover:text-primary-2  font-semibold text-[16px] link-current">
          <Layers size={20} />
          <span>Solutions</span>
        </Link>
        <Link to="/products" className="flex flex-col items-center text-sm text-text-1 hover:text-primary-2  font-semibold text-[16px] link-current">
          <Package size={20} />
          <span>Products</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center text-sm text-text-1 hover:text-primary-2  font-semibold text-[16px] link-current">
          <Info size={20} />
          <span>About</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center text-sm text-text-1 hover:text-primary-2  font-semibold text-[16px] link-current">
          <Phone size={20} />
          <span>Contact</span>
        </Link>
      </div> */}
  </>
  );
}
