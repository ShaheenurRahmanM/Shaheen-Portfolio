import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

import prof from "../assests/prof.png";

const AboutSection = styled.section`
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  padding: 85px 8% 35px;
  background: linear-gradient(180deg, #090c17 0%, #0d1222 50%, #080a14 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 992px) {
    height: auto;
    min-height: auto;
    padding: 80px 1.5rem 50px;
    overflow: visible;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  .subtitle {
    color: #00ffd0;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  h2 {
    font-size: clamp(2rem, 3.2vw, 2.8rem);
    color: #ffffff;
    font-weight: 800;

    span {
      background: linear-gradient(135deg, #00c4ff 0%, #00ffd0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (max-width: 992px) {
    margin-bottom: 1.5rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 1100px) {
    grid-template-columns: 240px 1fr;
    gap: 2rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  padding: 6px;
  background: linear-gradient(135deg, rgba(0, 196, 255, 0.4), rgba(112, 0, 255, 0.4));
  box-shadow: 0 0 35px rgba(0, 196, 255, 0.25);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 0 45px rgba(0, 196, 255, 0.45);
  }

  @media (max-width: 992px) {
    width: 190px;
    height: 190px;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background: #080a14;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const BioCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 196, 255, 0.15);
  border-radius: 18px;
  padding: 1.2rem 1.6rem;
  backdrop-filter: blur(12px);

  p {
    font-size: 0.98rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;

    strong {
      color: #00c4ff;
    }
  }

  @media (max-width: 992px) {
    text-align: left;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.1rem 1.3rem;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background: rgba(0, 196, 255, 0.05);
    border-color: rgba(0, 196, 255, 0.3);
    transform: translateY(-3px);
  }

  .icon {
    font-size: 1.5rem;
    color: #00c4ff;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.05rem;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }
`;

const KeyPointsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  margin-top: 0.2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`;

const KeyPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.88rem;

  svg {
    color: #00ffd0;
    flex-shrink: 0;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SectionHeader>
        <div className="subtitle">Discover My Journey</div>
        <h2>
          About <span>Shaheenur Rahman M</span>
        </h2>
      </SectionHeader>

      <Container>
        <LeftColumn>
          <ImageContainer>
            <ProfileImg src={prof} alt="Shaheenur Rahman M" />
          </ImageContainer>
        </LeftColumn>

        <RightColumn>
          <BioCard>
            <p>
              I am a driven <strong>AI & Data Science Engineer</strong> who thrives on building intelligent algorithms, predictive models, and high-performance web applications. My mission is to blend machine learning with clean software engineering to solve complex real-world challenges.
            </p>
          </BioCard>

          <CardsGrid>
            <FeatureCard>
              <FaGraduationCap className="icon" />
              <h3>Education</h3>
              <p>B.Tech in Artificial Intelligence & Data Science with expertise in ML and neural architectures.</p>
            </FeatureCard>

            <FeatureCard>
              <FaBrain className="icon" />
              <h3>AI & ML Expertise</h3>
              <p>Passionate about Generative AI, Large Language Models, Computer Vision, and NLP pipelines.</p>
            </FeatureCard>

            <FeatureCard>
              <FaLaptopCode className="icon" />
              <h3>Full-Stack Skills</h3>
              <p>Proficient in React.js, Python, Flask/FastAPI, Node.js, SQL, and clean UI engineering.</p>
            </FeatureCard>

            <FeatureCard>
              <FaLightbulb className="icon" />
              <h3>Problem Solving</h3>
              <p>Strong analytical thinker passionate about optimizing algorithms and data pipelines.</p>
            </FeatureCard>
          </CardsGrid>

          <KeyPointsList>
            <KeyPoint><FaCheckCircle /> Machine Learning & Deep Learning</KeyPoint>
            <KeyPoint><FaCheckCircle /> Generative AI & Prompt Design</KeyPoint>
            <KeyPoint><FaCheckCircle /> Responsive Web Application Design</KeyPoint>
            <KeyPoint><FaCheckCircle /> Data Analytics & Visualization</KeyPoint>
          </KeyPointsList>
        </RightColumn>
      </Container>
    </AboutSection>
  );
};

export default About;