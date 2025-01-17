import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Projects.css';
import projectData from '../data/projectData'; // Import project data
import pdf from '../asset/Maharjan_Portfolio025.pdf'; // Import the PDF file

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Works</h2>
      <div className="projects-container">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}> {/* Using project.id for key */}
            <Link to={`/product/${project.id}`} className="project-link"> {/* Link to the ProductDetail page with project id */}
              <div className="project-content">
                {project.id % 2 === 0 ? (
                  <>
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-description">
                      <h3>{project.title}</h3>
                      <p className="project-status">{project.status}</p> {/* Display Status */}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="project-description">
                      <h3>{project.title}</h3>
                      <p className="project-status">{project.status}</p> {/* Display Status */}
                    </div>
                    <img src={project.image} alt={project.title} className="project-image" />
                  </>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* PDF Viewer Container (Below the Project Cards) */}
      <div className="pdf-container">
        <h2>Project Documentation</h2>
        <iframe
          src={pdf}  // This resolves the imported PDF path
          width="100%"
          height="500px"
          title="Project PDF"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
};

export default Projects;
