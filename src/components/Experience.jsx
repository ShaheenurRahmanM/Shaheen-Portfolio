import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaChevronDown, FaChevronUp, FaLaptopCode, FaCalendarAlt, FaBrain } from "react-icons/fa";

const Section = styled.section`
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  padding: 85px 8% 30px;
  background: linear-gradient(180deg, #080a14 0%, #0d1222 50%, #090c17 100%);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
    margin-bottom: 0.3rem;
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
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, #00c4ff, #7000ff, #00ffd0);
    box-shadow: 0 0 12px rgba(0, 196, 255, 0.4);

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1.2rem;
    padding-bottom: 1.2rem;
    width: 100%;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${(props) => (props.align === "left" ? "flex-start" : "flex-end")};
  margin-bottom: 1.5rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    min-width: 84vw;
    max-width: 84vw;
    flex-shrink: 0;
    scroll-snap-align: center;
    margin-bottom: 0;
  }
`;

const TimelineNode = styled.div`
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #090c17;
  border: 2px solid #00c4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #00c4ff;
  z-index: 2;
  box-shadow: 0 0 15px rgba(0, 196, 255, 0.5);

  @media (max-width: 768px) {
    display: none;
  }
`;

const CardWrapper = styled.div`
  width: 44%;

  @media (max-width: 900px) {
    width: calc(100% - 55px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 196, 255, 0.18);
  border-radius: 18px;
  padding: 1.2rem 1.6rem;
  backdrop-filter: blur(14px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;

  .mobile-icon {
    display: none;
    font-size: 1.2rem;
    color: #00c4ff;

    @media (max-width: 768px) {
      display: inline-flex;
    }
  }

  &:hover {
    border-color: #00c4ff;
    box-shadow: 0 10px 30px rgba(0, 196, 255, 0.2);
    transform: translateY(-2px);
  }

  .role {
    font-size: 1.1rem;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 0.2rem;
  }

  .company {
    font-size: 0.9rem;
    color: #00c4ff;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .date {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.78rem;
    color: #00ffd0;
    background: rgba(0, 255, 208, 0.1);
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }

  .description {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;
  }

  .expand-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    background: none;
    border: none;
    color: #00c4ff;
    font-size: 0.8rem;
    font-weight: 700;
    margin-top: 0.6rem;
    padding: 0;
    cursor: pointer;
  }

  .details-content {
    margin-top: 0.8rem;
    padding-top: 0.8rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    ul {
      list-style: none;
      li {
        position: relative;
        padding-left: 1.2rem;
        color: rgba(255, 255, 255, 0.82);
        font-size: 0.82rem;
        margin-bottom: 0.4rem;
        line-height: 1.4;

        &::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #00ffd0;
        }
      }
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-top: 0.8rem;

      span {
        font-size: 0.72rem;
        padding: 0.2rem 0.6rem;
        border-radius: 999px;
        background: rgba(112, 0, 255, 0.2);
        color: #d1a8ff;
        border: 1px solid rgba(112, 0, 255, 0.4);
      }
    }
  }
`;

const experiences = [
  {
    id: 1,
    role: "AI & Data Science Intern",
    company: "Tech Research Lab",
    date: "2024 - Present",
    align: "left",
    icon: <FaBrain />,
    summary: "Developing machine learning models and fine-tuning LLMs for predictive intelligence.",
    details: [
      "Engineered NLP & Vision solutions using PyTorch and Scikit-learn.",
      "Fine-tuned Generative AI prompts for domain question answering.",
      "Optimized model inference time by 40% through weight quantization."
    ],
    tech: ["Python", "PyTorch", "Generative AI", "NLP"]
  },
  {
    id: 2,
    role: "Full-Stack Web Developer",
    company: "Freelance & Project Labs",
    date: "2023 - 2024",
    align: "right",
    icon: <FaLaptopCode />,
    summary: "Delivered modern, high-performance web applications with React.js and scalable APIs.",
    details: [
      "Built SPAs using styled-components, Framer Motion, and GSAP.",
      "Integrated REST APIs with secure authentication and database persistence.",
      "Achieved high performance metrics with optimized assets."
    ],
    tech: ["React.js", "JavaScript", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    role: "B.Tech in AI & Data Science",
    company: "Engineering University",
    date: "2022 - 2026",
    align: "left",
    icon: <FaGraduationCap />,
    summary: "Comprehensive academic training in AI, Machine Learning, Data Analytics, and Data Structures.",
    details: [
      "Coursework in Data Structures, Deep Learning, DBMS, Applied Math.",
      "Active participant in technical hackathons and coding challenges."
    ],
    tech: ["Python", "Java", "C++", "SQL", "Data Structures"]
  }
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);
  const expScrollRef = useRef(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const container = expScrollRef.current;
    if (!container || window.innerWidth > 768) return;

    let isPaused = false;
    const onTouchStart = () => { isPaused = true; };
    const onTouchEnd = () => {
      setTimeout(() => { isPaused = false; }, 2500);
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    const interval = setInterval(() => {
      if (isPaused || !container) return;
      const cardWidth = container.firstElementChild?.offsetWidth || 300;
      const gap = 19;
      const maxScroll = container.scrollWidth - container.clientWidth;
      let nextScroll = container.scrollLeft + cardWidth + gap;

      if (nextScroll >= maxScroll - 15) {
        nextScroll = 0;
      }

      container.scrollTo({
        left: nextScroll,
        behavior: "smooth",
      });
    }, 3400);

    return () => {
      clearInterval(interval);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <Section id="experience">
      <SectionHeader>
        <div className="subtitle">Career & Academics</div>
        <h2>
          Experience & <span>Education</span>
        </h2>
      </SectionHeader>

      <TimelineContainer ref={expScrollRef}>
        {experiences.map((exp) => (
          <TimelineItem key={exp.id} align={exp.align}>
            <TimelineNode>{exp.icon}</TimelineNode>
            <CardWrapper>
              <ExperienceCard
                onClick={() => toggleExpand(exp.id)}
                whileHover={{ scale: 1.01 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                  <div>
                    <h3 className="role">{exp.role}</h3>
                    <div className="company">{exp.company}</div>
                  </div>
                  <span className="mobile-icon">{exp.icon}</span>
                </div>

                <div className="date">
                  <FaCalendarAlt /> {exp.date}
                </div>

                <p className="description">{exp.summary}</p>

                <button className="expand-btn">
                  {expandedId === exp.id ? (
                    <>Hide Details <FaChevronUp /></>
                  ) : (
                    <>View Highlights <FaChevronDown /></>
                  )}
                </button>

                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div
                      className="details-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ul>
                        {exp.details.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>

                      <div className="tech-stack">
                        {exp.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ExperienceCard>
            </CardWrapper>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </Section>
  );
};

export default Experience;
