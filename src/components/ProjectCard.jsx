import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, role, completionDate, description, image, link, backgroundImage, caption }) => {
  // Background art is washed out almost entirely so it reads as a faint tint,
  // not a busy photo competing with the text.
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(253, 252, 250, 0.975), rgba(253, 252, 250, 0.655)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="project-card-padding"> 
      <div className="project-card" style={cardStyle}>
        <div className="project-image-container glass">
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            <img src={image} alt={title} className="project-image" />
            {caption && <p className="project-image-caption">{caption}</p>}
          </a>
        </div>
        <div className="project-content glass">
          <h2 className="project-title">{title}</h2>
          <div className="project-meta">
            <p className="project-role">Role: {role}</p>
            <p className="project-date">Completed: {completionDate}</p>
          </div>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;