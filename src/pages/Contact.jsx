import React from 'react';
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactus from "../components/home/Contactus"

function Contact() {
  return (
   <>
   <Navbar />
   <Banner
        heading="Contact"
        description="As a specialized partner in energy management, we understand the challenges your organization faces. The energy market is changing rapidly, and new regulations require smart adjustments to your energy strategy."
      />
     <Contactus/>
      <Footer />
   </>
  )
}

export default Contact