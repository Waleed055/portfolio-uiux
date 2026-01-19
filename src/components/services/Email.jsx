import React from 'react';
import './Email.css';

import emailIcon from '../../assets/email.svg';

const Email = () => {
    return (
        <div className="email-card">
            <p>For any queries, reach out to me via email.</p>
            <a href="mailto:shabirhassan56@gmail.com" target="_blank" rel="noopener noreferrer" className="email-button">
                <span>Email</span>
                <img src={emailIcon} alt="Email" />
            </a>
        </div>
    );
};

export default Email;
