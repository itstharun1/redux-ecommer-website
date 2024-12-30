import React, { useState } from 'react'; 
import emailjs from 'emailjs-com';
import Navbar from './Nav'
import './Dashboard.css'
import CarouselComponent from './Coursel'

function Dashboard() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); 
  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value }); 
  }; 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    emailjs.send( 'service_swie2tf', 'template_ufiup3b', formData, 'q9TsXVE5Mk_LFhpmE' ) 
    .then((response) => { 
      console.log('SUCCESS!', response.status, response.text); 
      alert('Message sent successfully!'); }) 
    .catch((err) => { 
      console.error('FAILED...', err); 
      alert('Failed to send message. Please try again later.'); 
    }); 
    setFormData({ name: '', email: '', message: ''}); 
  };






  return (
    <div className='main-div'>
        <div >
        <Navbar />
        </div>
        <div >
          <CarouselComponent />
        </div>
        <div className="about-container"> 
          <h2 className="about-title">About Us</h2>
          <p className="about-text"> Welcome to E-Shop, your number one source for all things [product, ie: electronics, clothing, etc.]. We're dedicated to providing you the best of [product], with a focus on dependability, customer service, and [unique selling point]. </p>
          <p className="about-text"> Founded in [year] by [founder name], E-Shop has come a long way from its beginnings in [starting location]. When [founder name] first started out, [his/her/their] passion for [brand message - ie: "eco-friendly cleaning products"] drove them to start their own business. </p>
          <p className="about-text"> We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us. </p>
          <p className="about-text"> Sincerely,<br /> [Founder Name], Founder </p>
        </div>
        <div className="contact-container"> 
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-text"> We'd love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions. </p>
          <form className="contact-form" onSubmit={handleSubmit}> 
            <label htmlFor="name">Name</label> 
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name.." required /> 
            <label htmlFor="email">Email</label> 
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email.." required /> 
            <label htmlFor="message">Message</label> 
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write something.." required></textarea>
            <button type="submit" className="contact-button">Submit</button> 
          </form>
        </div>
    </div>
  )
}

export default Dashboard
