import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Approach from "../components/about/Approach"

function Products() {
  return (
   <>
   <Navbar />
   <Banner
        heading="About"
        description="As a specialized partner in energy management, we understand the challenges your organization faces. The energy market is changing rapidly, and new regulations require smart adjustments to your energy strategy."
      />
      <Approach/>
      <Footer />
   </>
  )
}

export default Products