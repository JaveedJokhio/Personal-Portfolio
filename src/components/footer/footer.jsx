import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>J-A-S</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/javedali.sindhi" target='_blank'><FaFacebookF/></a>
        <a href="https://twitter.com/JavedAliSindi2" target='_blank'><IoLogoTwitter/></a>
        <a href="https://www.instagram.com/javedalisindi/" target='_blank'><FiInstagram/></a>
      
      </div>
      <div className="footer_copyright">
        <small>&copy; J-A-S. All rights reserved</small>
      </div>
    </footer>
  )
}  

export default footer