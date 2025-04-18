import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import prof from "../assests/prof.png";

// About Section Styling
const AboutSection = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #121212;
  color: #f0f0f0;
  padding: 2rem;
`;

const AboutContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AboutTextContainer = styled.div`
  max-width: 600px;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

const AboutTitle = styled(motion.h2)`
  font-size: 3rem;
  color: #00c4ff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const GlowingEffect = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 196, 255, 0.6), transparent);
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
  animation: glow 4s infinite;

  @keyframes glow {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.8;
    }
  }
`;

const AboutImage = styled(motion.img)`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1; /* Place image above the glowing effect */
`;

const About = () => {
  const { ref: aboutRef, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when it comes into view
    threshold: 0.3, // Trigger animation when 30% of the component is visible
  });

  return (
    <AboutSection ref={aboutRef}>
      <AboutContainer
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
        <AboutTextContainer>
          <AboutTitle
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            About Me
          </AboutTitle>
          <AboutText
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Hi, I'm Shaheenur Rahman, a passionate developer with a keen interest
            in AI, data science, and front-end development. I love creating
            innovative solutions that bridge the gap between technology and
            real-world applications. Welcome to my portfolio!
          </AboutText>
        </AboutTextContainer>

        <AboutImageContainer>
          <GlowingEffect />
          <AboutImage
            src={prof}
            alt="Shaheenur Rahman"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </AboutImageContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
