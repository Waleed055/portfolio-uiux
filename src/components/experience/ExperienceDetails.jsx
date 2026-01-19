import React from 'react';
import './ExperienceDetails.css';

const experiences = [
    // ... (keeping experiences as is)
    {
        id: 1,
        date: "2023 - Present - Lahore, Pakistan (Hybrid)",
        company: "elGrocer by Etisalat",
        role: "Sr. Software Engineer - Web",
        description: "As a Senior Software Engineer - Web, I lead the development of scalable, high-performance web applications using HTML, CSS, JavaScript, React, Next.js, and modern web frameworks. I architect and implement clean, maintainable code while optimizing application performance, security, and user experience across platforms and devices."
    },
    {
        id: 2,
        date: "2021 - 2023 - Lahore, Pakistan (Remote)",
        company: "elGrocer by Etisalat",
        role: "Software Engineer - Web",
        description: "As a Senior Software Engineer - Web, I lead the development of scalable, high-performance web applications using HTML, CSS, JavaScript, React, Next.js, and modern web frameworks. I architect and implement clean, maintainable code while optimizing application performance, security, and user experience across platforms and devices."
    },
    {
        id: 3,
        date: "2021 - 2023 - Lahore, Pakistan (Remote)",
        company: "elGrocer by Etisalat",
        role: "Software Engineer - Web",
        description: "As a Senior Software Engineer - Web, I lead the development of scalable, high-performance web applications using HTML, CSS, JavaScript, React, Next.js, and modern web frameworks. I architect and implement clean, maintainable code while optimizing application performance, security, and user experience across platforms and devices."
    },

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
