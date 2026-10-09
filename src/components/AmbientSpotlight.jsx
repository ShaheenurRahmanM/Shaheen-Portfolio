import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Spotlight = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(
    650px circle at var(--x, 50vw) var(--y, 50vh),
    rgba(0, 196, 255, 0.08),
    rgba(112, 0, 255, 0.03),
    transparent 65%
  );
  transition: opacity 0.5s ease;
`;

const AmbientSpotlight = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isTouch) return null;

  return <Spotlight />;
};

export default AmbientSpotlight;
