import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
          'developpitamaas@gmail.com', // Replace with your service ID
          'YOUR_TEMPLATE_ID', // Replace with your template ID
          formData,
          'YOUR_USER_ID' // Replace with your user ID
        ).then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        }).catch((err) => {
          console.log('FAILED...', err);
          alert('Failed to send the message.');
        });
    
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: ''
        });
      };

    return (
        <>
            <div className="hmbnnrcnct">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="hmbnnrcnctfrmdttl">
                            <h3>Phone</h3>
                            <p>+91 9815183032</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="hmbnnrcnctfrmdttl">
                            <h3>Email</h3>
                            <p>Aqeonenterprises@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="hmbnnrcnctfrmdttl">
                            <h3>Office</h3>
                            <p>Ayali Chownk, Near Autonation, Ludhiana</p>
                        </div>
                    </div>
                </div>
                <div className='hmbnnrcnctfrom'>
                    <form method="POST" className='hmbnnrcnctforminputfld' onSubmit={handleSubmit}>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Full Name' />
                        <br />
                        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
                        <br />
                        <input type='mobile' name='mobile' placeholder='Contact No.' value={formData.mobile} onChange={handleChange} />
                        <br />
                        <textarea name="message" placeholder='Message' value={formData.message} onChange={handleChange}></textarea>
                        <br />
                        <button type='submit'>SUBMIT</button>
                    </form>
                </div>


            </div>
        </>

    );
};


export default ContactForm;