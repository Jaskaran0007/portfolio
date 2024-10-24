import React from 'react';
import './skills.css';
import Ui from '../../assets/Ui.png';
import Website from '../../assets/Website.png';
import App from '../../assets/App.png';
const Skills = () => {
  return (
    <section className='skillSection' id='skills'>
        <span className='skillHeading'>What I Do</span><br/>
        <span className='skillContent'>I am a skilled and passionate web designer with experience in creating visually appealing and user-freindly websites. <br/>I have a strong understanding of design and a keen eye for detail.<br/> I am proficient in HTML,CSS and JavaScript.</span>
<div className='skillBars'>
<div className='skillBar'>
<img className='skillBarImg' alt='Ui' src={Ui}></img>
<div className='skillBarText'>
<h2>UI/UX Design</h2>
</div>
</div>

<div className='skillBar'>
<img className='skillBarImg' alt='Website' src={Website}></img>
<div className='skillBarText'>
<h2>Website Design</h2>
</div>
</div>

<div className='skillBar'>
<img className='skillBarImg' alt='App' src={App}></img>
<div className='skillBarText'>
<h2>App Design</h2>
</div>
</div>




</div>






    </section>
  )
}

export default Skills;