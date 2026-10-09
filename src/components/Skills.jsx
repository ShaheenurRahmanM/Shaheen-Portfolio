import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaReact,
  FaDatabase,
  FaCertificate,
  FaBrain,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiCplusplus, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiJavascript, SiFlask, SiTailwindcss } from "react-icons/si";

const Section = styled.section`
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  padding: 85px 8% 30px;
  background: linear-gradient(180deg, #080a14 0%, #0d1222 50%, #090c17 100%);
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

const CategoryTabs = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const TabButton = styled(motion.button)`
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

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 0.8rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1rem 1.2rem;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  @media (max-width: 768px) {
    min-width: 200px;
    max-width: 200px;
    flex-shrink: 0;
    scroll-snap-align: center;
  }

  &:hover {
    background: rgba(0, 196, 255, 0.06);
    border-color: rgba(0, 196, 255, 0.35);
    transform: translateY(-3px);
  }

  .top-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .icon-box {
    font-size: 1.6rem;
    color: #00c4ff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(0, 196, 255, 0.1);
  }

  .name-box {
    flex: 1;

    h3 {
      font-size: 0.95rem;
      color: #ffffff;
      font-weight: 700;
    }

    span {
      font-size: 0.75rem;
      color: #00ffd0;
      font-weight: 600;
    }
  }

  .level-bar-container {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
    overflow: hidden;
  }

  .level-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #00c4ff, #00ffd0);
    border-radius: 999px;
  }
`;

const CertificationsSection = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const CertTitle = styled.h3`
  font-size: 1.2rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;

  span {
    color: #00c4ff;
  }
`;

const CertificationsWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
`;

const CertificationsTrack = styled.div`
  display: flex;
  gap: 1.2rem;
  width: max-content;
  animation: scrollCert 35s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scrollCert {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const CertCard = styled.div`
  flex: 0 0 auto;
  width: 240px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 196, 255, 0.15);
  border-radius: 14px;
  padding: 0.9rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #00ffd0;
  }

  .cert-icon {
    font-size: 1.5rem;
    color: #00c4ff;
    flex-shrink: 0;
  }

  h4 {
    font-size: 0.85rem;
    color: #ffffff;
    font-weight: 600;
    line-height: 1.3;
  }
`;

const skillsData = [
  { name: "Python", category: "Languages", icon: <FaPython />, level: 95 },
  { name: "Java", category: "Languages", icon: <FaJava />, level: 88 },
  { name: "C++", category: "Languages", icon: <SiCplusplus />, level: 82 },
  { name: "JavaScript", category: "Languages", icon: <SiJavascript />, level: 90 },
  { name: "SQL", category: "Languages", icon: <FaDatabase />, level: 85 },
  
  { name: "TensorFlow & Keras", category: "AI & ML", icon: <SiTensorflow />, level: 88 },
  { name: "PyTorch", category: "AI & ML", icon: <SiPytorch />, level: 84 },
  { name: "Scikit-Learn", category: "AI & ML", icon: <SiScikitlearn />, level: 92 },
  { name: "Computer Vision (OpenCV)", category: "AI & ML", icon: <SiOpencv />, level: 85 },
  { name: "Generative AI & LLMs", category: "AI & ML", icon: <FaBrain />, level: 90 },
  
  { name: "React.js", category: "Web & Frameworks", icon: <FaReact />, level: 92 },
  { name: "Flask / FastAPI", category: "Web & Frameworks", icon: <SiFlask />, level: 86 },
  { name: "Tailwind / CSS", category: "Web & Frameworks", icon: <SiTailwindcss />, level: 90 },
  
  { name: "Git & GitHub", category: "Tools", icon: <FaGitAlt />, level: 92 },
  { name: "Docker", category: "Tools", icon: <FaDocker />, level: 78 },
  { name: "AWS Cloud", category: "Tools", icon: <FaAws />, level: 75 },
];

const certifications = [
  "Prompt Engineering for Chat-GPT",
  "Python for Data Science",
  "Advanced Java Programming",
  "AI Fundamentals",
  "Foundations of Cybersecurity",
  "Career Essentials in Generative AI",
  "Machine Learning Essentials",
  "Microsoft Azure Fundamentals",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const skillsScrollRef = useRef(null);

  const categories = ["All", "AI & ML", "Languages", "Web & Frameworks", "Tools"];

  const filteredSkills =
    activeCategory === "All"
      ? skillsData.slice(0, 8)
      : skillsData.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    const container = skillsScrollRef.current;
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
      const cardWidth = container.firstElementChild?.offsetWidth || 200;
      const gap = 16;
      const maxScroll = container.scrollWidth - container.clientWidth;
      let nextScroll = container.scrollLeft + cardWidth + gap;

      if (nextScroll >= maxScroll - 10) {
        nextScroll = 0;
      }

      container.scrollTo({
        left: nextScroll,
        behavior: "smooth",
      });
    }, 2800);

    return () => {
      clearInterval(interval);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeCategory]);

  return (
    <Section id="skills">
      <SectionHeader>
        <div className="subtitle">Technical Proficiency</div>
        <h2>
          Skills & <span>Certifications</span>
        </h2>
      </SectionHeader>

      <CategoryTabs>
        {categories.map((cat) => (
          <TabButton
            key={cat}
            active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </TabButton>
        ))}
      </CategoryTabs>

      <SkillsGrid ref={skillsScrollRef} layout>
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              layout
            >
              <div className="top-info">
                <div className="icon-box">{skill.icon}</div>
                <div className="name-box">
                  <h3>{skill.name}</h3>
                  <span>{skill.category}</span>
                </div>
              </div>
              <div className="level-bar-container">
                <div
                  className="level-bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </SkillCard>
          ))}
        </AnimatePresence>
      </SkillsGrid>

      <CertificationsSection>
        <CertTitle>
          Verified <span>Credentials</span>
        </CertTitle>
        <CertificationsWrapper>
          <CertificationsTrack>
            {[...certifications, ...certifications].map((cert, index) => (
              <CertCard key={index}>
                <FaCertificate className="cert-icon" />
                <h4>{cert}</h4>
              </CertCard>
            ))}
          </CertificationsTrack>
        </CertificationsWrapper>
      </CertificationsSection>
    </Section>
  );
};

export default Skills;
