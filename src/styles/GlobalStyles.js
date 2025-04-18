import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #14142b;
    color: white;
    overflow-x: hidden;
  }

  html, body, #root {
    height: 100%;
  }

  section {
    width: 100%;
    padding: 4rem 2rem;
  }

  h2, h3 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  button {
    background: #00c4ff;
    border: none;
    padding: 1rem 2rem;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background: #005f7f;
  }

  /* Scroll to Top Arrow */
  .scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #00c4ff;
    border: none;
    border-radius: 50%;
    padding: 1rem;
    cursor: pointer;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
  }

  .scroll-to-top:hover {
    transform: translateY(-10px);
  }

  /* Full Height for Sections */
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  /* Responsive Styles */
  @media (max-width: 1024px) {
    section {
      padding: 3rem 1rem;
    }
    
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    .about-content {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    section {
      height: auto;
      padding: 2rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.9rem;
    }

    .about-content {
      font-size: 1rem;
    }

    .scroll-to-top {
      right: 10px;
      bottom: 10px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.8rem;
    }

    .scroll-to-top {
      right: 5px;
      bottom: 5px;
      padding: 0.5rem;
    }
  }
`;
