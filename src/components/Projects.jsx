import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Section = styled.section`
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  padding: 85px 8% 30px;
  background: linear-gradient(180deg, #090c17 0%, #0d1222 50%, #080a14 100%);
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 1.5rem;

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

const FilterContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const FilterBtn = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border-radius: 999px;
  border: 1px solid ${(props) => (props.active ? "#00c4ff" : "rgba(255, 255, 255, 0.1)")};
  background: ${(props) => (props.active ? "rgba(0, 196, 255, 0.15)" : "rgba(255, 255, 255, 0.03)")};
  color: ${(props) => (props.active ? "#00c4ff" : "rgba(255, 255, 255, 0.75)")};
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.25s ease;

  &:hover {
    color: #00c4ff;
    border-color: rgba(0, 196, 255, 0.4);
    background: rgba(0, 196, 255, 0.08);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
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

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 196, 255, 0.15);
  border-radius: 18px;
  padding: 1.3rem;
  backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-width: 82vw;
    max-width: 82vw;
    flex-shrink: 0;
    scroll-snap-align: center;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, #00c4ff, #00ffd0);
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 196, 255, 0.45);
    box-shadow: 0 10px 30px rgba(0, 196, 255, 0.18);
  }

  .category-tag {
    font-size: 0.72rem;
    font-weight: 700;
    color: #00ffd0;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 0.4rem;
  }

  h3 {
    font-size: 1.15rem;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  .tech-tag {
    font-size: 0.72rem;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    background: rgba(0, 196, 255, 0.1);
    color: #00c4ff;
    border: 1px solid rgba(0, 196, 255, 0.2);
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 0.8rem;
  }

  .details-btn {
    background: none;
    border: none;
    color: #00c4ff;
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    padding: 0;

    &:hover {
      text-decoration: underline;
      color: #00ffd0;
    }
  }

  .links {
    display: flex;
    gap: 0.8rem;

    a {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.1rem;
      transition: color 0.2s ease, transform 0.2s ease;

      &:hover {
        color: #00c4ff;
        transform: scale(1.15);
      }
    }
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(16px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const ModalContent = styled(motion.div)`
  background: #0d1124;
  border: 1px solid rgba(0, 196, 255, 0.3);
  border-radius: 24px;
  max-width: 600px;
  width: 100%;
  padding: 2rem;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 196, 255, 0.25);

  .close-btn {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: rgba(255, 255, 255, 0.08);
    border: none;
    color: #ffffff;
    font-size: 1.1rem;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #00c4ff;
      color: #070913;
    }
  }

  h3 {
    font-size: 1.6rem;
    color: #00c4ff;
    font-weight: 800;
    margin-bottom: 0.4rem;
  }

  .modal-cat {
    color: #00ffd0;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }

  .section-title {
    font-size: 1rem;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }

  ul {
    list-style: none;
    margin-bottom: 1.5rem;

    li {
      position: relative;
      padding-left: 1.3rem;
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.88rem;
      margin-bottom: 0.4rem;
      line-height: 1.4;

      &::before {
        content: "▹";
        position: absolute;
        left: 0;
        color: #00c4ff;
      }
    }
  }

  .modal-actions {
    display: flex;
    gap: 1rem;

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(0, 196, 255, 0.3);
      color: #ffffff;

      &:hover {
        border-color: #00c4ff;
        color: #00c4ff;
      }
    }
  }
