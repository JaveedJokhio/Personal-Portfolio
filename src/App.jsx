import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
   <>
   <Header></Header>
   <Nav></Nav>
   <About></About>
   <Experience></Experience>
   <Services></Services>
   <Portfolio></Portfolio>
   <Testimonials></Testimonials>
   <Contact></Contact>
   <Footer></Footer>
   </>
  )
}

export default App