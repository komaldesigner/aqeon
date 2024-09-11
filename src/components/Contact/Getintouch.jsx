import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Getintouch.css';

const Getintouch = () => {

    const h3Ref = useRef(null);
  const h4Ref = useRef(null);

  useEffect(() => {
    // Initialize GSAP animation
    var tl = gsap.timeline({ repeat: -5 });
    tl.to(h3Ref.current, { duration: 30, backgroundPosition: "-960px 0" });
    tl.to(h4Ref.current, { duration: 30, backgroundPosition: "-960px 0" });
  }, []);

  return(
    <>
    <div className="hmbnnrctctgtintuch">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="hmbnnrctgttchtxtlft">
                    <h3 ref={h3Ref} data-aos="fade-down">GET IN TOUCH</h3>
                    <h4 ref={h4Ref} data-aos="fade-down">WITH US</h4>
                    <p data-aos="fade-down">Drop us a Line for Crystal Clear Service</p>
                </div>
                <div className="hmbnnrctgttchtxtlftmobile">
                    <h3 ref={h3Ref}>GET IN TOUCH <h4 ref={h4Ref}>WITH US</h4></h3>                    
                    <p>Drop us a Line for Crystal Clear Service</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="hmbnnrctgttchtxtrgt">
                    <p data-aos="flip-up">
                        We’re here to help you with all your water softening needs. Whether you have questions about our products, need support, or want to schedule a consultation, our team is ready to assist you.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>

  );
};


export default Getintouch;