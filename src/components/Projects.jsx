import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styled Components
const ProjectsSection = styled(motion.section)`
  min-height: 100vh;
  width: 100%;
  padding: 15rem 2rem 4rem;
  background: linear-gradient(135deg, #0f0f2d, #1a1a3a);
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  color: #00c4ff;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 1rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-left: 5px solid #00c4ff;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 196, 255, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  scroll-snap-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 196, 255, 0.4);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    flex-shrink: 0;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  color: #00c4ff;
  margin-bottom: 0.5rem;
`;

const TechStack = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: #00ffd0;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #ccc;
  margin-bottom: 1rem;
`;

const ProjectButton = styled.a`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: #00c4ff;
  color: #0f0f2d;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 0.8rem;

  &:hover {
    background: #00a3cc;
  }
`;

const Projects = () => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const scrollRef = useRef(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || window.innerWidth > 768) return;

    let scrollAmount = 0;
    const scrollStep = () => {
      const cardWidth = container.firstChild?.offsetWidth || 300;
      const gap = 16;
      const scrollWidth = container.scrollWidth;
      const maxScroll = scrollWidth - container.clientWidth;

      scrollAmount += cardWidth + gap;
      if (scrollAmount > maxScroll) scrollAmount = 0;

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const interval = setInterval(scrollStep, 3000);
    return () => clearInterval(interval);
  }, []);

  const projectList = [
    {
      id: 1,
      title: "Skill Gap Detector",
      description:
        "Analyzes LinkedIn profiles and top job roles to detect and recommend skills to improve.",
      techStack: "Python, ML, Streamlit, NLP, AI",
      link: "skillfit.streamlit.app",
    },
    {
      id: 2,
      title: "Skin Cancer Detection",
      description:
        "Deep learning model that classifies skin cancer from image data using CNNs.",
      techStack: "Python, TensorFlow, Deep Learning, Kaggle, Pre-Trained Models",
      link: "#",
    },
    {
      id: 3,
      title: "Audio PII Masker",
      description:
        "Transcribes audio and masks sensitive personal data using Whisper and LLMs.",
      techStack: "OpenAI Whisper, Python, Streamlit, NLP, LLMs, AI",
      link: "#",
    },
    {
      id: 4,
      title: "AI Chatbot with Gesture Control",
      description:
        "A speech-activated AI chatbot that controls system functions and recognizes hand gestures.",
      techStack: "Python, NLP, OpenCV, Streamlit",
      link: "#",
    },
    {
      id: 5,
      title: "Personal Portfolio",
      description:
        "Responsive portfolio built using modern UI/UX and animations showcasing all my work.",
      techStack: "React, Three.js, Styled-Components",
      link: "https://shaheenurrahmanm.vercel.app/",
    },
    {
      id: 6,
      title: "Blood Donation Portal",
      description:
        "Connects blood donors and seekers. Includes user registration, search, and donor listing.",
      techStack: "React, Node.js, MongoDB",
      link: "#",
    },
    {
      id: 7,
      title: "Finance Tracker",
      description:
        "Track income, expenses and generate monthly summaries with an interactive UI.",
      techStack: "HTML, CSS, JavaScript",
      link: "https://shaheenurrahmanm.github.io/FinanceTracker/",
    },
    {
      id: 8,
      title: "Workout Generator",
      description:
        "Auto-generates custom workout plans based on user goals and preferences.",
      techStack: "Python",
      link: "#",
    },
    {
      id: 9,
      title: "Dry Fruit E-Commerce App",
      description:
        "Mobile shopping app with clean UI for ordering dry fruits and spices.",
      techStack: "React Native",
      link: "#",
    },
  ];

  return (
    <ProjectsSection
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <SectionTitle
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        Projects
      </SectionTitle>

      <ProjectsContainer ref={scrollRef}>
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <TechStack>{project.techStack}</TechStack>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectButton href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectButton>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;



// import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // Styled Components
// const ProjectsSection = styled(motion.section)`
//   min-height: 100vh;
//   width: 100vw;
//   padding: 8rem 2rem 4rem;
//   background: #1a1a1a;
//   color: #f0f0f0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
  
// `;

// const SectionTitle = styled(motion.h2)`
//   font-size: 3rem;
//   color: #00c4ff;
//   margin-bottom: 2rem;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }
// `;

