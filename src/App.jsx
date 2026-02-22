import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProjectDetails from './components/ProjectDetails';

const GlobalScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // timeout to allow rendering
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [pathname, hash]);

  return null;
};

const MainLayout = () => (
  <>
    <Navbar />
    <Home />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
    <ScrollToTop />
  </>
);

const App = () => {
  return (
    <Router>
      <GlobalScrollHandler />
      <Routes>
        {/* The main portfolio page with all sections scrollable */}
        <Route path="/" element={<MainLayout />} />

        {/* The new individual Project Details page */}
        <Route path="/project/:slug" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
