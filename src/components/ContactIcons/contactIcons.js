import React from 'react';
import './contactIcons.css';
import Linkedin from '../../assets/linkedin.png';
import Insta from '../../assets/insta.png';
import Github from '../../assets/github.png';
const ContactIcons = () => {
  return (
    <div className='contactIcons'>
 <a href='https://www.linkedin.com/in/jaskaran07' target='_blank' rel='noopener noreferrer'>
            <img src={Linkedin} alt='Linkedin' className='linkedinImage' />
          </a>


          <a href='https://github.com/Jaskaran0007' target='_blank' rel='noopener noreferrer'>
            <img src={Github} alt='Github' className='githubImage' />
          </a>

          <a href='https://www.instagram.com/jskrn_0.8' target='_blank' rel='noopener noreferrer'>
            <img src={Insta} alt='Instagram' className='instaImage' />
          </a>


    </div>
  )
}

export default ContactIcons;