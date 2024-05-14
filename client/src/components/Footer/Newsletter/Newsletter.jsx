import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa6"

import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text"> Newsletter</span>
            <span className="big-text">Sign Up For latest Updates and Offers</span>
            <div className="form">
                <input type="text" placeholder="Email"/>
                <button>Subscribe</button>
            </div>
            <div className="text">Will be used in accordance with our Privacy Policy</div>
            <div className="social-icons">
                <div className="icons">
                    <FaFacebookF size={14}/>
                </div>

                <div className="icons">
                    <FaInstagram size={14}/>
                </div>

                <div className="icons">
                    <FaTwitter size={14}/>
                </div>

                <div className="icons">
                    <FaLinkedinIn size={14}/>
                </div>
            </div>

        </div>

    </div>;
};

export default Newsletter;
