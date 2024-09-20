import React from "react";
import Layout from "./../components/Layout/Layout";
import "./About.css";

const About = () => {
    return (
        <Layout title={'About Green Delight'}>
            <div className="about-container">
                <div className="image-container">
                    <img
                        src="\images\aboutUs.jpg"
                        alt="aboutus"
                        className="about-image"
                    />
                </div>
                <div className="text-container">
                    <h2 className="about-title">Welcome to Green Delight</h2>
                    <p className="about-description">
                        Green Delight is your go-to platform for getting your products delivered within 10 minutes. We are dedicated to providing you with a fast and convenient shopping experience.
                    </p>
                    <p className="about-description">
                        Our mission is to revolutionize the way you shop by bringing your favorite products to your doorstep in record time.
                    </p>
                    <p className="about-description">
                        We are a team of enthusiastic individuals committed to making your life easier with quick and reliable delivery services. Whether you're in need of groceries, household items, or any other products, Green Delight ensures that you receive them in just 10 minutes. Join us and experience the future of shopping!
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;
