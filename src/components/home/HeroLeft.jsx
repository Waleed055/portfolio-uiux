import React from 'react';
import './HeroLeft.css';

const HeroLeft = () => {
    return (
        <div className="hero-left" data-aos="fade-right">
            <h3 className="hero-subtitle">Sr. Graphic Designer</h3>
            <h1 className="hero-title">
                {"Waleed Hassan".split("").map((char, index) => (
                    <span key={index} className="hover-text">{char === " " ? "\u00A0" : char}</span>
                ))}

            </h1>
            <p className="hero-description">
                Graphic Designer | Creating clean, impactful, and experience-driven visual designs.
            </p>

            <div className="hero-cta">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn-container">
                    <div className="resume-btn-back"></div>
                    <div className="resume-btn-pill">
                        Download Resume
                    </div>
                </a>
            </div>

            <div className="hero-social">
                <a href="https://github.com/Waleed055" target="_blank" rel="noopener noreferrer">Github</a> /
                <a href="https://www.linkedin.com/in/waleed-hassan-b211901bb/" target="_blank" rel="noopener noreferrer">Linkedin</a> /
                <a href="https://www.facebook.com/waleed.hassan.96995238" target="_blank" rel="noopener noreferrer">Facebook</a> /
                <a href="https://www.instagram.com/waleeed_hasssan/" target="_blank" rel="noopener noreferrer">Instagram</a> /
                <a href="https://www.fiverr.com/s/e6VmAK3" target="_blank" rel="noopener noreferrer">Fiverr</a> /
                <a href="https://www.upwork.com/freelancers/~01db6ae7361e7f7552" target="_blank" rel="noopener noreferrer">Upwork</a>
            </div>
        </div>
    );
};

export default HeroLeft;
