import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Products() {
  return (
   <>
   <Navbar />
   <Banner
        heading="Our Products"
        description="Our integrated system combines cutting-edge hardware and intelligent software to create a comprehensive energy management solution."
      />
      <Footer />
   </>
  )
}

export default Products