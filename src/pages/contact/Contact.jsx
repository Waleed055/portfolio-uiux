import React from 'react';
import ContactHeader from '../../components/contact/ContactHeader';
import ContactButtons from '../../components/contact/ContactButtons';
import ContactBottom from '../../components/contact/ContactBottom';
import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="contact-full-section">
            <div className="contact-upper">
                <ContactHeader />
                <ContactButtons />
            </div>
            <ContactBottom />
        </footer>
    );
};

export default Contact;
