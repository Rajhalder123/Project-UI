import React, { useState } from "react";
import projectData from "./data/Projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only 3 projects by default
  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section className="bg-slate-50 dark:bg-slate-800/50 py-20" id="projects">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
            CRAFTED REPERTOIRE
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my finest work, blending performant code with premium design aesthetics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.key}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Show More/Less Button */}
        {projectData.length > 3 && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 py-3 px-8 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/30 cursor-pointer outline-none"
            >
              <span className="flex items-center gap-2">
                {showAll ? 'SHOW LESS' : 'VIEW ALL PROJECTS'}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-1'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;