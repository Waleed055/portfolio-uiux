import React from 'react';
import './ExperienceDetails.css';

const experiences = [
    // ... (keeping experiences as is)
   {
    id: 1,
    date: "2023 - Present - Lahore, Pakistan (Hybrid)",
    company: "Senifone",
    role: "Senior UX/UI Designer",
    description: "Leading the end-to-end UX/UI strategy and execution for web and mobile platforms. Responsible for user research, interaction design, prototyping, and design system development. Collaborating with cross-functional teams to deliver scalable, user-centered solutions that enhance engagement, usability, and business growth."
},
{
    id: 2,
    date: "2021 - 2023 - Lahore, Pakistan (Remote)",
    company: "elGrocer by Etisalat",
    role: "UX/UI Designer",
    description: "Designed intuitive and visually compelling digital experiences by translating complex product requirements into user-friendly interfaces. Conducted user research, built wireframes, user flows, and high-fidelity prototypes while ensuring consistency across responsive web platforms."
},
{
    id: 3,
    date: "2020 - 2021 - Lahore, Pakistan (On-site)",
    company: "Ozi Technology",
    role: "UX/UI Designer",
    description: "Contributed to product design initiatives by improving user journeys, refining interface components, and supporting the evolution of the design system. Worked closely with product and development teams to ensure seamless implementation of user-centered design solutions."
}
];

const ExperienceDetails = () => {
    return (
        <div className="experience-details-container">
            {experiences.map((exp) => (
                <div key={exp.id} className="experience-item">
                    <div className="experience-date">
                        {exp.date}
                    </div>
                    <div className="experience-content">
                        <h3 className="company-name">{exp.company}</h3>
                        <div className="role-title">{exp.role}</div>
                        <p className="role-description">
                            {exp.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceDetails;
