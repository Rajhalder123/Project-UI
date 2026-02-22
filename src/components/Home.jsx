import React, { useState } from "react";
import resume from "../pdf/resume.pdf";
import "./Home.css";

const Home = () => {
  // Mock visitor count for demo since API limits are reached
  const [visitorCount] = useState(1101);

  return (
    <header className="hero-section d-flex align-items-center" id="home">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6 text-center text-lg-start">

            <span className="hero-badge">
              FULL STACK ENGINEER | WEB DEVELOPER | AI ENTHUSIAST
            </span>

            <h1 className="hero-title mt-4">
              Hi, I'm <span className="gradient-text">Raj Haldar</span>
            </h1>

            <p className="hero-description mt-4">
              I design and develop scalable, production-ready web applications
              using the Full stack and integrate AI-driven features
              to build intelligent digital solutions.
            </p>

            <div className="hero-buttons mt-5">
              <a href="#projects" className="btn btn-primary-custom">
                View Projects
              </a>

              <a href={resume} download className="btn btn-outline-custom">
                Download Resume
              </a>
            </div>

            <p className="visitor-count mt-4">
              👀 Total Visitors: {visitorCount}+
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
            <div className="hero-image-wrapper">
              <img
                src="/assets/f.png"
                alt="Raj Haldar Developer"
                className="img-fluid hero-image"
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Home;