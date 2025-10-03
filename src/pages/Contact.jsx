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
        description="Home > Contact Us"
      />
     <Contactus/>
      <Footer />
   </>
  )
}

export default Contact