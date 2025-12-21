import React from 'react';
import './Projectcard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={`Screenshot of ${project.title}`} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="card-links">
        {/* Link to the live deployed project */}
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-btn">
          Live Demo
        </a>
        {/* Link to the GitHub repository */}
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-btn">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;