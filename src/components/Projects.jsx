import React, { useState } from "react";
import projectData from "./data/Projects.json";
import "./Projects.css";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only 3 projects by default
  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section className="catalog-section" id="projects">
      <div className="container text-center">
        <h2 className="styled-title mb-5">CRAFTED REPERTOIRE</h2>
        <div className="row">
          {visibleProjects.map((data) => (
            <div key={data.key} className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
              <div className="card w-100 catalog-card" style={{ backgroundColor: 'var(--card-bg)' }}>
                <div className="card-img-wrapper">
                  {/* <span className="premium-star">Project</span> */}
                  <img
                    className="card-img-top"
                    src={data.imageSrc}
                    alt={data.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://dummyimage.com/600x400/cccccc/000000.png&text=Project+Preview";
                    }}
                  />
                </div>
                <div className="card-body text-center d-flex flex-column">
                  {data.tag && <div className="mb-2"><span className="project-badge">{data.tag}</span></div>}
                  <h4 className="card-title fw-bold" style={{ color: 'var(--text-main)' }}>{data.title}</h4>
                  <p className="card-text mb-4" style={{ color: 'var(--text-muted)' }}>{data.description}</p>

                  <div className="mt-auto">
                    {data.demo && (
                      <a href={data.demo} className="catalog-btn-preview" target="_blank" rel="noopener noreferrer">
                        PREVIEW & DOWNLOAD
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projectData.length > 3 && (
          <div className="text-center mt-5">
            <button
              className="btn-show-more"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>SHOW LESS <i className="fas fa-chevron-up ms-2"></i></>
              ) : (
                <>SHOW MORE PROJECTS <i className="fas fa-chevron-down ms-2"></i></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;