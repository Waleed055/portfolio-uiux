import React from 'react';
import './ServiceProcess.css';
import processImage from '../../assets/tech.svg'; // Placeholder for now

const ServiceProcess = () => {
    return (
        <div className="service-process-card">
            <div className="process-content">
                <p>
                    I deliver end-to-end design solutions—from concept and visual design to user experience and final handoff—ensuring seamless, impactful results aligned with your brand and business goals.
                </p>
                {/* Image placeholder or component */}
                <div className="process-image-placeholder">
                    <img src={processImage} alt="Design Process" />
                </div>
            </div>
        </div>
    );
};

export default ServiceProcess;
