import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Connect = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('Send');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(
      'service_dgn5bxn', // get this from EmailJS dashboard
      'template_izsncfl', // get this from EmailJS dashboard
      formData,
      '2XVMW7hUxgkH7tNBW' // EmailJS user ID
    )
    .then(() => {
      alert('Message sent!');
      setStatus('Send');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    })
    .catch(() => {
      alert('Failed to send message, try again.');
      setStatus('Send');
    });
  };

  return (
    <form className="connect-form" onSubmit={handleSubmit}>
      <div className="connect-row">
        <input type="text" name="firstName" placeholder="FirstName" className="connect-input" value={formData.firstName} onChange={handleChange} />
        <input type="text" name="lastName" placeholder="LastName" className="connect-input" value={formData.lastName} onChange={handleChange} />
      </div>
      <div className="connect-row">
        <input type="email" name="email" placeholder="Email" className="connect-input" value={formData.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" className="connect-input" value={formData.phone} onChange={handleChange} />
      </div>
      <textarea name="message" placeholder="Your message" className="connect-textarea" value={formData.message} onChange={handleChange} />
      <button type="submit" className="connect-button">{status}</button>
    </form>
  );
};

export default Connect;
