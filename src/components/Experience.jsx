import React from "react";
import experienceData from "./data/experience.json";

const Experience = () => {
  return (
    <section className="py-20 transition-colors duration-300" id="experience" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center flex-wrap">
          <div className="w-full lg:w-10/12">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase mb-12" style={{ color: 'var(--text-main)' }}>
              Articles & Experience
            </h2>

            <div className="flex flex-col">
              {experienceData.map((exp, index) => (
                <div key={exp.id} className="relative group">
                  <div className="flex flex-wrap md:flex-nowrap items-start">
                    <div className="w-full md:w-1/4 text-center md:text-right mb-4 md:mb-0 px-4 pt-1">
                      <div className="text-lg">
                        <span className="block font-bold text-emerald-600 dark:text-emerald-400">{exp.startDate}</span>
                        <span className="block text-sm text-slate-500 dark:text-slate-400">to {exp.endDate}</span>
                      </div>
                    </div>

                    <div className={`w-full md:w-3/4 pb-8 pl-6 md:pl-8 text-left border-l-2 ${index === experienceData.length - 1 ? 'border-transparent' : 'border-slate-200 dark:border-slate-700'}`}>
                      <h4 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>{exp.organisation}</h4>
                      <ul className="list-none pl-0 mt-4 space-y-2">
                        {exp.experiences.map((detail, idx) => (
                          <li key={idx} className="text-slate-600 dark:text-slate-400">
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
