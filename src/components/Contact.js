import React from 'react';
import Connect from './Connect';
import contactImg from '../assets/img/contact-img.svg'; 

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-left">
        <img src={contactImg} alt="Illustration" />
      </div>
      <div className="contact-right">
        <h2 className="contact-title">Get In Touch</h2>
        <Connect />
      </div>
    </section>
  );
};

export default Contact;
