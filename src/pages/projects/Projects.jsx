import React from 'react';
import ProjectCard from '../../components/projects/ProjectCard';
import './Projects.css';
import cardImage from '../../assets/tech.svg';
import autoparts from '../../assets/autoparts.svg';
import elgrocer from '../../assets/ELgrocer.svg';
import lawyer from '../../assets/laywerAPP.svg';
import portfolio from '../../assets/portfolio.svg';
import websiteImage from '../../assets/website.svg';

const Projects = () => {
    // Dummy data array as requested
    const projectsData = [
        {
            id: 1,
            title: 'Senifone Companion App',
            downloads: '3M+ Downloads',
            image: cardImage
        },
        {
            id: 2,
            title: 'AutoParts App',
            downloads: 'UI/UX Design',
            image: autoparts
        },
        {
            id: 3,
            title: 'ELgrocer App',
            downloads: 'UI/UX Design',
            image: elgrocer
        },
        {
            id: 4,
            title: 'Lawyer App',
            downloads: 'UI/UX Design',
            image: lawyer
        },
        {
            id: 5,
            title: 'Portfolio Website',
            downloads: 'Web Design',
            image: portfolio
        },
        {
            id: 6,
            title: 'Corporate Website',
            downloads: 'Web Design',
            image: websiteImage
        }
    ];

    return (
        <div className="projects-container">
            <div className="projects-header">
                <div className="projects-header-accent"></div>
                <h2>Projects</h2>
            </div>

            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        downloads={project.downloads}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
