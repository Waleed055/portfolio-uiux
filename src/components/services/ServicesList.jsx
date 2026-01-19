import React from 'react';
import './ServicesList.css';

const ServicesList = () => {
    const services = [
        "Custom brand identity & visual systems",
        "UI/UX design for websites & mobile apps",
        "Design for dashboards & digital interfaces",
        "Marketing creatives & promotional design",
        "Interactive prototypes & user flows (UX)",
        "Responsive web & app interface design (UI)"
    ];

    return (
        <div className="services-list-card">
            <ul>
                {services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesList;
