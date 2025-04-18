import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

// Contact Section Styling
const ContactSection = styled.section`
  min-height: 60vh;
  width: 100vw;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a1a1a, #121212);
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #00c4ff;
  opacity: 0;
  animation: fadeIn 1.5s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: #00c4ff;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  animation: slideUp 1s ease-out forwards;
  opacity: 0;

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ContactInfo = styled.p`
  font-size: 1.3rem;
  color: #cfcfcf;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  opacity: 0;
  animation: fadeInText 2s ease-in-out 0.5s forwards;

  @keyframes fadeInText {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: fadeInIcons 2s ease-in-out 1s forwards;

  @keyframes fadeInIcons {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const IconLink = styled.a`
  color: #f0f0f0;
  font-size: 2.5rem;
  transition: color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #00c4ff;
    transform: scale(1.2);
    box-shadow: 0 0 15px rgba(0, 196, 255, 0.7);
    animation: iconHover 0.3s ease-in-out forwards;
  }

  @keyframes iconHover {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle>Find Me On</SectionTitle>
      <ContactInfo>
        Feel free to reach out to me through any of the platforms below. I look forward to connecting with you!
      </ContactInfo>
      <IconsContainer>
        <IconLink
          href="https://www.linkedin.com/in/shaheenur-rahman-m-2263b3290"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </IconLink>
        <IconLink href="mailto:shaheenur2005@gmail.com">
          <FaEnvelope />
        </IconLink>
        <IconLink
          href="tel:+917010404772"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPhone />
        </IconLink>
        <IconLink
          href="https://github.com/ShaheenurRahmanM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </IconLink>
      </IconsContainer>
    </ContactSection>
  );
};

export default Contact;
