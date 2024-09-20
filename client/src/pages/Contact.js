import React from "react";
import Layout from "./../components/Layout/Layout";
import "./Contact.css"; // Ensure this file is created in the same directory

const Contact = () => {
    return (
        <Layout title={'Contact us'}>
            <div className="contact-container">
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
                        <img src="/images/arrow_icon.png" alt="" />
                    </button>
                </form>
                <div className="contact-right">
                    <img src="/images/right_img.png" alt="" />
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
