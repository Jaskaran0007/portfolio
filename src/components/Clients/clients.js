import React from 'react';
import './clients.css';
import Motioncut from '../../assets/motioncut.png';
const Clients = () => {
  return (
    <section className='clientsSection' id='clients'>
    <h2 className='clientsHeader'>Clients & Collaborations</h2>
    <div className='client'>
        <a href="https://www.linkedin.com/posts/jaskaran07_internship-frontenddevelopment-motioncut-activity-7241457063350910976-WYAl?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
      <img src={Motioncut} alt='MotionCut Logo' className='clientLogo' />
      </a>
      <p className='clientsPara'>I had the opportunity to intern at <strong>MotionCut</strong>, where I contributed to various projects . This experience allowed me <br/>to enhance my skills in React js. I am looking forward to collaborating with more clients in the future <br/>to expand my portfolio and skills!</p>
    </div>
    <p className='anotherPara'>Click on <strong>MotionCut</strong> Logo for an Offer Letter</p>
  </section>
  )
}

export default Clients