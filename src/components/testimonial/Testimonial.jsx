import React from 'react'
import './testimonial.css'
import T1 from '../../assets/me.png'
import T2 from '../../assets/me.png'
import T3 from '../../assets/me.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
      id: 1,
      review:
        "I couldnt be happier with the mobile app developed by tambong. It exceeded all my expectations in terms of functionality and design. The teams expertise and attention to detail truly shone through, resulting in a user-friendly and visually stunning application. Not only did they deliver the project on time, but their ongoing support and dedication ensured a smooth launch. I highly recommen tambong for anyone looking for top-notch mobile and desktop development services. They truly brought my vision to life! ",
      avatar: T1,
      name: "Mbo Valentine",
    },
    {
      id: 2,
      review:
      "I couldnt be happier with the mobile app developed by tambong. It exceeded all my expectations in terms of functionality and design. The teams expertise and attention to detail truly shone through, resulting in a user-friendly and visually stunning application. Not only did they deliver the project on time, but their ongoing support and dedication ensured a smooth launch. I highly recommen tambong for anyone looking for top-notch mobile and desktop development services. They truly brought my vision to life! ",
       
      avatar: T2,
      name: "Mbah Elsie",
    },
    {
      id: 3,
      review:
      "I couldnt be happier with the mobile app developed by tambong. It exceeded all my expectations in terms of functionality and design. The teams expertise and attention to detail truly shone through, resulting in a user-friendly and visually stunning application. Not only did they deliver the project on time, but their ongoing support and dedication ensured a smooth launch. I highly recommen tambong for anyone looking for top-notch mobile and desktop development services. They truly brought my vision to life! ",
       
      avatar: T3,
      name: "Arrah Mbone",
    },
    {
      id: 4,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
      avatar: T2,
      name: "Njang Elsie",

    },
  ];

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
          return(
         
        <SwiperSlide  key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
         </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
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

export default Testimonial
