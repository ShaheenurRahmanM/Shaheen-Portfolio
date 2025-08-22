import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import prof from "../assests/prof.png";

// About Section Styling
const AboutSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #121212;
  color: #f0f0f0;
  padding: 6rem 2rem 4rem;
`;

const AboutContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const AboutTextContainer = styled.div`
  max-width: 600px;
`;

const AboutTitle = styled(motion.h2)`
  font-size: 2.8rem;
  color: #00c4ff;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Highlight = styled.span`
  color: #00c4ff;
  font-weight: 600;
`;

const AboutText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #dcdcdc;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutImageContainer = styled(motion.div)`
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(2deg);
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
  `;

const GlowingEffect = styled.div`
  position: absolute;
  width: 360px;
  height: 360px;
  background: radial-gradient(circle, rgba(0, 196, 255, 0.4), transparent);
  border-radius: 50%;
  filter: blur(90px);
  z-index: 0;
  `;

  const AboutImage = styled(motion.img)`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  box-shadow: 0 8px 20px rgba(0, 196, 255, 0.2);
`;

const CTAButton = styled(motion.button)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.9rem 2rem;
  background: #00c4ff;
  color: #121212;
  font-size: 1.05rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 196, 255, 0.3);
  
  &:hover {
    background: #009ac7;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 196, 255, 0.5);
  }
`;

// About Component
const About = ({ isMobile, setCurrentPage }) => {
  const { ref: aboutRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleCTA = () => {
    if (isMobile) {
      // Scroll on mobile
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Switch page on desktop
      setCurrentPage("/projects");
    }
  };

  return (
    <AboutSection ref={aboutRef} id="about">
      <AboutContainer
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Text */}
        <AboutTextContainer>
          <AboutTitle
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            About Me
          </AboutTitle>
          <AboutText
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hi, I’m <Highlight>Shaheen</Highlight> — a developer
            and problem-solver with a strong passion for{" "}
            <Highlight>AI</Highlight> and <Highlight>Data Science</Highlight>.  
            I’m curious about how intelligent systems can solve real-world
            challenges, and I love experimenting with technologies that push the
            boundaries of what’s possible.
            <br /><br />
            Beyond just writing code, I enjoy exploring new frameworks,
            analyzing data, and crafting solutions that are both functional and
            impactful. Whether it’s designing intuitive user experiences,
            building AI-driven models, or collaborating on innovative projects,
            I thrive on learning and creating.
            <br /><br />
            My journey is still unfolding, but with every project I take on,
            I’m sharpening my skills, fueling my creativity, and moving closer
            to contributing to the future of AI and technology.
          </AboutText>

          {/* CTA Button */}
          <CTAButton
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleCTA}
            >
            View My Projects
          </CTAButton>
        </AboutTextContainer>

        {/* Image */}
        <AboutImageContainer>
          <GlowingEffect />
          <AboutImage
            src={prof}
            alt="Profile picture of Shaheenur Rahman"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />
        </AboutImageContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;



// import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import prof from "../assests/prof.png";

// // About Section Styling
// const AboutSection = styled.section`
//   min-height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: #121212;
//   color: #f0f0f0;
//   padding: 2rem;
// `;

// const AboutContainer = styled(motion.div)`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 2rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     text-align: center;
//   }
// `;

// const AboutTextContainer = styled.div`
//   max-width: 600px;
//   margin-right: 2rem;

//   @media (max-width: 768px) {
//     margin-right: 0;
//     margin-bottom: 1.5rem;
//   }
// `;

// const AboutTitle = styled(motion.h2)`
//   font-size: 3rem;
//   color: #00c4ff;
//   margin-bottom: 1rem;

//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }
// `;

// const AboutText = styled(motion.p)`
//   font-size: 1.2rem;
//   margin-bottom: 2rem;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const AboutImageContainer = styled.div`
//   position: relative;
//   width: 300px;
//   height: 300px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 768px) {
//     width: 250px;
//     height: 250px;
//   }
// `;

// const GlowingEffect = styled.div`
//   position: absolute;
//   width: 400px;
//   height: 400px;
//   background: radial-gradient(circle, rgba(0, 196, 255, 0.6), transparent);
//   border-radius: 50%;
//   filter: blur(80px);
//   z-index: 0;
//   animation: glow 4s infinite;

//   @keyframes glow {
//     0% {
//       transform: scale(1);
//       opacity: 0.8;
//     }
//     50% {
//       transform: scale(1.2);
//       opacity: 1;
//     }
//     100% {
//       transform: scale(1);
//       opacity: 0.8;
//     }
//   }
// `;

// const AboutImage = styled(motion.img)`
//   border-radius: 50%;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: 1; /* Place image above the glowing effect */
// `;

// const About = () => {
//   const { ref: aboutRef, inView } = useInView({
//     triggerOnce: true, // Animation triggers only once when it comes into view
//     threshold: 0.3, // Trigger animation when 30% of the component is visible
//   });

//   return (
//     <AboutSection ref={aboutRef}>
//       <AboutContainer
//         initial={{ opacity: 0, y: 50 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1.5 }}
//       >
//         <AboutTextContainer>
//           <AboutTitle
//             initial={{ x: -100, opacity: 0 }}
//             animate={inView ? { x: 0, opacity: 1 } : {}}
//             transition={{ duration: 1 }}
//           >
//             About Me
//           </AboutTitle>
//           {/* <AboutText
//             initial={{ x: -100, opacity: 0 }}
//             animate={inView ? { x: 0, opacity: 1 } : {}}
//             transition={{ duration: 1.5, delay: 0.5 }}
//           >
//             Hi, I'm Shaheenur Rahman, a passionate developer with a keen interest
//             in AI, data science, and front-end development. I love creating
//             innovative solutions that bridge the gap between technology and
//             real-world applications. Welcome to my portfolio!
//           </AboutText> */}
//           <AboutText
//             initial={{ x: -100, opacity: 0 }}
//             animate={inView ? { x: 0, opacity: 1 } : {}}
//             transition={{ duration: 1.5, delay: 0.5 }}
//           >
//             Hi, I’m Shaheen—a developer and problem-solver with a strong passion for AI and Data Science.
//             I’m deeply curious about how intelligent systems can be built to solve real-world problems, 
//             and I enjoy experimenting with technologies that push the boundaries of what’s possible.
//             <br /><br />
//             Beyond just writing code, I love exploring new frameworks, analyzing data, and crafting solutions that are both meaningful and impactful.
//              Whether it’s designing intuitive user experiences, building AI-driven models, or collaborating on innovative projects,
//               I thrive on learning and creating.
//             <br /><br />
//             My journey is still unfolding, but with every project I take on, I’m sharpening my skills, 
//             fueling my creativity, and moving closer to my goal of contributing to the future of AI and technology.
//           </AboutText>
//         </AboutTextContainer>

//         <AboutImageContainer>
//           <GlowingEffect />
//           <AboutImage
//             src={prof}
//             alt="Shaheenur Rahman"
//             initial={{ scale: 0 }}
//             animate={inView ? { scale: 1 } : {}}
//             transition={{ duration: 1.5, delay: 0.5 }}
//           />
//         </AboutImageContainer>
//       </AboutContainer>
//     </AboutSection>
//   );
// };

// export default About;