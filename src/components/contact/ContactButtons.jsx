import React from 'react';
import './ContactButtons.css';
import emailIcon from '../../assets/email.svg';

const ContactButtons = () => {
    return (
        <div className="contact-buttons-container">
            <p className="get-in-touch-label">GET IN TOUCH</p>
            <p className="lets-build-label">Let's build something together :)</p>

            <div className="contact-links">
                <a href="tel:+923235067742" target="_blank" rel="noopener noreferrer" className="contact-pill-item">
                    <div className="pill-content">
                        <svg className="pill-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span className="pill-text">+92 323 5067742</span>
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                    <div className="pill-blob"></div>
                </a>

                <a href="mailto:waleedheidar43111@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-pill-item">
                    <div className="pill-content">
                        <img src={emailIcon} alt="email" className="pill-icon" />
                        <span className="pill-text">waleedheidar43111@gmail.com</span>
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                    <div className="pill-blob"></div>
                </a>
            </div>
        </div>
    );
};

export default ContactButtons;
