import React from 'react';
import ProjectCard from '../../components/projects/ProjectCard';
import './Projects.css';
import cardImage from '../../assets/tech.svg';
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
            title: 'Senifone Companion App',
            downloads: '3M+ Downloads',
            image: cardImage
        },
        {
            id: 3,
            title: 'Senifone Companion App',
            downloads: '3M+ Downloads',
            image: cardImage
        },
        {
            id: 4,
            title: 'Senifone Companion App',
            downloads: '3M+ Downloads',
            image: cardImage
        },
        {
            id: 5,
            title: 'Senifone Companion App',
            downloads: '3M+ Downloads',
            image: cardImage
        },
        {
            id: 6,
            title: 'Senifone Companion App',
            downloads: '3M+ Downloads',
            image: cardImage
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
