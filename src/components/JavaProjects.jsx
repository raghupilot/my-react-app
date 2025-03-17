import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const JavaProjects = () => {
  return (
    <div className="java-projects">
      <h1>OpenJDK Projects</h1>
      {Object.entries(projectsData).map(([key, project]) => (
        <div key={key} className="project-card">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className="project-links">
            <a href={project.officialLink} target="_blank" rel="noopener noreferrer">Official Page</a>
            <Link to={`/projects/${key}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JavaProjects;