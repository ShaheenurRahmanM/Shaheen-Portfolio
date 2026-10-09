import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCogs,
  FaBriefcase,
  FaChartLine,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #00c4ff, #7000ff, #00ffd0);
  transform-origin: 0%;
  z-index: 99999;
  box-shadow: 0 0 10px rgba(0, 196, 255, 0.8);
`;

const NavbarWrapper = styled(motion.div)`
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 9999;
  padding: 0 1.5rem;
`;

const NavbarContainer = styled.nav`
  position: relative;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  border-radius: 999px;
  background: rgba(10, 14, 26, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 196, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 196, 255, 0.1);

  @media (max-width: 768px) {
    padding: 0.7rem 1.4rem;
    border-radius: 20px;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
  letter-spacing: 1px;
  cursor: pointer;
  line-height: 1;

  a {
    color: #00c4ff;
    font-family: 'Modernline', sans-serif;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #ffffff;
      text-shadow: 0 0 12px #00c4ff, 0 0 20px #00c4ff;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled(motion.button)`
  background: ${(props) => (props.active ? "rgba(0, 196, 255, 0.15)" : "transparent")};
  border: 1px solid ${(props) => (props.active ? "rgba(0, 196, 255, 0.4)" : "transparent")};
  color: ${(props) => (props.active ? "#00c4ff" : "rgba(255, 255, 255, 0.8)")};
  padding: 0.55rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.25s ease;
  box-shadow: ${(props) => (props.active ? "0 0 12px rgba(0, 196, 255, 0.25)" : "none")};

  &:hover {
    color: #00c4ff;
    background: rgba(0, 196, 255, 0.08);
    transform: translateY(-2px);
  }
`;

const ResumeButton = styled(motion.a)`
  text-decoration: none;
  background: linear-gradient(135deg, #00c4ff, #0094ff);
  color: #ffffff;
  padding: 0.6rem 1.3rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.88rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 0 15px rgba(0, 196, 255, 0.35);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 25px rgba(0, 196, 255, 0.7);
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileToggle = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #00c4ff;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 72px;
  right: 0;
  width: 250px;
  background: rgba(10, 14, 26, 0.96);
  backdrop-filter: blur(24px);
  border-radius: 20px;
  padding: 1.2rem;
  border: 1px solid rgba(0, 196, 255, 0.25);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const MobileItem = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#00c4ff" : "rgba(255, 255, 255, 0.85)")};
  background: ${(props) => (props.active ? "rgba(0, 196, 255, 0.12)" : "transparent")};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(0, 196, 255, 0.15);
    color: #00c4ff;
  }
`;

const navItems = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "skills", label: "Expertise", icon: <FaCogs /> },
  { id: "projects", label: "Projects", icon: <FaBriefcase /> },
  { id: "experience", label: "Experience", icon: <FaChartLine /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Navbar = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    let lastScrollY = 0;
    return scrollY.on("change", (latest) => {
      if (latest > lastScrollY && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = latest;
    });
  }, [scrollY]);

  const handleNavClick = (id) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <>
      <ProgressBar style={{ scaleX }} />

      <NavbarWrapper
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <NavbarContainer>
          <Logo>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
              style={{
                color: "#00c4ff",
                textDecoration: "none",
                cursor: "pointer",
                fontFamily: "Modernline, sans-serif",
              }}
            >
              Shaheen
            </a>
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                active={activeSection === item.id}
                onClick={() => handleNavClick(item.id)}
              >
                {item.icon}
                {item.label}
              </NavItem>
            ))}
          </NavLinks>

          <ResumeButton
            href="/Shaheenur_Rahman.M_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume <FaDownload />
          </ResumeButton>

          <MobileToggle onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </MobileToggle>

          <AnimatePresence>
            {menuOpen && (
              <MobileMenu
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                {navItems.map((item) => (
                  <MobileItem
                    key={item.id}
                    active={activeSection === item.id}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.icon}
                    {item.label}
                  </MobileItem>
                ))}
                <MobileItem
                  as="a"
                  href="/Shaheenur_Rahman.M_Resume.pdf"
                  download
                  style={{
                    color: "#00c4ff",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    marginTop: "0.4rem",
                  }}
                >
                  <FaDownload /> Download Resume
                </MobileItem>
              </MobileMenu>
            )}
          </AnimatePresence>
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
