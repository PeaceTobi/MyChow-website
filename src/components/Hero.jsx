import React from 'react'
import { Link } from "react-router-dom";
import heroImage from '../Img/hero.png'
// import backgroundImg from '../Img/background.jpg'

const hero = () => {
  return (
    <div className='flex'>
        <div className='flex-left'>
        <h1>Enjoy Our Delicious Meal</h1>
        <p className='hero-text'> Our menu offers something for everybody, from excellent client
                benefit to<br /> the best quality fixings.
        </p>
        <Link to="/" className="btn test2 py-2 px-4 justify-start">
              Book A Table
            </Link>
        </div>
        <div className='flex-right'>
            <img src={heroImage} className="App-logo" alt="hero" />
        </div>
    </div>
  )
}

export default hero