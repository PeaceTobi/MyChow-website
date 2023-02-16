import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Aboutstaff from '../components/Aboutstaff'
import Footer from '../components/Footer'
import Ourmenu from '../components/Ourmenu'
import Ourservices from '../components/Ourservices'
import Product from '../components/Product'
import Contact from '../components/Contact'


const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Ourservices />
        <About />
        
        <Aboutstaff />
        <Product />
        <Ourmenu />
        <Contact />
        <Footer />
    </div>
  )
}

export default Homepage