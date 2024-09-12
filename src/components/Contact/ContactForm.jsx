import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => { 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_30wlvar'; // Replace with your service ID
    const templateId = 'template_3wza7sj'; // Replace with your template ID
    const publicKey = '0JXKygSwTR_Sxlsbz'; // Replace with your public key

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {

        console.log('SUCCESS!', response.status, response.text);

        toast.success('Enquiry Submitted!', {
          position: 'top-center', // Corrected reference
          autoClose: 3000, // Time duration in milliseconds
        });
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: ''
        })

      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send enquiry. Please try again.');
      });
  };

    return (
        <>
        <ToastContainer />
            <div className="hmbnnrcnct">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="hmbnnrcnctfrmdttl">
                            <h3 data-aos="fade-right">Phone</h3>
                            <p data-aos="fade-down">+91 9815183032</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="hmbnnrcnctfrmdttl">
                            <h3 data-aos="fade-right">Email</h3>
                            <p data-aos="fade-down">Aqeonenterprises@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="hmbnnrcnctfrmdttl">
                            <h3 data-aos="fade-right">Office</h3>
                            <p data-aos="fade-down">Ayali Chownk, Near Autonation, Ludhiana</p>
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