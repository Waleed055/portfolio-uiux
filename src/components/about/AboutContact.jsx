import React from 'react';
import './AboutContact.css';
import linkedIn from '../../assets/linkedIn.svg';
import email from '../../assets/email.svg';

const AboutContact = () => {
    return (
        <div className="about-contact">
            <div className="contact-btn-wrapper">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <span className="contact-text">Contact</span>
                <div className="contact-icons">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedIn} alt="LinkedIn" />
                    </a>
                    <a href="waleedhassan4311@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={email} alt="Email" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutContact;
