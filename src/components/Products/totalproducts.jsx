import React from "react";
import './totalproducts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

const Alltotalproducts = () => {

    const location = useLocation(); // Get the location object to access state
    const { products } = location.state || {}; // Extract state from location

    console.log('otherhotwater', products);
    if (!products) {
        // console.log(product);
        return <div>Product not found</div>;
    }
    const { imgSrc, productName, overview, proDetilTable } = products || {};
    console.log('proDetilTable', proDetilTable);
    const { oviewDes, oviwdespont } = overview || {};


    return (
        <>
            <div className="hmbnnr3mproductother2alltotal">
                {/* product name  */}
                <h3>{productName || ''}</h3>
                <div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="hmbnnr1productdetailimg">
                                <img src={imgSrc} alt={productName} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="hmbnnr1productdetailtext">
                                <h4>Overview</h4>
                                <p>{oviewDes
                                    || ''}</p>
                                <ul>
                                    {
                                        oviwdespont ?
                                            <>
                                                {oviwdespont.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </>
                                            :
                                            <p>
                                                No details available
                                            </p>
                                    }
                                </ul>
                                <div className="hmbnnrtotalproductsrighttxt">
                                    <button>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hmbnnralltotalprodocytsec2">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">

                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="hmbnnralltotalprodocytsec2tabledatdesgm">
                                {proDetilTable && (
                                    <table>
                                        <tr id="tablehdingrow">
                                            <th id="tablehdingfstobly">Attribute Name</th>
                                            <th>Value</th>
                                        </tr>
                                        <>
                                            {proDetilTable.attr.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td>{item.value}</td>
                                                </tr>
                                            ))}
                                        </>
                                    </table>
                                )}
                            </div>

                        </div>
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

export default Alltotalproducts;