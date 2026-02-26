import React from 'react';
import './Email.css';

import emailIcon from '../../assets/email.svg';

const Email = () => {
    return (
        <div className="email-card" data-aos="flip-up" data-aos-delay="300">
            <p>For any queries, reach out to me via email.</p>
            <a href="mailto:waleedhassan4311@gmail.com" target="_blank" rel="noopener noreferrer" className="email-button">
                <span>Email</span>
                <img src={emailIcon} alt="Email" />
            </a>
        </div>
    );
};

export default Email;
