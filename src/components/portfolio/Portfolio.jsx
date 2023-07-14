import React from 'react'
import './Portfolio.css'
import IMG1 from '../../asstes/portfolio1.png'
import IMG2 from '../../asstes/portfolio2.jpg'
import IMG3 from '../../asstes/portfolio3.jpg'
import IMG4 from '../../asstes/portfolio4.png'
import IMG5 from '../../asstes/newimg.JPG'
import IMG6 from '../../asstes/portfolio6.jpg'

const data=[
  {
    id:1,
    image:IMG1,
    title:'Netflix Clone',
    github:'https://github.com/JaveedJokhio/Netflix-clone',
    demo:'tflix-clone-8fcae.web.app'
  },
  {
    id:2,
    image:IMG2,
    title:'Spotify Clone using Reactjs, Redux & IMDB APis',
    github:'https://github.com/JaveedJokhio/spotify-clone',
    demo:'https://github.com/JaveedJokhio/spotify-clone'
  },
  {
    id:3,
    image:IMG3,
    title:'Movie Browser Website using Reactjs & APIs',
    github:'https://github.com',
    demo:'https://dribble.com/Alien_pixels'
  },
  {
    id:4,
    image:IMG4,
    title:'FIR Registration System Using MERN Stack & Blockchain',
    github:'#',
    demo:'#'
  },
  {
    id:5,
    image:IMG5,
    title:'Personal Portfolios Using Reactjs, which contain 4 pages "Home, About,Portfolio,Contact,"',
    github:'#',
    demo:'#'
  },
  {
    id:6,
    image:IMG6,
    title:'Charts templates & infographics in figma',
    github:'#',
    demo:'#'
  }
]

// Dynamic image //


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio_item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>
            )
          }
          )
        }

        
        
      </div>
    </section>
  )
}

export default Portfolio