import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenulistItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistItem'>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistItem'>Clients</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistItem'>Contact</Link>
      </div>
      <button className='contactMeBtn' onClick={() => {
  document.getElementsByClassName('footer')[0].scrollIntoView({behavior: 'smooth'});
}}>
  <img src={contact} alt='Contact' className='contact' /> Contact Me
</button>
    </nav>
  );
}

export default Navbar;