import React from 'react'
import {Card} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeadset,
  faUserTie,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
const Ourservices = () => {
  return (
    <div className='services'>
        <div className='title'>
        <h2>Our Services</h2>
        </div>
        <div className='services-flex'>
        <Card className='box' border='0' style={{ width: '18rem' ,height:'50vh'}}>
       <Card.Body> 
        <Card.Title>
          <FontAwesomeIcon icon={faUserTie} className='service-icon' />
        </Card.Title>
        <h4>Chief Chef</h4>
        <p>
                    We hire only the best chefs in Africa. All of whom undergo a
                    6 months training under our chief chef, who is non other
                    than Mr. Dayo D1, Award winner of the Nigerian Men
                    can cook award 2002
                  </p>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
       </Card.Body> 
    </Card> 
    <Card className='box' border='0' style={{ width: '18rem',height:'50vh' }}>
      <Card.Body>
        <Card.Title> <FontAwesomeIcon icon={faUtensils} className='service-icon' />
        </Card.Title>
        <h4>Healthy Food</h4>
        <p>
                    We use only the healthiest methods to cook our foods.
                    Routine cleanups have also been set up for our equipments,
                    utensils, furnitures and co.
                  </p>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    <Card className='box'border='0' style={{ width: '18rem' ,height:'50vh'}}>
      <Card.Body>
        <Card.Title> <FontAwesomeIcon icon={faCartPlus} className='service-icon' /></Card.Title>
        <h4>Online Order</h4>
        <p>
                    You can now get your meals delivered to your doorstep by
                    placing your orders on our website or mobile app.
                  </p>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    <Card className='box' border='0' style={{ width: '18rem',height:'50vh' }}>
      <Card.Body>
        <Card.Title> <FontAwesomeIcon icon={faHeadset} className='service-icon' /></Card.Title>
        <h4>Customer Care</h4>
        <p>
                    Any issues? We will resolve them as soon as they appear with
                    our hardworking Customer support team who are made available
                    to you 24/7
                  </p>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
        </div>
    </div>

    

    
  )
}

export default Ourservices