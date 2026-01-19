import React from 'react';
import './HeroLeft.css';

const HeroLeft = () => {
    return (
        <div className="hero-left">
            <h3 className="hero-subtitle">Sr. Software Engineer</h3>
            <h1 className="hero-title">
                {"Waleed Hassan".split("").map((char, index) => (
                    <span key={index} className="hover-text">{char === " " ? "\u00A0" : char}</span>
                ))}

            </h1>
            <p className="hero-description">
                Graphic Designer | Creating clean , impactful , and experience - driven visual designs.
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
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a> /
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a> /
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> /
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </div>
    );
};

export default HeroLeft;
