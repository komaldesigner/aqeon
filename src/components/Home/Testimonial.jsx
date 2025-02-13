import React from 'react';
import './Tesimonial.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { customerSays } from '../../Helper/index.js';


const Testimonial = () => {

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
    return (
        <>
            <div className="hmbnnrtstmoni">
                <h3 data-aos="flip-up">What Our Customers Say</h3>
                <div>
                    <Slider {...sliderSettings}>
                        {customerSays.map((item, index) => (
                            <div key={index} className="features-slide">
                                <div className='hmbnnrtstimonltxt'>
                                    <div className="hmbnnrtstimonltxt">
                                        <p>{item.review}</p>
                                        <span>{item.customerName}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="lastsection" >
                <p>At aqeon enterprises, we are committed to providing exceptional water softening solutions to meet all your needs. Contact us today to learn more about our products and how we can help you achieve the best water quality possible.</p>
            </div>
        </>
    )
};

export default Testimonial;