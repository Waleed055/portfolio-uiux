import React from 'react';
import './ExperienceHeader.css';
import men from '../../assets/men.svg';

const ExperienceHeader = () => {
    return (
        <div className="experience-header">
            <h2 className="experience-title">Professional Experience</h2>
            <div className="experience-img-container">
                <img src={men} alt="Working Figure" className="experience-img" />
            </div>
        </div>
    );
};

export default ExperienceHeader;
