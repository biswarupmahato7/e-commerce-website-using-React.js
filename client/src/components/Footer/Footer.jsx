import "./Footer.scss";

import React  from "react";
import { FaLocationArrow, FaMobileAlt,FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                Discover premium sound experiences with our diverse range of headphones. 
                From wireless to noise-cancelling, find the perfect blend of style and functionality
                to elevate your audio journey. Explore now and immerse yourself in superior sound.
                </div>
            </div>

            <div className="col">

                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                    Kali Mandir 89Q3+C9Q, Ranchi Rd,
                     Purulia, West Bengal 723101 <a href="https://maps.app.goo.gl/KEPBpGF8NZht2bE87">View</a>
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text"> PH: 7908589233 </div>
                        
                </div>

                <div className="c-item">
                    <FaEnvelope />
                    <div className="text"> Email: biswarupmahato731@gmail.com </div>
                    
                </div>

            </div>
            <div className="col">

                <div className="title">Catagories</div>
                <span className="text"> Headphones</span>
                <span className="text"> Smart Watch</span>
                <span className="text"> Bluetooth Speakers</span>
                <span className="text"> Wireless Earbuds</span>
                <span className="text"> Home Theater</span>
                <span className="text"> Projectors</span>

            </div>
            <div className="col">

            <div className="title">Pages</div>
            
                <span className="text"> Home</span>
                <span className="text"> About</span>
                <span className="text"> Privacy Policy</span>
                <span className="text"> Returns</span>
                <span className="text"> Terms & Condition</span>
                <span className="text"> Contact Us</span>
               

            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    This Page is Created by Biswarup Mahato
                </div>
                <img src= {Payment} alt="payment options" />
            </div>
        </div>
    </footer>
};

export default Footer;
