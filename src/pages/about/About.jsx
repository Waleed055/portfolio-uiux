import React from 'react';
import AboutHeader from '../../components/about/AboutHeader';
import AboutDescription from '../../components/about/AboutDescription';
import Tools from '../../components/about/Tools';
import AboutContact from '../../components/about/AboutContact';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="container about-inner">
                <AboutHeader />
                <AboutDescription />
                <Tools />
                <AboutContact />
            </div>
        </section>
    );
};

export default About;
