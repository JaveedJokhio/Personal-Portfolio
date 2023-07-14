import React from 'react'
import './header.css'
import CTA from './CTA'
import Javi from '../../asstes/javi.jpg'
import Headersocial from './Headersocial'

const header = () => {
  return (
    <header>
      <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>JAVEED</h1>
      <h5 className="text-light">Reactjs Developer</h5>
      <h5 className="text-light">Full Stack Developer</h5>
      <CTA></CTA>
      <Headersocial />
      <div className="me">
        <img src={Javi} alt="me" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header