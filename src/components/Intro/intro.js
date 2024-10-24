import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import Hire from '../../assets/hireme.png';
import Me from '../../assets/me.png';
const Intro = () => {
  return (
   <section id='intro'>
<div className='introContent'>
<span className='Hello'>Hello,</span>
<span className='introtext'>I'm <span className='introName'>Jaskaran</span><br/>Web Developer</span>
<p className='introPara'>I am a skilled and passionate web designer with <br/>experience in creating visually appealing and<br/> user-freindly websites.</p>
<Link><button className='hireMeBtn'><img src={Hire} alt="Hire" className='hireme'/>Hire Me</button></Link>
</div>
<img src={Me} alt="Me" className='me'/>
   </section>
  )
}

export default Intro;