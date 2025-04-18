import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import "@fontsource/playfair-display";

// Hero Section Style
const HeroSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to right, #14142b, #0f0f2d);
  overflow: hidden;
`;

// Hero Content Styling
const HeroContent = styled(motion.div)`
  position: absolute;
  text-align: center;
  z-index: 2;
  color: #fff;

  // h1 {
  //   font-size: 4rem;
  //   color: #00c4ff;
  //   margin-bottom: 1rem;
  //   animation: fadeIn 2s;
  // }

  h1 {
  font-family: 'Playfair Display', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  // background: linear-gradient(90deg, #00c4ff, #00ffd0);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // text-shadow: 0 0 10px rgba(0, 196, 255, 0.3);
  // background-size: 200% auto;
  // animation: shimmer 3s linear infinite, fadeIn 2s;
  color: #00c4ff; // Removed gradient effect
    animation: fadeIn 2s; // Simple fade-in animation
}


  h2 {
    font-size: 2rem;
    color: #fff;
    margin-top: 1rem;
    animation: fadeIn 3s;
    font-weight: 400;
  }

  p {
    font-size: 1.2rem;
    color: #d3d3d3;
    margin-top: 1rem;
    animation: fadeIn 4s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes shimmer {
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
}

  @media (max-width: 1024px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

// const ScrollIndicator = styled(motion.div)`
//   position: absolute;
//   bottom: 40px;
//   left: 50%;
//   transform: translateX(-50%);
//   cursor: pointer;
//   z-index: 3;
//   display: none;

//   @media (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 8px;
//   }

//   .scroll-text {
//     color: #00c4ff;
//     font-size: 0.8rem;
//     text-transform: uppercase;
//     letter-spacing: 2px;
//   }

//   .arrow-container {
//     background: rgba(0, 196, 255, 0.1);
//     border: 1px solid #00c4ff;
//     border-radius: 50%;
//     padding: 8px;
//     width: 40px;
//     height: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: all 0.3s ease;
//   }

//   &:hover .arrow-container {
//     background: rgba(0, 196, 255, 0.2);
//     transform: translateY(-2px);
//   }

//   .arrow {
//     width: 0;
//     height: 0;
//     border-left: 8px solid transparent;
//     border-right: 8px solid transparent;
//     border-top: 8px solid #00c4ff;
//   }
// `;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px; /* Set the distance from the bottom */
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 5;
  display: none; /* Hide by default */

  /* Only show on mobile */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .scroll-text {
    color: #00c4ff;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .arrow-container {
    background: rgba(0, 196, 255, 0.1);
    border: 1px solid #00c4ff;
    border-radius: 50%;
    padding: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  &:hover .arrow-container {
    background: rgba(0, 196, 255, 0.2);
    transform: translateY(-2px);
  }

  .arrow {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #00c4ff;
  }
`;



const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="hero">
      <Canvas style={{ width: "100%", height: "100%", touchAction: "none" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <Sphere visible args={[1, 32, 32]} scale={2}>
          <MeshDistortMaterial 
            color="#00c4ff" 
            attach="material" 
            distort={0.5} 
            speed={isMobile ? 1 : 2}
          />
        </Sphere>
        {!isMobile && <OrbitControls enableZoom={false} />}
      </Canvas>
      <HeroContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1>Shaheenur Rahman M</h1>
        <h2>AI & Data Science Enthusiast</h2>
        <p>Welcome to my portfolio! Explore my work and journey.</p>
      </HeroContent>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={scrollToAbout}
      >
        <span className="scroll-text">Scroll</span>
        <motion.div 
          className="arrow-container"
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="arrow" />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;