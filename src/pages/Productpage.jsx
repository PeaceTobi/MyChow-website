import React from 'react'
import { Navbar } from 'react-bootstrap'
import Aboutbanner from '../components/Aboutbanner'
import Footer from '../components/Footer'
import Ourmenu from '../components/Ourmenu'
import Product from '../components/Product'

const Productpage = () => {
  return (
    <div>
        <Navbar  />
        <Aboutbanner />
        <Product  />
        <Ourmenu  />
        <Footer   />
    </div>
  )
}

export default Productpage