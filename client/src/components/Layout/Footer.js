import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import CSS for styling
// import "./Contact.css"; // Ensure this file is created in the same directory

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Add smooth scrolling effect
    });
};

const Footer = () => {
    return (
        <div className="footer">
            <div className="wave" id="wave1"></div>
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text">Green Delight</h1>
                    <p>Order Fresh Farm Products directly from the Farmers 🔥</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
                        <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
                        <li><Link to="/policy" onClick={scrollToTop}>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>

                    {/* <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="32e93b65-7aaa-4c5a-ad64-7db7971c9f86" />
                        <input type="text" name="name" className="text-input contact-input" placeholder="Your Name" />
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
                        <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message"></textarea>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form> */}
                    <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
                        <div className="contact-left-title">
                            <h2>Get in Touch</h2>
                            <hr />
                        </div>
                        <input type="hidden" name="access_key" value="32e93b65-7aaa-4c5a-ad64-7db7971c9f86" />
                        <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required />
                        <input type="email" name="email" placeholder="Your email" className="contact-inputs" required />
                        <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
                        <button type="submit">
                            submit
                            {/* <img src="/images/arrow_icon.png" alt="" /> */}
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Green Delight. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
