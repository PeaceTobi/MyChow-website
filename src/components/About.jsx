import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import aboutImage from '../Img/about-1.jpg'
import aboutTwo from '../Img/about-2.jpg'
import aboutThree from '../Img/about-3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUtensils } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-left'>
        <Carousel variant="dark">
      <Carousel.Item>
        <img src={aboutImage} alt="about" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={aboutTwo} alt="about"  />
      </Carousel.Item>
      <Carousel.Item>
        <img src={aboutThree} alt="about" />
        </Carousel.Item>
    </Carousel>

        </div>
        <div className='about-right'>
            <h2>About us</h2>
              <h1 className="first-text">
              <FontAwesomeIcon icon={faUtensils}  className="icon" />
                Myfoodbay's story
              </h1>
              <p className="mb-4">
                CEO, Ayantunji Peace, opened the first Myfoodbay's Restaurant in
                Lagos on December 27, 2022. Today, there are 7 branches all
                over West Africa. Myfoodbay Restaurants are well known with a
                substantial gathering of people including families, kids,
                seniors, and business experts. Our benevolent condition is
                perfect for praising unique events, facilitating a business
                lunch, or assembling for a flavorful dinner with loved ones.
                Open day by day for lunch and dinner, Myfoodbay offers a
                choice of naturally arranged things utilizing just the best
                fixings accessible.
              </p>
              <p className="mb-4">
                Our top picks incorporate crisp fish, rotisserie chicken, infant
                back pork ribs. New prepared pot pie, strength plates of mixed
                greens, wood-let go pizzas, pasta, sandwiches, burgers, and
                more. Myfoodbay's heated merchandise and treats including our
                Six-Layer Chocolate Motherlode Cake, Scratch Carrot Cake, and
                delectably rich cream cheddar pies are prevalent top choices
                with our visitors.
              </p>
            <div className='about-down'>
          <div className='about-5'>
            <h1>5</h1>
            <div className='exp'>
              <p>Years of <br /><b>EXPERIENCE</b></p>
            </div>
          </div>
         

          
         
        </div>
        
        </div>
        
        
    </div>
  )
}

export default About