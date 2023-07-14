import React from 'react'
import './testimonials.css'
import AVTR1 from '../../asstes/avatar1.jpg'
import AVTR2 from '../../asstes/avatar2.jpg'
import AVTR3 from '../../asstes/avatar3.jpg'
import AVTR4 from '../../asstes/avatar4.jpg'
// import Swipper core and required modules
import { Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
  avatar: AVTR1,
  name:'Ihsaan Chandio',
  review:'I had the pleasure of working with Javeed who exceeded my expectations in both their technical expertise and professional behavior. He consistently delivered high-quality code and showcased excellent problem-solving skills. Moreover, his communication and collaboration skills were exceptional, making the entire development process smooth and efficient. I highly recommend this developer for his exceptional work and positive attitude.'
  },
  {
  avatar: AVTR2,
  name:'M H Gajju',
  review:'The MERN Stack React developer I worked with demonstrated an outstanding level of dedication and professionalism. He approached every task with enthusiasm and a strong attention to detail.His deep understanding of the MERN stack and React allowed him to develop complex features seamlessly. Additionally, He was always approachable, patient, and willing to explain technical concepts, making it a pleasure to work alongside him. I would not hesitate to collaborate with this developer again.'
  },
  {
  avatar: AVTR3,
  name:'Moazzam Dawach',
  review:'I recently had the opportunity to work with Javeed who proved to be a valuable asset to our team. His technical skills were top-notch, and he consistently delivered high-quality, well-structured code. He was proactive in identifying potential issues and providing efficient solutions. Furthermore, his friendly and cooperative nature fostered a positive work environment and made working with him a great experience. I highly recommend this developer for their technical proficiency and positive attitude.'
  },
  {
  avatar: AVTR4,
  name:'Umair Junejo',
  review:'The MERN Stack React developer I collaborated with demonstrated exceptional professionalism and a strong work ethic. He consistently met project deadlines and delivered exceptional results.His ability to understand complex requirements and transform them into functional features was truly impressive. Additionally, his communication skills were excellent, keeping the entire team informed and updated throughout the development process. Working with this developer was a pleasure, and I highly recommend them for their technical expertise and professionalism.'
  },
  
  ]

  const Testimonials = () => {
    return (
      <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>    
  
        <Swiper className='container testimonials_container' 
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
    >
       {
          data.map(({avatar, name, review}, index ) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar}  />
              </div>
              <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                {review}
                </small>
            </SwiperSlide>
            )
          })
        }
        </Swiper>
  
  
  
  
      </section>
    )
  }
  export default Testimonials