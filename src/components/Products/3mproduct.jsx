import React from "react";
import './3mproduct.css';
import { productsData } from '../../Helper/index.js';
import { useNavigate } from 'react-router-dom';


const ThreemProduct = () => {
    const navigate = useNavigate();

    const filterProducts = (prodCat, subCat) => {
        const category = productsData.find(cat => cat.prodCat === prodCat);
        if (!category) return [];

        const subCategory = category.subCategories.find(sub => sub.subCat === subCat);
        if (!subCategory) return [];

        const productsWithSubCat = subCategory.products.map(product => ({
            ...product,
            subname: subCat,
           // propricetable: proMrpTable
        }));
        console.log('pro', productsWithSubCat);

        return productsWithSubCat;
    };

   

    const utlitywaterproduct = filterProducts('Product3M', '3mUilitywater');
    const drinkingWater = filterProducts('Product3M', '3mDrinkingWater');
    const waterSoftner = filterProducts('Product3M', '3mWaterSoftner');

    // console.log('products', utlitywaterproduct);

    const handleImageClick = (utlitywaterproduct) => {
        let products = utlitywaterproduct
        console.log(products);
        navigate(`/Alltotalproducts/${utlitywaterproduct.id}`, { state: { products } });
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className="hmbnnr3mproduct">
                <h3>3M Products</h3>
                <div className="hmbnnr3mproductsection1">
                    <h4 data-aos="fade-right">3M Utility Water Filtration</h4>
                    <div className="hmbnnr3mproductssection2">
                        {utlitywaterproduct.map((item, index) => (
                            <div key={index} className="hmbnnr3mproductsectionotrrow" id="hmbnnr3mproductsectionotrrow">
                                <div className="hmbnnr3mproductimgdesgn" onClick={() => handleImageClick(item)}
                                    style={{ cursor: 'pointer' }}>
                                    <img src={item.imgSrc} alt={item.productName} />
                                    <div id="hmbnn3brandname"><p>{item.productName}</p></div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="hmbnnr3mproductsection1" id="hmbnnr3mproductsection1">
                <h4 data-aos="flip-up">Drinking System</h4>
                <div className="hmbnnr3mproductssection2">
                    {drinkingWater.map((item, index) => (
                        <div key={index} className="hmbnnr3mproductsectionotrrow">
                            <div className="hmbnnr3mproductimgdesgn" onClick={() => handleImageClick(item)}
                                style={{ cursor: 'pointer' }}>
                                <img src={item.imgSrc} alt={item.productName} />
                                <div id="hmbnn3brandname"><p>{item.productName}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hmbnnr3mproduct">
                <div className="hmbnnr3mproductsection1">
                    <h4 data-aos="fade-right">Water Softner</h4>
                    <div className="hmbnnr3mproductssection2">
                        {waterSoftner.map((item, index) => (
                            <div key={index} className="hmbnnr3mproductsectionotrrow" id="hmbnnr3mproductsectionotrrow">
                                <div className="hmbnnr3mproductimgdesgn" onClick={() => handleImageClick(item)}
                                    style={{ cursor: 'pointer' }}>
                                    <img src={item.imgSrc} alt={item.productName} />
                                    <div id="hmbnn3brandname"><p>{item.productName}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >

            <>
                <div className="hmbnnr3mproducttglinetxt">
                    Upgrade your water quality today with Aqeon Enterprises. Our innovative water softening systems ensure optimal performance, reliability, and efficiency for every application. Trust our expertise and commitment to excellence to provide you with the best water softening solutions tailored to your specific needs. Experience <span>The Aqeon </span> difference – because better water starts here.
                </div>
            </>

        </>

    )
};

export default ThreemProduct;