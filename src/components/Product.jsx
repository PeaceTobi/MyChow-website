import React from 'react'
// import{Nav ,Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBurger,
    faCoffee,
    faUtensils,
  } from "@fortawesome/free-solid-svg-icons";
const Product = () => {
  return (
    <div className='product-icon'>
        <div className='product-title'>
            <h3>Delicious meals from myfoodbay</h3>
            <h2>Most Popular Delicacies</h2>
        </div>
        <div className='product-items'>
            <div>
              <FontAwesomeIcon icon={faCoffee} className='myicon' />
              <p>Popular<br /><b>Breakfast</b></p>
            </div>
            <div>
              <FontAwesomeIcon icon={faBurger} className='myicon' />
              <p>Special<br /><b>Lunch</b></p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUtensils} className='myicon' />
              <p>Lovely<br /><b>Dinner</b></p>
            </div>
        </div>
    </div>
  )
}

export default Product