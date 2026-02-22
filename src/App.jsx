import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
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
};

export default App;