// const ProjectsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 2rem;
//   max-width: 1200px;
//   width: 100%;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ProjectCard = styled(motion.div)`
//   background: linear-gradient(135deg, #242424, #323232);
//   border-radius: 10px;
//   overflow: hidden;
//   position: relative;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
//   cursor: pointer;
//   padding: 1.5rem;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const ProjectContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   opacity: 0.9;
//   transform: translateY(20px);
//   transition: opacity 0.4s ease, transform 0.4s ease;

//   &:hover {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const ProjectTitle = styled.h3`
//   font-size: 1.5rem;
//   color: #00c4ff;
//   margin-bottom: 1rem;
// `;

// const ProjectDescription = styled.p`
//   font-size: 1rem;
//   line-height: 1.5;
//   color: #f0f0f0;
//   margin-bottom: 1rem;
// `;

// const ButtonWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin-top: 1rem;
// `;

// const ProjectButton = styled.a`
//   display: inline-block;
//   padding: 0.7rem 1.2rem;
//   background: #00c4ff;
//   color: #121212;
//   border-radius: 5px;
//   font-weight: bold;
//   text-decoration: none;
//   transition: background 0.3s ease;
//   text-align: center;

//   &:hover {
//     background: #00a3cc;
//   }
// `;

// const Projects = () => {
//   const { ref: sectionRef, inView } = useInView({
//     triggerOnce: true, // Trigger animation only once
//     threshold: 0.3, // Trigger when 30% of the section is in view
//   });

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <ProjectsSection
//       ref={sectionRef}
//       initial={{ opacity: 0 }}
//       animate={inView ? { opacity: 1 } : {}}
//       transition={{ duration: 1 }}
//     >
//       <SectionTitle
//         initial={{ y: -50, opacity: 0 }}
//         animate={inView ? { y: 0, opacity: 1 } : {}}
//         transition={{ duration: 0.8 }}
//       >
//         Projects
//       </SectionTitle>
//       <ProjectsContainer>
//         {[
//           {
//             id: 1,
//             title: "Chatbot",
//             description:
//               "A conversational chatbot powered by AI and Natural Language Processing (NLP), featuring voice command-based system controls and integrated hand gesture recognition for enhanced user interaction.",
//             image: "https://via.placeholder.com/400x200",
//             link: "#",
//           },
//           {
//             id: 2,
//             title: "Portfolio Website",
//             description:
//               "A modern, responsive portfolio website showcasing my projects and skills.",
//             image: "https://via.placeholder.com/400x200",
//             link: "#",
//           },
//           {
//             id: 3,
//             title: "Blood Donation Portal",
//             description:
//               "A platform to connect blood donors with recipients. Features include donor registration, blood availability search, and request management.",
//             image: "https://via.placeholder.com/400x200",
//             link: "#",
//           },
//           {
//             id: 4,
//             title: "Finance Tracker Application",
//             description:
//               "A tool to track personal finances, categorize expenses, set budgets, and generate financial reports for better money management.",
//             image: "https://via.placeholder.com/400x200",
//             link: "#",
//           },
//           {
//             id: 5,
//             title: "Dynamic Workout Generator",
//             description:
//               "An interactive platform to generate customized workout plans based on user preferences.",
//             image: "https://via.placeholder.com/400x200",
//             link: "#",
//           },
//           {
//             id: 6,
//             title: "I Traders",
//             description:
//               "An online mobile platform for browsing and purchasing dry fruits, nuts, and spices. Includes features like product browsing, adding to favorites, and cart with weight selection.",
//             image: "https://via.placeholder.com/400x200", // Replace with a screenshot of the mobile app
//             link: "#", // Provide the link to the app's download page or GitHub repo
//           }
          
//         ].map((project) => (
//           <ProjectCard
//             key={project.id}
//             variants={cardVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ProjectContent>
//               <ProjectTitle>{project.title}</ProjectTitle>
//               <ProjectDescription>{project.description}</ProjectDescription>
//               <ButtonWrapper>
//                 <ProjectButton
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Project
//                 </ProjectButton>
//               </ButtonWrapper>
//             </ProjectContent>
//           </ProjectCard>
//         ))}
//       </ProjectsContainer>
//     </ProjectsSection>
//   );
// };

// export default Projects;