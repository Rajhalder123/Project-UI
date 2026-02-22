import React, { useState } from "react";
import resume from "../pdf/resume.pdf";

const Home = () => {
  // Mock visitor count for demo since API limits are reached
  const [visitorCount] = useState(1101);

  return (
    <header className="relative min-h-screen py-32 pb-20 flex items-center overflow-hidden transition-colors duration-500" id="home" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
      {/* Background Glows */}
      <div className="absolute w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-3xl -top-[200px] -left-[200px] z-0 pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-3xl -bottom-[150px] -right-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap items-center -mx-4">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 px-4 text-center lg:text-left mb-12 lg:mb-0">

            <span className="inline-block bg-slate-100 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 text-emerald-600 dark:text-emerald-400 py-2 px-6 rounded-full text-sm font-semibold tracking-wide shadow-sm">
              FULL STACK ENGINEER | WEB DEVELOPER | AI ENTHUSIAST
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-6 leading-tight tracking-tight text-slate-900 dark:text-white">
              Hi, I'm <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Raj Haldar</span>
            </h1>

            <p className="text-lg sm:text-xl mt-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-90 dark:text-slate-200" style={{ color: 'var(--text-muted)' }}>
              I design and develop scalable, production-ready web applications
              using the Full stack and integrate AI-driven features
              to build intelligent digital solutions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 py-3 px-8 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/30">
                View Projects
              </a>

              <a href={resume} download className="inline-flex items-center justify-center bg-transparent text-slate-800 dark:text-white border-2 border-slate-300 dark:border-slate-700 py-3 px-8 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-1">
                Download Resume
              </a>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-8">
              👀 Total Visitors: {visitorCount}+
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 px-4 hidden lg:flex justify-center">
            <div className="relative">
              <img
                src="/assets/f.png"
                alt="Raj Haldar Developer"
                className="max-h-[500px] w-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Home;