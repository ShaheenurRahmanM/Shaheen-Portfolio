
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import styled from "styled-components";
// import { FaHome, FaCogs, FaEnvelope, FaUser, FaBriefcase, FaChartLine } from "react-icons/fa";

// const NavbarContainer = styled(motion.nav)`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   background: rgba(0, 0, 0, 0.8);
//   z-index: 10;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
// `;

// const Logo = styled.h1`
//   font-size: 1.8rem;
//   color: #00c4ff;
//   letter-spacing: 2px;
//   cursor: pointer;
//   line-height: 1.5;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 2rem;
//   @media (max-width: 768px) {
//     display: none; /* Hide links on smaller screens */
//   }
// `;

// const MobileMenu = styled.div`
//   display: none;
//   @media (max-width: 768px) {
//     display: block;
//     cursor: pointer;
//     font-size: 1.5rem;
//     color: #00c4ff;
//   }
// `;

// const LinkWrapper = styled.a`
//   font-size: 1.1rem;
//   color: #fff;
//   position: relative;
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   transition: all 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     color: #00c4ff;
//     transform: translateY(-5px);
//   }

//   &:after {
//     content: "";
//     position: absolute;
//     bottom: -3px;
//     left: 0;
//     width: 100%;
//     height: 2px;
//     background-color: #00c4ff;
//     transform: scaleX(0);
//     transition: transform 0.3s ease;
//   }

//   &:hover::after {
//     transform: scaleX(1);
//   }
// `;

// const Navbar = ({ isMobile, currentPage, setCurrentPage }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleNavigation = (path) => {
//     if (isMobile) {
//       const element = document.getElementById(path.replace('/', '') || 'home');
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       setCurrentPage(path);
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <NavbarContainer
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* <Logo>
//         <a 
//           onClick={() => handleNavigation('/')} 
//           style={{ color: "#00c4ff", textDecoration: "none", cursor: "pointer" }}
//         >
//           Shaheen
//         </a>
//       </Logo> */}

//     <Logo>
//       <a 
//         onClick={() => handleNavigation('/')} 
//         style={{
//           color: "#00c4ff", 
//           textDecoration: "none", 
//           cursor: "pointer", 
//           fontFamily: "Modernline, sans-serif"
//         }}
//       >
//         Shaheen
//       </a>
//     </Logo>


//       <NavLinks id="desktopLinks">
//         <LinkWrapper onClick={() => handleNavigation('/')} className={currentPage === '/' ? 'active' : ''}>
//           <FaHome />Home
//         </LinkWrapper>
//         <LinkWrapper onClick={() => handleNavigation('/about')} className={currentPage === '/about' ? 'active' : ''}>
//           <FaUser />About
//         </LinkWrapper>
//         <LinkWrapper onClick={() => handleNavigation('/skills')} className={currentPage === '/skills' ? 'active' : ''}>
//           <FaCogs />Expertize
//         </LinkWrapper>
//         <LinkWrapper onClick={() => handleNavigation('/projects')} className={currentPage === '/projects' ? 'active' : ''}>
//           <FaBriefcase />Projects
//         </LinkWrapper>
//         <LinkWrapper onClick={() => handleNavigation('/experience')} className={currentPage === '/experience' ? 'active' : ''}>
//           <FaChartLine />Experience
//         </LinkWrapper>
//         <LinkWrapper onClick={() => handleNavigation('/contact')} className={currentPage === '/contact' ? 'active' : ''}>
//           <FaEnvelope />Contact
//         </LinkWrapper>
//       </NavLinks>
//       <MobileMenu onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//         {isMobileMenuOpen ? "✖" : "☰"}
//       </MobileMenu>
//       <NavLinks
//         id="mobileLinks"
//         style={{
//           display: isMobileMenuOpen ? "flex" : "none",
//           flexDirection: "column",
//           gap: "1rem",
//           position: "absolute",
//           top: "4rem",
//           right: "1rem",
//           backgroundColor: "rgba(0, 0, 0, 0.9)",
//           padding: "1rem",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
//         }}
//       >
//         <LinkWrapper onClick={() => handleNavigation('/')}>Home</LinkWrapper>
//         <LinkWrapper onClick={() => handleNavigation('/about')}>About</LinkWrapper>
//         <LinkWrapper onClick={() => handleNavigation('/skills')}>Skills</LinkWrapper>
//         <LinkWrapper onClick={() => handleNavigation('/projects')}>Projects</LinkWrapper>
//         <LinkWrapper onClick={() => handleNavigation('/experience')}>Experience</LinkWrapper>
//         <LinkWrapper onClick={() => handleNavigation('/contact')}>Contact</LinkWrapper>
//       </NavLinks>
//     </NavbarContainer>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaHome, FaCogs, FaEnvelope, FaUser, FaBriefcase, FaChartLine, FaBars, FaTimes } from "react-icons/fa";

const NavbarContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #00c4ff;
  letter-spacing: 2px;
  cursor: pointer;
  line-height: 1.5;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    text-shadow: 0 0 8px #00c4ff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none; /* hide on mobile */
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.8rem;
    color: #00c4ff;
  }
`;

const LinkWrapper = styled.a`
  font-size: 1.1rem;
  color: ${({ active }) => (active ? "#00c4ff" : "#fff")};
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #00c4ff;
    transform: translateY(-3px);
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #00c4ff;
    transform: scaleX(${({ active }) => (active ? 1 : 0)});
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const MobileNavLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 4rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.95);
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

const Navbar = ({ isMobile, currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    if (isMobile) {
      const element = document.getElementById(path.replace("/", "") || "home");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setCurrentPage(path);
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <FaUser /> },
    { path: "/skills", label: "Expertize", icon: <FaCogs /> },
    { path: "/projects", label: "Projects", icon: <FaBriefcase /> },
    { path: "/experience", label: "Experience", icon: <FaChartLine /> },
    { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <NavbarContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <Logo onClick={() => handleNavigation("/")}>Shaheen</Logo> */}

      <Logo>
       <a 
         onClick={() => handleNavigation('/')} 
         style={{
           color: "#00c4ff", 
           textDecoration: "none", 
           cursor: "pointer", 
           fontFamily: "Modernline, sans-serif"
         }}
       >
         Shaheen
       </a>
     </Logo>

      {/* Desktop Links */}
      <NavLinks>
        {navItems.map(({ path, label, icon }) => (
          <LinkWrapper
            key={path}
            onClick={() => handleNavigation(path)}
            active={currentPage === path}
          >
            {icon}
            {label}
          </LinkWrapper>
        ))}
      </NavLinks>

      {/* Mobile Menu Icon */}
      <MobileMenu onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenu>

      {/* Mobile Links with Animation */}
      {isMobileMenuOpen && (
        <MobileNavLinks
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map(({ path, label }) => (
            <LinkWrapper key={path} onClick={() => handleNavigation(path)}>
              {label}
            </LinkWrapper>
          ))}
        </MobileNavLinks>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
