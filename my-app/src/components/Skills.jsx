import React from "react";
import skillsData from "./data/skills.json";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container text-center">
        <h2 className="styled-title mb-5">Skills & Resources</h2>
        <div className="row justify-content-center">
          {skillsData.map((skill) => (
            <div key={skill.id} className="col-4 col-md-3 col-lg-2 mb-4">
              <div className="skill-card text-center" style={{ backgroundColor: 'var(--card-bg)' }}>
                <img
                  src={skill.imageSrc}
                  alt={skill.title}
                  className="skill-icon mb-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <h6 className="skill-title" style={{ color: 'var(--text-main)' }}>{skill.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