`;

const projectList = [
  {
    id: 1,
    title: "Skill Gap Detector",
    category: "AI / ML Solutions",
    description: "Analyzes job roles & profiles using NLP and TF-IDF to detect skill gaps and recommend courses.",
    details: [
      "Extracted job descriptions using web scraping and NLP parsing.",
      "Implemented TF-IDF vectorization and Cosine Similarity algorithms.",
      "Delivered interactive dashboards recommending targeted courses."
    ],
    tech: ["Python", "NLP", "Scikit-Learn", "React.js"],
    github: "https://github.com/ShaheenurRahmanM",
    live: "#"
  },
  {
    id: 2,
    title: "MediMind AI Assistant",
    category: "AI / ML Solutions",
    description: "Generative AI health assistant offering preliminary medical insights with fine-tuned safety guardrails.",
    details: [
      "Integrated LLM APIs with fine-tuned medical prompt guardrails.",
      "Built multi-modal patient interaction interfaces with voice input support.",
      "Ensured data security and privacy best practices."
    ],
    tech: ["Python", "GenAI", "LangChain", "FastAPI"],
    github: "https://github.com/ShaheenurRahmanM",
    live: "#"
  },
  {
    id: 3,
    title: "AI Code Reviewer",
    category: "AI / ML Solutions",
    description: "Deep learning code analysis system detecting vulnerabilities and suggesting refactoring.",
    details: [
      "Analyzes abstract syntax trees (AST) and code embeddings.",
      "Provides real-time feedback on complexity metrics and syntax style.",
      "Boosted developer productivity by offering contextual quick-fixes."
    ],
    tech: ["Python", "PyTorch", "LLMs", "Node.js"],
    github: "https://github.com/ShaheenurRahmanM",
    live: "#"
  },
  {
    id: 4,
    title: "Real-Time Emotion AI",
    category: "AI / ML Solutions",
    description: "Computer Vision pipeline recognizing facial expressions and hand gestures at 60 FPS.",
    details: [
      "Trained custom CNNs with OpenCV and MediaPipe landmark tracking.",
      "Achieved 94%+ accuracy across 7 distinct facial emotion classes.",
      "Optimized frame processing rates to maintain 60 FPS performance."
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "MediaPipe"],
    github: "https://github.com/ShaheenurRahmanM",
    live: "#"
  },
  {
    id: 5,
    title: "Resume Candidate Ranker",
    category: "Data Science",
    description: "Automated candidate screening tool using spaCy and BERT embeddings to rank candidate resumes.",
    details: [
      "Parsed complex PDF/DOCX layouts into structured JSON schema.",
      "Utilized semantic matching via Transformer embeddings.",
      "Reduced recruiter screening time by over 70%."
    ],
    tech: ["Python", "BERT", "spaCy", "Pandas"],
    github: "https://github.com/ShaheenurRahmanM",
    live: "#"
  },
  {
    id: 6,
    title: "Predictive Analytics Web",
    category: "Full Stack Web",
    description: "Full-stack dashboard forecasting sales trends, customer churn, and inventory requirements.",
    details: [
      "Built ARIMA and XGBoost forecasting algorithms.",
      "Designed interactive charts with React and Recharts.",
      "Engineered automated ETL data pipelines."
    ],
    tech: ["Python", "React.js", "PostgreSQL", "XGBoost"],
    github: "https://github.com/ShaheenurRahmanM",
    live: "#"
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);

  const filters = ["All", "AI / ML Solutions", "Data Science", "Full Stack Web"];

  const filteredProjects =
    activeFilter === "All"
      ? projectList
      : projectList.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const container = carouselRef.current;
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
    }, 3200);

    return () => {
      clearInterval(interval);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeFilter]);

  return (
    <Section id="projects">
      <SectionHeader>
        <div className="subtitle">Portfolio Showcase</div>
        <h2>
          Featured <span>Projects</span>
        </h2>
      </SectionHeader>

      <FilterContainer>
        {filters.map((f) => (
          <FilterBtn
            key={f}
            active={activeFilter === f}
            onClick={() => setActiveFilter(f)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {f}
          </FilterBtn>
        ))}
      </FilterContainer>

      <ProjectsGrid ref={carouselRef} layout>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <div>
                <div className="category-tag">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((t) => (
                    <span className="tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-footer">
                <button
                  className="details-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details →
                </button>
                <div className="links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Code"
                  >
                    <FaGithub />
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Preview"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>

              <div className="modal-cat">{selectedProject.category}</div>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>

              <div className="section-title">Key Engineering Highlights</div>
              <ul>
                {selectedProject.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>

              <div className="modal-actions">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> View Source Code
                </a>
              </div>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;