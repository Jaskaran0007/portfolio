import React from 'react';
import './works.css';
import loginSignup from '../../assets/loginSignup.png';
import chatGPT from '../../assets/chatGPT.png';
import ComingSoon from '../../assets/ComingSoon.png';
const Works = () => {
  return (
    <section className='worksSection' id='works'>
<div>
<h2 className='worksHeader'>My Portfolio</h2>
<p className='worksPara'>Welcome to my portfolio! Here, I present a selection of my work that showcases my skills and creativity. While my project list may be limited,<br/> each piece reflects my dedication to quality and my passion for learning. I invite you to explore my work <br/>and see how I can bring value to your next project!</p>

</div>

<div className='myProjects'>
<div className='project1'>
          <a href='https://github.com/Jaskaran0007/login-signup-project' target='_blank' rel='noopener noreferrer'>
            <img src={loginSignup} alt='Login-Signup-Project' className='projectImage' />
          </a>
          <p className='LoginSignup'>Login Signup Project</p>
        </div>

        <div className='project2'>
          <a href='https://github.com/Jaskaran0007/chat-gpt-clone' target='_blank' rel='noopener noreferrer'>
            <img src={chatGPT} alt='ChatGPT Clone' className='projectImage' />
          </a>
          <p className='ChatGPT'>ChatGPT Clone</p>
        </div>

        <div className='comingSoon'>
        <img src={ComingSoon} alt='Coming Soon' className='comingSoonImage' />
        <p className='comingSoonText'>More projects coming soon!</p>
      </div>




</div>



    </section>
  )
}

export default Works;