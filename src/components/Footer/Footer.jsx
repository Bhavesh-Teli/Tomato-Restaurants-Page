import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-cotent">
        <div className="footer-content-left"> 
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe enim incidunt sed error aperiam repudiandae, nihil iste sunt. Possimus recusandae dolorum voluptates hic doloribus assumenda eaque esse est ex tempora laudantium obcaecati perspiciatis, consequuntur aperiam, nihil voluptatem harum dolores amet! Necessitatibus perspiciatis eveniet explicabo voluptate rem debitis culpa officia praesentium.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com-All Right Reserved.</p>
    </div>
  )
}

export default Footer
