import React from 'react';
import ProjectCard from '../components/ProjectCard/Projectcard.jsx';
import './pages.css';

// **IMPORTANT: Edit this array with YOUR project details**
const projectsData = [
  {
    id: 1,
    title: 'Project Alpha (Basic HTML/CSS)',
    description: 'A simple static website demonstrating my early HTML and CSS skills.',
    image: 'url-to-your-image-1.jpg', // Put your image path here
    githubLink: 'https://github.com/youruser/project-alpha',
    liveLink: 'https://live-demo.com/project-alpha',
  },
  {
    id: 2,
    title: 'To-Do App (Learning React)',
    description: 'A simple To-Do List application built to practice React components, state, and props.',
    image: 'url-to-your-image-2.jpg',
    githubLink: 'https://github.com/youruser/react-todo-app',
    liveLink: '#',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="page-section projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
