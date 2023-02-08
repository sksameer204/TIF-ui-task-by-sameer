import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer-logo'>
          <img src={require("../assets/logo.png")} alt="footer Logo" />
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
          <p>example2020@gmail.com</p>
          <p>(904) 443-0343</p>
        </div>
        <div>
          <h4>More</h4>
          <ul>
            <li>About Us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='social-links'>
          <h4>Social Links</h4>
          <ul className='social-icons'>
            <li><a href="/"><FontAwesomeIcon icon={faInstagram} /> </a></li>
            <li><a href="/"><FontAwesomeIcon icon={faTwitter} /> </a></li>
            <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /> </a></li>
          </ul>
          <p>© 2022 Food Truck Example</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer