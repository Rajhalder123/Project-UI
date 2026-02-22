import React, { useContext, useState } from "react";
import { ThemeContext } from "../content/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Helper to determine the correct link path
  const getLinkPath = (hash) => {
    return location.pathname === '/' ? hash : `/${hash}`;
  };

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 py-4 transition-all duration-300 border-b ${theme === 'dark' ? 'bg-slate-900 shadow-lg border-slate-800' : 'bg-white shadow-sm border-slate-200'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center text-xl font-bold uppercase no-underline tracking-widest text-slate-900 dark:text-white"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            PORTFOLIO
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex flex-row gap-6 mb-0 pl-0 list-none m-0 items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    className="block py-2 text-sm font-bold text-slate-500 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors uppercase tracking-wider no-underline"
                    href={getLinkPath(link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="bg-transparent border-none text-xl cursor-pointer p-2.5 rounded-xl flex items-center justify-center transition-all text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <i className="fas fa-sun text-yellow-500"></i> : <i className="fas fa-moon text-slate-700"></i>}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all text-slate-900 dark:text-white"
              >
                <div className="w-5 flex flex-col gap-1.5">
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-2 py-6 list-none m-0 border-t border-slate-100 dark:border-slate-800 mt-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-3 px-4 text-base font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all uppercase tracking-widest no-underline"
                      href={getLinkPath(link.href)}
                    >
                      {link.name}
                      <svg className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
