import React from "react";
import skillsData from "./data/skills.json";

const Skills = () => {
  return (
    <section className="py-20 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300" id="skills" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase mb-16" style={{ color: 'var(--text-main)' }}>
          Skills & Resources
        </h2>
        <div className="flex flex-wrap justify-center -mx-2">
          {skillsData.map((skill) => (
            <div key={skill.id} className="w-1/3 md:w-1/4 lg:w-1/6 px-2 mb-6">
              <div className="flex flex-col items-center justify-center p-6 h-full border border-slate-200 dark:border-slate-700 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-500 hover:shadow-emerald-500/10" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <img
                  src={skill.imageSrc}
                  alt={skill.title}
                  className="w-12 h-12 object-contain mb-3"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <h6 className="text-sm font-semibold m-0" style={{ color: 'var(--text-main)' }}>{skill.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
