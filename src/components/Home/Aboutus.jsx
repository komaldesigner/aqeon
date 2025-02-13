// src/components/AboutUs.js
import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import qualityIcon from '../../assets/home/about4.svg'; // Adjust the path
import supportIcon from '../../assets/home/about3.svg'; // Adjust the path
import technologyIcon from '../../assets/home/about2.svg'; // Adjust the path
import satisfactionIcon from '../../assets/home/about1.svg'; // Adjust the path


const AboutUs = () => {

    return (
        <>
            <div className="about-us-container">
                <div className="about-section">
                    <h1 className="about-us-title" data-aos="fade-right">ABOUT US</h1>
                    <p className="about-us-text" data-aos="fade-down">
                        At aqeon enterprises, we are dedicated to providing top-quality water softening equipment to ensure the highest water quality for residential, commercial, and industrial applications. With years of experience and a commitment to innovation, aqeon enterprises stands as a leading supplier in the water treatment industry.
                    </p>
                </div>
                <div className="about-us-icons row">
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                        <div className="icon-item">
                            <img src={qualityIcon} alt="Quality Assurance" data-aos="zoom-in" />
                            <p>Quality Assurance</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  d-flex justify-content-center">
                        <div className="icon-item">
                            <img src={supportIcon} alt="Expert Support" data-aos="zoom-in" />
                            <p>Expert Support</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  d-flex justify-content-center">
                        <div className="icon-item">
                            <img src={technologyIcon} alt="Innovative Technology" data-aos="zoom-in" />
                            <p>Innovative Technology</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  d-flex justify-content-center">
                        <div className="icon-item">
                            <img src={satisfactionIcon} alt="Customer Satisfaction" data-aos="zoom-in" />
                            <p>Customer Satisfaction</p>
                        </div>
                    </div>
                </div>
                <p className="about-us-footer" data-aos="flip-up">
                To deliver superior water softening solutions that improve the quality of life and promote sustainable water usage. We strive to offer the best products and services to our customers, ensuring their satisfaction and trust.
                </p>
            </div>
        </>
    );
};

export default AboutUs;
