import React from "react";
import './otherproducts.css';
import { productsData } from '../../Helper/index.js';
import { useNavigate } from 'react-router-dom';

const ThreemProduct = () => {
    const navigate = useNavigate();

    const filterProducts = (prodCat, subCat) => {

        // const category = productsData.find(cat => cat.prodCat === prodCat);
        // if (!category) return [];

        // const subCategory = category.subCategories.find(sub => sub.subCat === subCat);
        // if (!subCategory) return [];

        // return subCategory.products;


        const category = productsData.find(cat => cat.prodCat === prodCat);

        // Log the category for debugging
        //  console.log("Category:", category);

        if (!category) return [];

        const subCategory = category.subCategories.find(sub => sub.subCat === subCat);

        // Log the subCategory for debugging
        // console.log("SubCategory:", subCategory);

        if (!subCategory) return [];
     //   console.log(subCategory.products);

        const productsWithSubCat = subCategory.products.map(product => ({
            ...product,
            subname: subCat
           // subname: subCat
        }));

       // console.log(productsWithSubCat);

        return productsWithSubCat;
    };
    


    const otherutlitywater = filterProducts('ProductOther', 'otherUtlitywater');
    const otherWatersftnr = filterProducts('ProductOther', 'otherWaterSoftner');
    const otherhotwater = filterProducts('ProductOther', 'otherHotWater');
    const otherpumps = filterProducts('ProductOther', 'otherPumps');
    const otherdrainchannel = filterProducts('ProductOther', 'otherDrainchannel');
    const othermanhole = filterProducts('ProductOther', 'otherManholecovers');

    // console.log('pro', otherutlitywater);



    // const handleImageClick = (otherhotwater) => {
    //     let products = otherhotwater
    //    // console.log(otherhotwater);
    //     navigate(`/Alltotalproducts/${otherhotwater.id}`, { state: { products } });
    //     window.scrollTo(0, 0);

    // };
    const handleImageClick = (otherhotwater) => {
        let products = otherhotwater;
        console.log(products);

        // Navigate to the URL with product ID and pass both products and subCat in the state
        navigate(`/Alltotalproducts/${otherhotwater.id}`, { state: { products } });

        // Scroll to top of the page
        window.scrollTo(0, 0);
    };
    // console.log(otherutlitywater);
    // console.log('products', utlitywaterproduct);

    return (
        <>
            <div className="hmbnnr3mproductother2">
                <h3>Other Products</h3>
                <div className="hmbnnr3mproductsection1other2">
                    <div>
                        <h4 data-aos="fade-right">Utility Water Filtration</h4>
                        <div className="hmbnnr3mproductssectionother2">
                            {otherutlitywater.map((item, index) => (
                                <div key={index} className="hmbnnr3mproductsectionotrrowother">
                                    <div className="hmbnnr3mproductimgdesgnother" onClick={() => handleImageClick(item)}
                                        style={{ cursor: 'pointer' }}>
                                        <img src={item.imgSrc} alt={item.productName} />
                                        <div id="hmbnn3brandname"><p>{item.productName}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 data-aos="fade-right">Water Softner</h4>
                        <div className="hmbnnr3mproductssectionother2">
                            {otherWatersftnr.map((item, index) => (
                                <div key={index} id="hmbnnr3mproduothedesing">
                                    <div className="hmbnnr3mproductimgdesgnother" onClick={() => handleImageClick(item)}
                                        style={{ cursor: 'pointer' }}>
                                        <img src={item.imgSrc} alt={item.productName} />
                                        <div id="hmbnn3brandname"><p>{item.productName}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="hmbnnr3mproductsection1other2">
                    <div>
                        <div className="hmbnnr3mproductssectionother2" id="hmbnnr3othrprodhdintxt">
                            <h4 data-aos="fade-right">Hot <br />Water <br />System</h4>
                            {otherhotwater.map((item, index) => (
                                <div key={index} className="hmbnnr3mproductsectionotrrowother">
                                    <div className="hmbnnr3mproductimgdesgnother" onClick={() => handleImageClick(item)}
                                        style={{ cursor: 'pointer' }}>
                                        <img src={item.imgSrc} alt={item.productName} />
                                        <div id="hmbnn3brandname"><p>{item.productName}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 data-aos="fade-right">Pumps</h4>
                        <div className="hmbnnr3mproductssectionother2">
                            {otherpumps.map((item, index) => (
                                <div key={index} className="hmbnnr3mproductsectionotrrowother">
                                    <div className="hmbnnr3mproductimgdesgnother" onClick={() => handleImageClick(item)}
                                        style={{ cursor: 'pointer' }}>
                                        <img src={item.imgSrc} alt={item.productName} />
                                        <div id="hmbnn3brandname"><p>{item.productName}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hmbnnr3mproductsection1">
                    <h4 data-aos="fade-right">Drain Channel</h4>
                    <div className="hmbnnr3mproductssection2" id="hmbnnr3proddesnchngedrin">
                        {otherdrainchannel.map((item, index) => (
                            <div key={index} className="hmbnnr3mproductsectionotrrowother">
                                <div className="hmbnnr3mproductimgdesgnother" onClick={() => handleImageClick(item)}
                                    style={{ cursor: 'pointer' }}>
                                    <img src={item.imgSrc} alt={item.productName} />
                                    <div id="hmbnn3brandname"><p>{item.productName}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hmbnnr3mproductsection1">
                    <h4 data-aos="fade-right">Manhole Covers</h4>
                    <div className="hmbnnr3mproductssection2" >
                        {othermanhole.map((item, index) => (
                            <div key={index} className="hmbnnr3mproductsectionotrrowother">
                                <div className="hmbnnr3mproductimgdesgnother" onClick={() => handleImageClick(item)}
                                    style={{ cursor: 'pointer' }}>
                                    <img src={item.imgSrc} alt={item.productName} />
                                    <div id="hmbnn3brandname"><p>{item.productName}</p></div>
                                </div>
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