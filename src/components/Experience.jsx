import React from "react";
import styled from "styled-components";
import { FaProjectDiagram } from "react-icons/fa";

// Section Wrapper
const ExperienceSection = styled.section`
  background: linear-gradient(135deg, #0f0f2d, #1a1a3a);
  padding: 15rem 1rem 3rem 1rem;
  color: #fff;
`;

// Section Title
const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #00c4ff;
  text-align: center;
  margin-bottom: 4rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Timeline wrapper
const Timeline = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 900px;

  &::before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0;
    height: 100%;
    border-left: 3px dotted #00c4ff;
    z-index: 0;

    @media (max-width: 768px) {
      content: none;
    }
  }
`;

// Mobile layout wrapper
const MobileWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

// Timeline Node
const TimelineNode = styled.div`
  position: relative;
  margin-bottom: 4rem;
  padding-left: 80px;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 12px;
    width: 16px;
    height: 16px;
    background: #00c4ff;
    border-radius: 50%;
    border: 2px solid #fff;
    z-index: 2;

    @media (max-width: 768px) {
      content: none;
    }
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

// Fade-in animation wrapper
const FadeIn = styled.div`
  animation: fadeInUp 0.7s ease forwards;
  opacity: 0;
  transform: translateY(30px);

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Experience Card
const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 5px solid #00c4ff;
  box-shadow: 0 0 10px rgba(0, 196, 255, 0.2);

  h3 {
    font-size: 1.5rem;
    color: #00c4ff;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1rem;
    color: #aaa;
    margin-bottom: 1rem;
  }

  p {
    color: #ccc;
    line-height: 1.5;
    font-size: 0.95rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
    h3 {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

// Project Card
const ProjectCard = styled.div`
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.04);
  padding: 0.8rem;
  border-radius: 10px;
  border-left: 4px solid #00ffd0;

  h5 {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #00ffd0;
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 0.85rem;
    color: #bbb;
  }

  @media (max-width: 600px) {
    padding: 0.7rem;
    h5 {
      font-size: 0.95rem;
    }
    span {
      font-size: 0.8rem;
    }
  }
`;

// Freelancing Card
const FreelanceCard = styled(Card)`
  border-left: 5px solid #00ffd0;
  background: rgba(0, 255, 208, 0.04);
`;

// Badge styling
const badgeStyle = {
  border: "1px solid #00ffd0",
  borderRadius: "20px",
  padding: "0.4rem 0.8rem",
  fontSize: "0.85rem",
  color: "#00ffd0",
  background: "rgba(0, 255, 208, 0.08)",
  marginBottom: "6px",
};

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <SectionTitle>Experience</SectionTitle>
      <Timeline>
        <MobileWrapper>
          {/* Internship Node */}
          <TimelineNode>
            <FadeIn>
              <Card>
                <h3>Data & Analytics Intern</h3>
                <h4>KANINI Software Solutions — May 2025</h4>
                <p>
                  I explored AI and Data Science by building real-world projects
                  using Python, ML, DL, LLMs, GenAI, and Streamlit.
                </p>
                <ProjectCard>
                  <h5><FaProjectDiagram /> Skill Gap Detector</h5>
                  <span>
                    Analyzes LinkedIn profiles and compares with top job roles
                    to identify skill gaps using ML.
                  </span>
                </ProjectCard>
                <ProjectCard>
                  <h5><FaProjectDiagram /> Skin Cancer Detection</h5>
                  <span>
                    Deep learning model using CNNs trained on HAM10000 to
                    classify skin cancer types.
                  </span>
                </ProjectCard>
                <ProjectCard>
                  <h5><FaProjectDiagram /> Audio PII Masker AI</h5>
                  <span>
                    Used Whisper & LLMs to transcribe and mask sensitive audio
                    data with a Streamlit UI.
                  </span>
                </ProjectCard>
              </Card>
            </FadeIn>
          </TimelineNode>

          {/* Freelancing Node */}
          <TimelineNode>
            <FadeIn>
              <FreelanceCard>
                <h3>Open to Freelancing</h3>
                <p>
                  Always excited to work on impactful freelance projects in AI,
                  Data Science, Full-Stack Dev, and more!
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "0.8rem",
                  }}
                >
                  <span style={badgeStyle}>AI Solutions</span>
                  <span style={badgeStyle}>GenAI</span>
                  <span style={badgeStyle}>ML/DL</span>
                  <span style={badgeStyle}>LLMs</span>
                  <span style={badgeStyle}>Dashboards</span>
                  <span style={badgeStyle}>Python</span>
                  <span style={badgeStyle}>Streamlit</span>
                  <span style={badgeStyle}>Data Analysis</span>
                  <span style={badgeStyle}>App or Web Development</span>
                </div>
                <a
                  href="mailto:shaheenur2005@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "1rem",
                    color: "#00ffd0",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Let’s collaborate →
                </a>
              </FreelanceCard>
            </FadeIn>
          </TimelineNode>
        </MobileWrapper>
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
