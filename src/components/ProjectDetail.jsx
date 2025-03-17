import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <p className="project-description">{project.description}</p>
      
      <section className="project-info">
        <h2>Overview</h2>
        <p>{project.overview}</p>
        
        <h2>Related JEPs</h2>
        <ul className="jeps-list">
          {project.relatedJeps.map(jep => (
            <li key={jep.number}>
              <Link to={jep.link}>
                JEP {jep.number}: {jep.title}
              </Link>
            </li>
          ))}
        </ul>

        <h2>Examples</h2>
        <ul className="examples-list">
          {project.examples.map((example, index) => (
            <li key={index}>
              <a href={example.url} target="_blank" rel="noopener noreferrer">
                {example.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectDetail;