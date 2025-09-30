import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Features from '../components/home/Features'
import Offerings from '../components/home/Offerings'
import Brands from '../components/home/Brands'
import Works from '../components/home/Works'
import CTA from '../components/home/CTA'
import Contactus from '../components/home/Contactus'

function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Features />
    <Offerings />
    <Brands />
    <Works />
    <CTA />
    <Contactus />
    <Footer />
    </>
  )
}

export default Home