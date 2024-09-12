import React, { useState } from 'react';
import './totalproducts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import emailjs
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Alltotalproducts = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    brand: '',
    product: '',
    message: '',
  });

  const [showForm, setShowForm] = useState(false); // To toggle the form

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_30wlvar'; // Replace with your service ID
    const templateId = 'template_mgokmfh'; // Replace with your template ID
    const publicKey = '0JXKygSwTR_Sxlsbz'; // Replace with your public key

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      city: formData.city,
      brand: formData.brand,
      product: formData.product,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Enquiry Submitted!', {
          position: 'top-center', // Corrected reference
          autoClose: 3000, // Time duration in milliseconds
        });
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send enquiry. Please try again.');
      });

    setShowForm(false); // Close the form after submission
  };

    //   filter

    const location = useLocation(); // Get the location object to access state
    const { products } = location.state || {}; // Extract state from location

    //console.log('otherhotwater', products);
    if (!products) {
        // console.log(product);
        return <div>Product not found</div>;
    }
   
    const { subname, imgSrc, productName, overview, proDetilTable } = products || {};
    console.log('subCat', subname);
    const { oviewDes, oviwdespont } = overview || {};
    //const {subCat} = subcategory || {};


    


    return (
        <>
          <ToastContainer />
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
                                    <button onClick={() => setShowForm(true)}>Enquire Now</button>
                                </div>
                                {showForm && (
        <div className="enquire-form-container">
          <div className="enquire-form">
            <button className="close-modal-btn" onClick={() => setShowForm(false)}>X</button>
            <h2>Enquire Now</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Brand</option>
                  <option value={subname
                     || ''}>{subname
                   || ''}</option>
                  {/* Add more brands */}
                </select>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Product</option>
                  <option value={productName || ''}>{productName || ''}</option>
                  {/* Add more products */}
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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