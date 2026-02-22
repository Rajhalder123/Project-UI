import React from "react";
import experienceData from "./data/experience.json";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="styled-title mb-5">Articles & Experience</h2>

            <div className="experience-list">
              {experienceData.map((exp) => (
                <div key={exp.id} className="experience-item">
                  <div className="row align-items-center">
                    <div className="col-md-3 text-md-end text-center mb-3 mb-md-0">
                      <div className="exp-date">
                        <span className="d-block fw-bold" style={{ color: 'var(--accent)' }}>{exp.startDate}</span>
                        <span className="d-block small" style={{ color: 'var(--text-muted)' }}>to {exp.endDate}</span>
                      </div>
                    </div>

                    <div className="col-md-9 border-start pb-4 ps-4 exp-right-border">
                      <h4 className="exp-company" style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>{exp.organisation}</h4>
                      <ul className="exp-details list-unstyled mt-3">
                        {exp.experiences.map((detail, index) => (
                          <li key={index} className="mb-2" style={{ color: 'var(--text-muted)' }}>
                            &#8226; {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
