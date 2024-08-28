// src/components/AboutUs.js
import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import qualityIcon from '../../assets/home/about4.svg'; // Adjust the path
import supportIcon from '../../assets/home/about3.svg'; // Adjust the path
import technologyIcon from '../../assets/home/about2.svg'; // Adjust the path
import satisfactionIcon from '../../assets/home/about1.svg'; // Adjust the path
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';


const AboutUs = () => {

     const options = {
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 4
            }
        }
    };
    return (
        <>
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
        <div className="best-sellers">
            <h2>Our Best Sellers</h2>
            <OwlCarousel {...options} className="products">
                <div className="product-card">
                    <div className="product-image">
                        <img src="https://res.cloudinary.com/dtivafy25/image/upload/v1724310062/image/Project_-_2024-06-07T111927.445_gtqkc4.png" alt="Orange Fruit Katli" />
                    </div>
                    <h3>Orange Fruit Katli - 250 g</h3>
                    <p className="price">₹150</p>
                    <button className="add-to-cart">ADD TO CART</button>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src="https://res.cloudinary.com/dtivafy25/image/upload/v1724320412/image/img-2_zstjjc.png" alt="Imli Soft Candy" />
                    </div>
                    <h3>Imli Soft Candy - 250 g</h3>
                    <p className="price">₹50</p>
                    <button className="add-to-cart">ADD TO CART</button>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src="https://via.placeholder.com/150" alt="Mix Fruit Candies" />
                    </div>
                    <h3>Mix Fruit Candies - 250 g</h3>
                    <p className="price">₹150</p>
                    <button className="add-to-cart">ADD TO CART</button>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src="https://res.cloudinary.com/dznkkkcrz/image/upload/v1724391746/img-4_ahm06h.png" alt="Lollipop Fruit Flavour" />
                    </div>
                    <h3>Lollipop Fruit Flavour - 250 g</h3>
                    <p className="price">₹150</p>
                    <button className="add-to-cart">ADD TO CART</button>
                </div>
            </OwlCarousel>
        </div>
        </>
    );
};

export default AboutUs;
