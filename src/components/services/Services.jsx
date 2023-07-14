import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Front-end Development</h3>
          </div>

          <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>HTML, CSS, and JavaScript</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Proficiency in ReactJS</p>
               </li><li>
                <BiCheck className='service_list-icon'/>
                <p>Responsive Web Design</p>
               </li><li>
                <BiCheck className='service_list-icon'/>
                <p>Web Performance Optimization</p>
               </li><li>
                <BiCheck className='service_list-icon'/>
                <p>Version Control and Collaboration</p>
               </li>
          </ul>

        </article>
        {/* Web Development card */}

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Full-stack Development</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>MongoDB</p>
               </li><li>
                <BiCheck className='service_list-icon'/>
                <p>Express.js</p>
               </li><li>
                <BiCheck className='service_list-icon'/>
                <p>React.js</p>
               </li><li>
                <BiCheck className='service_list-icon'/>
                <p>Node.js</p>
               </li><li>
                <BiCheck className='service_list-icon'/>
                <p>Proficiency in both front-end and back-end development </p>
               </li>
          </ul>

        </article>
    {/* Content Creation */}
        <article className='service'>
          <div className="service_head">
            <h3>Other services</h3>
          </div>

          <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Full-Stack Web Development</p>
               </li>
               <li>
                <BiCheck className='service_list-icon'/>
                <p>Custom Web Application Development</p>
               </li><li>
                <BiCheck className='service_list-icon'/>
                <p>Single-Page Application (SPA) Development</p>
               </li><li>
                <BiCheck className='service_list-icon'/>
                <p>RESTful API Development</p>
               </li><li>
                <BiCheck className='service_list-icon'/>
                <p>Deployment and Maintenance</p>
               </li>
          </ul>

        </article>
      </div>

    </section>
  )
}

export default Services