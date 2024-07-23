import React from "react";
import './otherproducts.css';
import { productsData } from '../../Helper/index.js';


const ThreemProduct = () => {

    const filterProducts = (prodCat, subCat) => {
        const category = productsData.find(cat => cat.prodCat === prodCat);
        if (!category) return [];

        const subCategory = category.subCategories.find(sub => sub.subCat === subCat);
        if (!subCategory) return [];

        return subCategory.products;
    };

    const otherutlitywater = filterProducts('ProductOther', 'otherUtlitywater');
    const otherWatersftnr = filterProducts('ProductOther', 'otherWaterSoftner');
    const otherhotwater = filterProducts('ProductOther', 'otherHotWater');
    const otherpumps = filterProducts('ProductOther', 'otherPumps');
    const otherdrainchannel = filterProducts('ProductOther', 'otherDrainchannel');
    const othermanhole = filterProducts('ProductOther', 'otherManholecovers');

    // console.log('products', utlitywaterproduct);

    return (
        <>
            <div className="hmbnnr3mproductother2">
                <h3>Other Products</h3>
                <div className="hmbnnr3mproductsection1other2">
                    <div>
                        <h4>Utility Water Filtration</h4>
                        <div className="hmbnnr3mproductssectionother2">
                            {otherutlitywater.map((item, index) => (
                                <div key={index} className="hmbnnr3mproductsectionotrrowother">
                                    <div className="hmbnnr3mproductimgdesgnother">
                                        <img src={item.imgSrc} alt={item.productName} />
                                    </div>
                                    <p>{item.productName}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4>Water Softner</h4>
                        <div className="hmbnnr3mproductssectionother2">
                            {otherWatersftnr.map((item, index) => (
                                <div key={index} className="hmbnnr3mproductsectionotrrowother">
                                    <div className="hmbnnr3mproductimgdesgnother">
                                        <img src={item.imgSrc} alt={item.productName} />
                                    </div>
                                    <p>{item.productName}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="hmbnnr3mproductsection1other2">
                    <div>
                    <h4>Hot Water System</h4>
                        <div className="hmbnnr3mproductssectionother2">
                            {otherhotwater.map((item, index) => (
                                <div key={index} className="hmbnnr3mproductsectionotrrowother">
                                    <div className="hmbnnr3mproductimgdesgnother">
                                        <img src={item.imgSrc} alt={item.productName} />
                                    </div>
                                    <p>{item.productName}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                    <h4>Pumps</h4>
                        <div className="hmbnnr3mproductssectionother2">
                            {otherpumps.map((item, index) => (
                                <div key={index} className="hmbnnr3mproductsectionotrrowother">
                                    <div className="hmbnnr3mproductimgdesgnother">
                                        <img src={item.imgSrc} alt={item.productName} />
                                    </div>
                                    <p>{item.productName}</p>
                                </div>
                            ))}
                        </div>
                    </div> 
                </div>

                <div className="hmbnnr3mproductsection1">
                    <h4>Drain Channel</h4>
                    <div className="hmbnnr3mproductssection2">
                        {otherdrainchannel.map((item, index) => (
                            <div key={index} className="hmbnnr3mproductsectionotrrowother">
                                <div className="hmbnnr3mproductimgdesgnother">
                                    <img src={item.imgSrc} alt={item.productName} />
                                </div>
                                <p>{item.productName}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="hmbnnr3mproductsection1">
                    <h4>Manhole Covers</h4>
                    <div className="hmbnnr3mproductssection2">
                        {othermanhole.map((item, index) => (
                            <div key={index} className="hmbnnr3mproductsectionotrrowother">
                                <div className="hmbnnr3mproductimgdesgnother">
                                    <img src={item.imgSrc} alt={item.productName} />
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