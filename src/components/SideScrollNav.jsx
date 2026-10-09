import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SideNavWrapper = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.3rem;
  z-index: 999;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const NavDotContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  position: relative;

  .tooltip {
    opacity: 0;
    transform: translateX(10px);
    font-size: 0.78rem;
    font-weight: 700;
    color: #00c4ff;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    background: rgba(10, 14, 26, 0.92);
    padding: 0.3rem 0.7rem;
    border-radius: 6px;
    border: 1px solid rgba(0, 196, 255, 0.3);
    backdrop-filter: blur(8px);
    transition: all 0.25s ease;
    white-space: nowrap;
    pointer-events: none;
  }

  &:hover .tooltip {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SectionIndex = styled.span`
  font-family: 'Orbitron', 'Montserrat', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  color: ${(props) => (props.active ? "#00c4ff" : "rgba(255, 255, 255, 0.35)")};
  transition: color 0.3s ease;
`;

const NavDot = styled.div`
  width: ${(props) => (props.active ? "10px" : "6px")};
  height: ${(props) => (props.active ? "10px" : "6px")};
  border-radius: 50%;
  background: ${(props) => (props.active ? "#00c4ff" : "rgba(255, 255, 255, 0.25)")};
  box-shadow: ${(props) => (props.active ? "0 0 10px #00c4ff, 0 0 16px #00c4ff" : "none")};
  transition: all 0.3s ease;

  ${NavDotContainer}:hover & {
    background: #00c4ff;
    transform: scale(1.3);
  }
`;

const sections = [
  { id: "home", num: "01", label: "Home" },
  { id: "about", num: "02", label: "About" },
  { id: "skills", num: "03", label: "Expertise" },
  { id: "projects", num: "04", label: "Projects" },
  { id: "experience", num: "05", label: "Experience" },
  { id: "contact", num: "06", label: "Contact" },
];

const SideScrollNav = ({ activeSection, scrollToSection }) => {
  return (
    <SideNavWrapper>
      {sections.map((sec) => (
        <NavDotContainer key={sec.id} onClick={() => scrollToSection(sec.id)}>
          <div className="tooltip">{sec.label}</div>
          <SectionIndex active={activeSection === sec.id}>{sec.num}</SectionIndex>
          <NavDot active={activeSection === sec.id} />
        </NavDotContainer>
      ))}
    </SideNavWrapper>
  );
};

export default SideScrollNav;
