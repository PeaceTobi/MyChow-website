import React from 'react'
import {Nav } from 'react-bootstrap';
const Aboutbanner = () => {
  return (
    <div>
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-12 text-center text-lg-start">
            <h1 className="display-3 text-white text-center animated slideInLeft">
              About Us
            </h1>
            <div className="d-flex justify-content-center align-items-center breadcrumb">
              <li>
                <Nav.Link  href="/"className="text-decoration-none text-white" >
                  HOME
                  <span className="text-white"> / </span>
                </Nav.Link>
              </li>
              <li className="text-white">
                <Nav.Link  href="/about" className="text-decoration-none ms-1" >
                  ABOUT
                  <span className="text-white"> / </span>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link  href="/contact"
                  className="text-decoration-none text-white ms-1"
                  
                >
                  CONTACT
                </Nav.Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Aboutbanner