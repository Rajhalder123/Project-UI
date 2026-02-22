import React, { useContext } from "react";
import { ThemeContext } from "../content/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a className="navbar-brand d-flex align-items-center" href="#home">

          <span className="brand-text">
            PORTFOLIO
          </span>
        </a>

        <div className="navbar-nav d-flex align-items-center">
          <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            className="theme-toggle-btn ms-4"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <i className="fas fa-sun text-warning"></i> : <i className="fas fa-moon"></i>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
