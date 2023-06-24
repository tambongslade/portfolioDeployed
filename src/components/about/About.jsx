import React from 'react'
import './about.css'
import me1 from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id='about'>
   <h5>Get to Know</h5>
   <h2>About Me</h2>

   <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={me1}  alt="About Image" />
      </div>
    </div>

    <div className="about__content">
      <div className="about__cards">
        <div className="card">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>1+ Years Working</small>
        </article>
        </div>
        <div className="card">
         <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>10+ Worldwide</small>
        </article>
        </div>
        <div className="card">
         <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>5+ Completed Projects</small>
        </article>
         </div>
      </div>
      
      <div className='text'>
      <p>
        
Welcome to my website As a highly skilled mobile and desktop developer, I specialize in creating cutting-edge applications that deliver exceptional user experiences. With expertise in both native and cross-platform development, I have the ability to bring your digital ideas to life across various platforms and devices. By combining my technical proficiency with a keen eye for user-centered design, I ensure that every application I develop is intuitive, visually appealing, and optimized for maximum engagement. Whether you need a sleek mobile app or a robust desktop solution, I am dedicated to delivering high-quality, custom-built applications that meet your unique requirements. Let's collaborate and transform your vision into a seamless and user-friendly reality
      </p>
      </div>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>
     </div>
   </div>
   </section>
  )
}

export default About

