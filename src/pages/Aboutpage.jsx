import React from 'react'
import Navbar from '../components/Navbar'
import Aboutbanner from '../components/Aboutbanner'
import About from '../components/About'
import Aboutstaff from '../components/Aboutstaff'
import Product from '../components/Product'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Ourmenu from '../components/Ourmenu'




const Aboutpage = () => {
  return (
    <div>
        
        <Navbar />
        <Aboutbanner />
        <About />
      
        <Aboutstaff />
        <Product />
        <Ourmenu />
        <Contact />
        <Footer />


    </div>
  )
}

export default Aboutpage