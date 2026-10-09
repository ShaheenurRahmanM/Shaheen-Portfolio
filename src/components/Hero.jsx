import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaDownload, FaRocket } from "react-icons/fa";
import Hero3DCanvas from "./Hero3DCanvas";
import "@fontsource/playfair-display";
import "@fontsource/montserrat";

const HeroSection = styled.section`
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 8% 40px;
  background: radial-gradient(circle at 50% 50%, rgba(0, 196, 255, 0.1), transparent 60%),
              radial-gradient(circle at 85% 70%, rgba(112, 0, 255, 0.08), transparent 45%),
              linear-gradient(135deg, #090c17 0%, #0d1222 50%, #080a14 100%);
  overflow: hidden;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    opacity: 0.5;
  }

  @media (max-width: 992px) {
    height: auto;
    min-height: auto;
    padding: 110px 1.5rem 60px;
    overflow: visible;
  }
`;

const FullPage3DBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  opacity: 0.75;
  overflow: hidden;

  @media (max-width: 992px) {
    opacity: 0.55;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0.5rem 1.3rem;
    border-radius: 999px;
    background: rgba(10, 14, 26, 0.7);
    border: 1px solid rgba(0, 196, 255, 0.35);
    color: #00c4ff;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 20px rgba(0, 196, 255, 0.18);
  }

  h1 {
    font-family: "Playfair Display", serif;
    font-size: clamp(2.4rem, 4.5vw, 4.2rem);
    line-height: 1.12;
    font-weight: 800;
    margin-bottom: 0.8rem;
    color: #ffffff;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.7);

    span {
      background: linear-gradient(135deg, #ffffff 0%, #00c4ff 60%, #00ffd0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .role-subtitle {
    font-size: clamp(1.05rem, 1.8vw, 1.4rem);
    color: #00c4ff;
    font-weight: 700;
    letter-spacing: 1.5px;
    margin-bottom: 1rem;
    min-height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  }

  p {
    font-size: clamp(0.95rem, 1.25vw, 1.1rem);
    color: rgba(255, 255, 255, 0.88);
    line-height: 1.75;
    margin-bottom: 2rem;
    max-width: 680px;
    text-shadow: 0 2px 15px rgba(0, 0, 0, 0.9);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryCTA = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 700;
  color: #080a14;
  background: linear-gradient(135deg, #00c4ff 0%, #00ffd0 100%);
  box-shadow: 0 8px 25px rgba(0, 196, 255, 0.4);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 196, 255, 0.65);
    transform: translateY(-2px);
  }
`;

const SecondaryCTA = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  background: rgba(10, 14, 26, 0.65);
  border: 1px solid rgba(0, 196, 255, 0.35);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 196, 255, 0.15);
    border-color: #00c4ff;
    color: #00c4ff;
    transform: translateY(-2px);
  }
`;

const StatsGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 2.2rem;
  justify-content: center;

  @media (max-width: 600px) {
    gap: 1.4rem;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .stat-number {
    font-size: 2rem;
    font-weight: 800;
    color: #00c4ff;
    line-height: 1;
    margin-bottom: 0.2rem;
    text-shadow: 0 0 14px rgba(0, 196, 255, 0.5);
  }

  .stat-label {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`;

const roles = [
  "AI & Data Science Engineer",
  "Generative AI Specialist",
  "Full Stack Developer",
  "Machine Learning Engineer",
];

const Hero = ({ scrollToSection }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedRole !== currentFullRole) {
      timer = setTimeout(() => {
        setDisplayedRole(currentFullRole.slice(0, displayedRole.length + 1));
      }, 75);
    } else if (!isDeleting && displayedRole === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayedRole !== "") {
      timer = setTimeout(() => {
        setDisplayedRole(currentFullRole.slice(0, displayedRole.length - 1));
      }, 40);
    } else if (isDeleting && displayedRole === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const handleCTA = () => {
    if (scrollToSection) {
      scrollToSection("projects");
    } else {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection id="home">
      {/* Full-Page 3D Background covering the entire page */}
      <FullPage3DBackground>
        <Hero3DCanvas isMobile={isMobile} />
      </FullPage3DBackground>

      <HeroContent>
        <div className="badge">
          Shaheenur Rahman M
        </div>

        <h1>
          Building AI Solutions <br />
          <span>That Create Impact</span>
        </h1>

        <div className="role-subtitle">
          {displayedRole}
          <span style={{ animation: "blink 1s infinite", color: "#00c4ff" }}>|</span>
        </div>

        <p>
          Passionate AI & Data Science Engineer focused on Machine Learning, Deep Learning,
          Generative AI, Full Stack Development, and building intelligent software solutions that solve real-world challenges.
        </p>

        <ButtonGroup>
          <PrimaryCTA
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCTA}
          >
            Explore My Work <FaRocket />
          </PrimaryCTA>

          <SecondaryCTA
            href="/Shaheenur_Rahman.M_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume <FaDownload />
          </SecondaryCTA>
        </ButtonGroup>

        <StatsGrid>
          <StatItem>
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Completed</span>
          </StatItem>
          <StatItem>
            <span className="stat-number">3+</span>
            <span className="stat-label">AI Systems</span>
          </StatItem>
          <StatItem>
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Expertise</span>
          </StatItem>
        </StatsGrid>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;