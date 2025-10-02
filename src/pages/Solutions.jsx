import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import S1 from '../components/solutions/S1'
import S2 from '../components/solutions/S2'
import S3 from '../components/solutions/S3'

function Solutions() {
  return (
   <>
   <Navbar />
   <Banner
        heading="Solutions"
        description="Our Integrated System Combines Cutting-Edge Hardware And Intelligent Software To Create A Comprehensive Energy Management Solution."
      />
      <S1/>
      <S2/>
      <S3/>
      <Footer />
   </>
  )
}

export default Solutions