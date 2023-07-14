import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import{FiInstagram} from 'react-icons/fi'
import{FaGithub} from 'react-icons/fa'

const Headersocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.facebook.com/javedali.sindhi/" target='_blank'><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/javedalisindi/" target='_blank'><FiInstagram/></a>
        <a href="https://github.com/JaveedJokhio" target='_blank'><FaGithub/></a>
        
    </div>
  )
}

export default Headersocial