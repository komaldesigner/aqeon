import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { productsData } from '../../Helper/index.js';
import './Product.css';

const Product = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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


    const filterProducts = (prodCat, subCat) => {
        const category = productsData.find(cat => cat.prodCat === prodCat);
        if (!category) return [];
        
        const subCategory = category.subCategories.find(sub => sub.subCat === subCat);
        if (!subCategory) return [];
        
        return subCategory.products;
    };

const products = filterProducts('Home', 'home');
console.log('products', products);
    

    return (
        <div className='hmbnnrproduct1'>
            <h3>PRODUCT RANGE</h3>
            <div>
                <Slider {...sliderSettings}>
                    {products.map((item, index) => (
                        <div key={index} className="features-slide">
                            <div className='features-card'>
                                <div className="features-image-wrapper">
                                    <img src={item.imgSrc} alt={item.productName} className="features-image" />
                                </div>
                                <p>{item.productName}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='hmbnnrprodct2btn'>
                <button onClick={() => window.location.href = "products"}>View More</button>
            </div>
        </div>
    );
};

export default Product;
