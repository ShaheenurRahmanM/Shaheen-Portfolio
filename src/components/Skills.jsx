import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaCertificate, FaDatabase } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

// Section Styling
const Section = styled.section`
  padding: 4rem 2rem;
  background: ${(props) => props.bg || "#121212"};
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

// Section Title
const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #00c4ff;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  opacity: 0;
`;

// Skills Section
const TechStackContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 800px;
  width: 100%;
`;

const TechStackIconContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 20%;
  background: linear-gradient(135deg, #00c4ff, #ff00c4);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);
  }
`;

const TechStackIcon = styled.div`
  font-size: 2rem;
  color: #f0f0f0;
`;

// Certifications Section
const CertificationsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem 0;
  gap: 2rem;
  max-width: 100%;
  scrollbar-width: thin;
  scrollbar-color: #00c4ff transparent;

  /* Remove vertical scrollbar */
  overflow-y: hidden;

  /* Custom scrollbar for WebKit browsers */
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #00c4ff;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const CertificationCard = styled(motion.div)`
  flex: 0 0 auto;
  background: #1a1a1a;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

const CertificateIcon = styled.div`
  font-size: 3rem;
  color: #00c4ff;
  margin-bottom: 1rem;
`;

const CertificationName = styled.h3`
  font-size: 1.2rem;
  color: #f0f0f0;
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff00c4;
  }
`;

// Component
const Skills = () => {
  const certifications = [
    "Prompt Engineering for Chat-GPT",
    "Python for Data Science",
    "Advanced Java Programming",
    "AI Fundamentals",
    "Foundations of Cybersecurity",
    "Career Essentials in Generative AI",
    // "Machine Learning Essentials",
    // "Cloud Computing Essentials",
    // "Deep Learning with TensorFlow",
  ];

  return (
    <Section>
      {/* Skills Section */}
      <SectionTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Professional Skills
      </SectionTitle>

      <TechStackContainer>
        <TechStackIconContainer
          title="Python"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TechStackIcon>
            <FaPython />
          </TechStackIcon>
        </TechStackIconContainer>
        <TechStackIconContainer
          title="Java"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TechStackIcon>
            <FaJava />
          </TechStackIcon>
        </TechStackIconContainer>
        <TechStackIconContainer
          title="C++"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <TechStackIcon>
            <SiCplusplus />
          </TechStackIcon>
        </TechStackIconContainer>
        <TechStackIconContainer
          title="React"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <TechStackIcon>
            <FaReact />
          </TechStackIcon>
        </TechStackIconContainer>
        <TechStackIconContainer
        title="SQL"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <TechStackIcon>
          <FaDatabase />
        </TechStackIcon>
      </TechStackIconContainer>
      </TechStackContainer>
      <br />
      <br />
      {/* Certifications Section */}
      <SectionTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Certifications
      </SectionTitle>

      <CertificationsContainer>
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CertificateIcon>
              <FaCertificate />
            </CertificateIcon>
            <CertificationName>{cert}</CertificationName>
          </CertificationCard>
        ))}
      </CertificationsContainer>
    </Section>
  );
};

export default Skills;
