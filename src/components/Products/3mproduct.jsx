import React from "react";
import './3mproduct.css';
import { productsData } from '../../Helper/index.js';


const ThreemProduct = () => {

    const filterProducts = (prodCat, subCat) => {
        const category = productsData.find(cat => cat.prodCat === prodCat);
        if (!category) return [];
        
        const subCategory = category.subCategories.find(sub => sub.subCat === subCat);
        if (!subCategory) return [];
        
        return subCategory.products;
    };
    
    const utlitywaterproduct = filterProducts('Product3M', '3mUilitywater');
    const drinkingWater = filterProducts('Product3M', '3mDrinkingWater');
    const waterSoftner = filterProducts('Product3M', '3mWaterSoftner');
    
    // console.log('products', utlitywaterproduct);

    return (
        <>
            <div className="hmbnnr3mproduct">
                <h3>3M Products</h3>
                <div className="hmbnnr3mproductsection1">
                    <h4>3M Utility Water Filtration</h4>
                    <div className="hmbnnr3mproductssection2">
                        {utlitywaterproduct.map((item, index) => (
                        <div key={index} className="hmbnnr3mproductsectionotrrow">
                            <div className="hmbnnr3mproductimgdesgn">
                                <img src={item.imgSrc} alt={item.productName}  />
                            </div>
                            <p>{item.productName}</p>
                        </div>    
                         ))}                    
                    </div>
                </div>
                <div className="hmbnnr3mproductsection1">
                    <h4>Drinking System</h4>
                    <div className="hmbnnr3mproductssection2">
                        {drinkingWater.map((item, index) => (
                        <div key={index} className="hmbnnr3mproductsectionotrrow">
                            <div className="hmbnnr3mproductimgdesgn">
                                <img src={item.imgSrc} alt={item.productName}  />
                            </div>
                            <p>{item.productName}</p>
                        </div>    
                         ))}                    
                    </div>
                </div>
                <div className="hmbnnr3mproductsection1">
                    <h4>Water Softner</h4>
                    <div className="hmbnnr3mproductssection2">
                        {waterSoftner.map((item, index) => (
                        <div key={index} className="hmbnnr3mproductsectionotrrow">
                            <div className="hmbnnr3mproductimgdesgn">
                                <img src={item.imgSrc} alt={item.productName}  />
                            </div>
                            <p>{item.productName}</p>
                        </div>    
                         ))}                    
                    </div>
                </div>
            </div>

            <>
            <div className="hmbnnr3mproducttglinetxt">
            Upgrade your water quality today with Aqeon Enterprises. Our innovative water softening systems ensure optimal performance, reliability, and efficiency for every application. Trust our expertise and commitment to excellence to provide you with the best water softening solutions tailored to your specific needs. Experience <span>The Aqeon </span> difference – because better water starts here.
            </div>
            </>

        </>

    )
};

export default ThreemProduct;