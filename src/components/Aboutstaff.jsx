import React from 'react'
// import {Button ,Card} from 'react-bootstrap';
import teamOne from '../Img/Team1.png'
import teamTwo from '../Img/Team2.png'
import teamThree from '../Img/Team3.png'
import teamFour from '../Img/Team4.png'
const Aboutstaff = () => {
  return (
    <div className='chef'>
        <div className='team'>
            <h2>Team Members </h2>
            <h1>Our Chief Chefs</h1>
        </div>
        <div className='workers'>
            <div className='our-chef'>
            <img src={teamOne} className='chef-name' alt="team" />
            <div className='middle'>
            <h3>Oyindamola.T</h3>
            <p>Captain Chef</p>
            </div>
            </div>
            <div className='our-chef'>
            <img src={teamTwo} className='chef-name' alt="team" />
            <div className='middle'>
            <h3>John</h3>
            <p>Chef</p>
            </div>
            </div>
            <div className='our-chef'>
            <img src={teamThree} className='chef-name' alt="team" />
            <div className='middle'>
            <h3>David</h3>
            <p>Chief Chef</p>
            </div>
            </div>
            <div className='our-chef'>
            <img src={teamFour} className='chef-name' alt="team" />
            <div className='middle'>
                <h3>Dayo.T</h3>
                <p>Chef</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutstaff