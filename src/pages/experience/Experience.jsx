import React from 'react';
import './Experience.css';
import ExperienceHeader from '../../components/experience/ExperienceHeader';
import ExperienceDetails from '../../components/experience/ExperienceDetails';

const Experience = () => {
    return (
        <div className="experience-page">
            <ExperienceHeader />
            <ExperienceDetails />
        </div>
    );
};

export default Experience;
