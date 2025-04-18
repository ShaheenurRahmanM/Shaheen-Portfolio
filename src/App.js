import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { GlobalStyles } from './styles/GlobalStyles';
import { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const renderContent = () => {
    if (isMobile) {
      return (
        <div className="mobile-content">
          <div id="home"><Hero /></div>
          <div id="about"><About /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="experience"><Experience /></div>
          <div id="contact"><Contact /></div>
        </div>
      );
    }

    switch (currentPage) {
      case '/about':
        return <About />;
      case '/skills':
        return <Skills />;
      case '/projects':
        return <Projects />;
      case '/experience': 
        return <Experience />;
      case '/contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <>
      <GlobalStyles />
      <Navbar 
        isMobile={isMobile} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      {renderContent()}
    </>
  );
}

export default App;