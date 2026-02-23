import React from 'react';
import './ProjectCard.css';
import playStoreIcon from '../../assets/playstore.svg';
import appleIcon from '../../assets/apple.svg';
import webIcon from '../../assets/web.svg';

const ProjectCard = ({ title, downloads, image, androidLink, iosLink, webLink }) => {
  return (
    <div className="project-card">
      <div className="card-overlay"></div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{downloads}</p>
        <div className="project-links">
          {androidLink && androidLink !== '#' && (
            <a href={androidLink} target="_blank" rel="noopener noreferrer" className="icon-container">
              <img src={playStoreIcon} alt="Play Store" />
            </a>
          )}
          {iosLink && iosLink !== '#' && (
            <a href={iosLink} target="_blank" rel="noopener noreferrer" className="icon-container">
              <img src={appleIcon} alt="Apple Store" />
            </a>
          )}
          {webLink && webLink !== '#' && (
            <a href={webLink} target="_blank" rel="noopener noreferrer" className="icon-container">
              <img src={webIcon} alt="Web" />
            </a>
          )}
        </div>
      </div>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
    </div>
  );
};

export default ProjectCard;
