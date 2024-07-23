import React from 'react';
import './ContactForm.css';

const ContactForm = () => {



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
                    <form method="POST" className='hmbnnrcnctforminputfld'>
                        <input type="text" name="name" placeholder='Full Name' />
                        <br />
                        <input type='email' name='email' placeholder='Email' />
                        <br />
                        <input type='mobile' name='mobile' placeholder='Contact No.' />
                        <br />
                        <textarea name="message" placeholder='Message'></textarea>
                        <br />
                        <button type='button'>SUBMIT</button>
                    </form>
                </div>


            </div>
        </>

    );
};


export default ContactForm;