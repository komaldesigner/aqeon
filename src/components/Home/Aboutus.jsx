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
        <div className="about-us-container">
            <div class="about-section">
                <h1 className="about-us-title">ABOUT US</h1>
                <p className="about-us-text">
                    At Aqeon Enterprises, We Are Dedicated To Providing Top-Quality Water Softening Equipment To Ensure The Highest Water Quality For Residential, Commercial, And Industrial Applications. With Years Of Experience And A Commitment To Innovation, Aqeon Enterprises Stands As A Leading Supplier In The Water Treatment Industry.
                </p>
            </div>
            <div className="about-us-icons row">
            <div class="col-lg-3 col-md-6 d-flex justify-content-center">
                <div className="icon-item ">
                    <img src={qualityIcon} alt="Quality Assurance" />
                    <p>Quality Assurance</p>
                </div>
                </div>
                <div class="col-lg-3 col-md-6  d-flex justify-content-center">
                <div className="icon-item ">
                    <img src={supportIcon} alt="Expert Support" />
                    <p>Expert Support</p>
                </div>
                </div>
                <div class="col-lg-3 col-md-6  d-flex justify-content-center">
                <div className="icon-item ">
                    <img src={technologyIcon} alt="Innovative Technology" />
                    <p>Innovative Technology</p>
                </div>
                </div>
                <div class="col-lg-3 col-md-6  d-flex justify-content-center">
                <div className="icon-item">
                    <img src={satisfactionIcon} alt="Customer Satisfaction" />
                    <p>Customer Satisfaction</p>
                </div>
                </div>
            </div>
            <p className="about-us-footer">
                To Deliver Superior Water Softening Solutions That Improve The Quality Of Life And Promote Sustainable Water Usage. We Strive To Offer The Best Products And Services To Our Customers, Ensuring Their Satisfaction And Trust.
            </p>
        </div>
    );
};

export default AboutUs;
