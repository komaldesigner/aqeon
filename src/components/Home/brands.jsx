import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './brands.css';
import { homeBrands } from '../../Helper/index.js';

const Brands = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };  
    
    console.log('Brands',homeBrands[0]);

    return (
        <div className='hmbnnrproduct1'>
            <h3  data-aos="fade-down">BRAND PARTNERS</h3>
            <div>
                <Slider {...sliderSettings}>
                    {homeBrands.map((item, index) => (
                        <div key={index} className="features-slide">
                            <div className='features-card'>
                                <div className="features-image-wrapper"  >
                                    <img src={item.imgsrc || '.assets/logo/logo.svg'}  alt={item.id} className="features-image" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Brands;
