import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="fttrsec1">
                    <h3>Get Started Today!</h3>
                    <p>Ready to improve your water quality? Contact Aqeon Enterprises today to schedule a free consultation and discover the best water softening solution for you.</p>
                </div>
                <div className="fttrsec2">
                    <div className="fttcontact"><span>Phone: +91 9815183032</span></div>
                    <div className="fttrsec2prt2">
                        <div className="fttrsec2prt2lftsde">
                            <address>Ayali Chownk, Near Autonation, Ludhiana</address>
                            <p>aqeonenterprises@gmail.com</p>
                        </div>
                        <div className="fttrsec2prt2rgtsde">
                            <h3>Quick Links</h3>
                            <div className="fttrquicklink">
                                <div className="fttrlink1">
                                    <Link to="/">Home</Link>
                                </div>
                                <div className="fttrlink1">
                                    <Link to="/Experience">Experience</Link>
                                </div>
                                <div className="fttrlink1">
                                    <Link to="/Products">Products</Link>
                                </div>
                                <div className="fttrlink1">
                                    <Link to="/brandpartners">Brand Partners</Link>
                                </div>
                                <div className="fttrlink1">
                                    <Link to="/aboutus">About us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fttrfanivalyear">
                <div className="fttrcpyrgt">COPYRIGHT © Aqeon Enterprises, All Rights Reserved.</div>
                <div className="compnylink">Designed & Developed By : PITAMAAS</div>
            </div>
        </>
    )
};

export default Footer;
