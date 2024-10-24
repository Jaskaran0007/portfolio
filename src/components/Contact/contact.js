import React, { useRef } from 'react';
import './contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ckbi5gr', 'template_jhqu7sq', form.current, 'deeI7Gj9xGI_kUAUu') 
      .then(
        () => {
          console.log('SUCCESS! Email sent.');
          alert('Email sent successfully!'); 
        },
        (error) => {
          console.error('FAILED... Email not sent:', error.text);
          alert('Failed to send email. Please try again later.'); 
        },
      );
  };

  return (
    <div id='contact'>
      <div className='contactHeading'>
        <h2>Contact Info</h2>
      </div>
      <section className='ContactSection'>
        <div className='ContactInfo'>
          <h2 className='contactHeader'>Hire Me</h2>
          <p className='hirePara'>Please fill out the form below to discuss any work opportunities.</p>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='your_name' required />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='your_email' required />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone:</label>
              <input type='tel' id='phone' name='phone' required />
            </div>
            <div className='form-group'>
              <label htmlFor='skills'>Skills:</label>
              <textarea id='skills' name='skills' rows='5' required></textarea>
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message:</label>
              <textarea id='message' name='message' rows='5' required></textarea>
            </div>
            <button type='submit' className='SubmitBtn'>Submit</button>
          </form>
        </div>
        <div className='AddressInfo'>
          <h2 className='contactHeader'>My Address</h2>
          <p className='contactPara'>
            <FaMapMarkerAlt /> State: Uttar Pradesh<br />
            <FaMapMarkerAlt /> City: Greater Noida<br />
            <FaMapMarkerAlt /> Pin Code: 201310<br />
            <FaMapMarkerAlt /> Currently Living: DTC Officer's Welfare Society<br />
            <FaEnvelope /> Email: kahlonjashan439@gmail.com<br /> 
            <FaPhone /> Phone: +91 7467055637 
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;