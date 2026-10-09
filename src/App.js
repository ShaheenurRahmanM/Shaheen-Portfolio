import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { SpeedInsights } from "@vercel/speed-insights/react";

import "./App.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import AmbientSpotlight from "./components/AmbientSpotlight";
import Navbar from "./components/Navbar";
import SideScrollNav from "./components/SideScrollNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00c4ff, #00ffd0);
  border: none;
  color: #070814;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999;
  box-shadow: 0 0 20px rgba(0, 196, 255, 0.4);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 196, 255, 0.7);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 0.95rem;
  }
`;

const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = (container === window ? window.scrollY : container.scrollTop) + 250;
      if (scrollPos > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sectionIds[i]);
        if (elem) {
          const top = elem.offsetTop;
          if (top <= scrollPos) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    const container = containerRef.current;
    if (container && container.scrollTo) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles />
      <AmbientSpotlight />
      <SpeedInsights />

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <SideScrollNav activeSection={activeSection} scrollToSection={scrollToSection} />

      <div className="snap-container" ref={containerRef}>
        <div id="home" className="snap-section">
          <Hero scrollToSection={scrollToSection} />
        </div>
        <div id="about" className="snap-section">
          <About />
        </div>
        <div id="skills" className="snap-section">
          <Skills />
        </div>
        <div id="projects" className="snap-section">
          <Projects />
        </div>
        <div id="experience" className="snap-section">
          <Experience />
        </div>
        <div id="contact" className="snap-section">
          <Contact />
        </div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <ScrollToTopButton
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Scroll to Top"
          >
            <FaArrowUp />
          </ScrollToTopButton>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
