import React from 'react';
import ProjectCard from '../../components/projects/ProjectCard';
import './Projects.css';
// import cardImage from '../../assets/tech.svg';
import cardImage from '../../assets/Senifone.png';
import autoparts from '../../assets/ubuy.png';
import elgrocer from '../../assets/ELgrocer.svg';
import lawyer from '../../assets/laywerAPP.svg';
import portfolio from '../../assets/smiles.png';
import websiteImage from '../../assets/website.svg';

const Projects = () => {
    // Dummy data array as requested
    const projectsData = [
        {
            id: 1,
            title: 'Senifone Companion App',
            downloads: '10k+ Downloads',
            image: cardImage,
            androidLink: "https://play.google.com/store/apps/details?id=com.senifone.companion.senifone_companion&hl=en-US&ah=sGUAHJtaWMzsZcViJ-7WhjYlmgc",
            iosLink: "https://apps.apple.com/in/app/senifone-companion/id6450186180",
            webLink: "https://senifone.co.uk/"
        },
        {
            id: 2,
            title: "Ubuy Shopping",
            downloads: '1m+',
            image: autoparts,
            androidLink: "https://play.google.com/store/apps/details?id=com.ubuy",
            iosLink: "https://apps.apple.com/ae/app/ubuy-international-shopping/id613084551",
            webLink: "https://ubuy.com/"
        },
        {
            id: 3,
            title: "ElGrocer Shopping",
            downloads: '100k+',
            image: elgrocer,
            androidLink: "https://play.google.com/store/apps/details?id=com.el_grocer.shopper",
            iosLink: "https://apps.apple.com/ae/app/elgrocer-uae-grocery-delivery/id1040399641",
            webLink: "https://www.elgrocer.com/#/stores"
        },
        {
            id: 4,
            title: "Lawyer's Diary Pro",
            downloads: '1k+',
            image: lawyer,
            androidLink: "#",
            iosLink: "https://apps.apple.com/kr/app/lawyers-diary-pro/id6752351977?l=en-GB",
            webLink: "#"
        },
        {
            id: 5,
            title: "Smiles: Grocery, Lifestyle",
            downloads: '2m+',
            image: portfolio,
            androidLink: "https://play.google.com/store/apps/details?id=ae.etisalat.smiles",
            iosLink: "https://apps.apple.com/ae/app/smiles-food-grocery-lifestyle/id1225034537",
            webLink: "https://smiles.ae/en/index.html"
        },
        {
            id: 6,
            title: 'Corporate Website',
            downloads: 'Web Design',
            image: websiteImage,
            androidLink: "#",
            iosLink: "#",
            webLink: "#"
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
                        androidLink={project.androidLink}
                        iosLink={project.iosLink}
                        webLink={project.webLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
