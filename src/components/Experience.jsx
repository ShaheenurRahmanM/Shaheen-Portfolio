// import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";

// // Section Styling
// const ExperienceSection = styled.section`
//   min-height: 80vh;
//   width: 100%;
//   padding: 8rem 2rem 4rem; /* Top padding accounts for navbar */
//   background: #1a1a1a;
//   color: #f0f0f0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   scroll-margin-top: 80px; /* 👈 This is important for anchor scrolling */
// `;


// // Title
// const SectionTitle = styled.h2`
//   font-size: 3.5rem;
//   color: #00c4ff;
//   font-weight: bold;
//   margin-bottom: 3rem;
//   text-align: center;
//   text-transform: uppercase;

//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }
// `;

// // Experience Card Container
// const ExperienceCard = styled(motion.div)`
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid #00c4ff44;
//   border-radius: 20px;
//   padding: 2rem;
//   margin-bottom: 2rem;
//   width: 90%;
//   max-width: 800px;
//   box-shadow: 0 0 20px rgba(0, 196, 255, 0.2);
//   transition: 0.3s ease;

//   &:hover {
//     transform: scale(1.02);
//     box-shadow: 0 0 30px rgba(0, 196, 255, 0.4);
//   }

//   h3 {
//     font-size: 1.8rem;
//     color: #00c4ff;
//     margin-bottom: 0.5rem;
//   }

//   h4 {
//     font-size: 1.2rem;
//     color: #aaa;
//     margin-bottom: 1rem;
//   }

//   p {
//     font-size: 1rem;
//     color: #ddd;
//     line-height: 1.6;
//   }
// `;

// const Experience = () => {
//   return (
//     <ExperienceSection id="experience">
//       <SectionTitle>Experience</SectionTitle>

//       <ExperienceCard
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h3>Frontend Developer Intern</h3>
//         <h4>Personal Portfolio Project • Jan 2025 – Present</h4>
//         <p>
//           Designed and developed a full-featured portfolio website using React, Styled Components, and Framer Motion.
//           Integrated 3D visuals with @react-three/fiber, created reusable components, and implemented responsive layouts.
//           This project showcases my understanding of frontend technologies and user interface design.
//         </p>
//       </ExperienceCard>

//       <ExperienceCard
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//       >
//         <h3>Open Source Contributor</h3>
//         <h4>GitHub Projects • Ongoing</h4>
//         <p>
//           Actively exploring open-source repositories and contributing through bug fixes and improvements. This has helped
//           me understand collaborative development, Git workflows, and maintaining clean, readable code.
//         </p>
//       </ExperienceCard>
//     </ExperienceSection>
//   );
// };

// export default Experience;



import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLaptopCode, FaUserGraduate, FaRocket } from 'react-icons/fa';

// Glowing background animation
const glow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ExperienceSection = styled.section`
  min-height: 80vh;
  padding: 6rem 2rem 4rem;
  scroll-margin-top: 80px;
  background: linear-gradient(-45deg, #1a1a1a, #222, #1f1f1f, #2c2c2c);
  background-size: 400% 400%;
  animation: ${glow} 15s ease infinite;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 3rem;
  color: #00c4ff;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtext = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  text-align: center;
  margin-bottom: 3rem;
`;

const IconRow = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;

  svg {
    font-size: 3rem;
    color: #00c4ff;
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

const PlaceholderCard = styled.div`
  border: 2px dashed #00c4ff;
  padding: 2rem;
  max-width: 500px;
  text-align: center;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.03);
  box-shadow: 0 0 15px rgba(0, 196, 255, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 196, 255, 0.3);
  }

  h3 {
    color: #00c4ff;
    margin-bottom: 1rem;
  }

  p {
    color: #ccc;
  }
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Heading>Experience: A Journey in Progress</Heading>
      <Subtext>
        Though I may not have formal experience yet, I'm constantly learning, building, and preparing to create meaningful impact.
      </Subtext>

      <IconRow>
        <FaUserGraduate title="Learning Every Day" />
        <FaLaptopCode title="Building Projects" />
        <FaRocket title="Ready to Launch" />
      </IconRow>

      <PlaceholderCard>
        <h3>Coming Soon...</h3>
        <p>Stay tuned — my professional experience and achievements will be featured here shortly!</p>
      </PlaceholderCard>
    </ExperienceSection>
  );
};

export default Experience;
