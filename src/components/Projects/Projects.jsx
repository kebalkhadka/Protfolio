import React from 'react';
import './Projects.css';
import { projects } from '../../data/constants';
import LinkIcon from '@mui/icons-material/Link';


const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
};

const Projects = () => {
  const wordLimit = 10; // Adjust the word limit as needed

  return (
    <>
      <div id="projects">
        <div className="heading">
          <h1 className="project-heading">Projects</h1>
          <p className="projects-description">
            I have worked on web apps and here are some of my projects.
          </p>
        </div>
        
        <div className="projectsContainer">
          {projects.map((project, index) => (
            <div key={index} className="projectCard">
              <div className="wrapper">
                <img
                  className='projectImage'
                  src={project.image}
                  alt={project.title}
                />
                <div className="tags">
                  {project.tags.map((tag, idx) => (
                    <button key={idx} className="tagButton">
                      {tag}
                    </button>
                  ))}
                </div>
                <h4 className="projectTitle">{project.title}</h4>
                <p className='projectDate'>
                  {project.date}
                  <a href ={project.webapp} target='blank'>
                    <LinkIcon className='view'/ >
                  </a>

                </p>
                <p className='projectDes'>
                  {truncateText(project.description, wordLimit)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
