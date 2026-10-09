import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaPaperPlane, FaCopy, FaCheck } from "react-icons/fa";

const Section = styled.section`
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  padding: 85px 8% 30px;
  background: linear-gradient(180deg, #090c17 0%, #0d1222 50%, #060810 100%);
  color: #ffffff;
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
  margin-bottom: 2rem;

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

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  max-width: 1100px;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.4rem;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.78);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 196, 255, 0.15);
  border-radius: 16px;
  padding: 0.85rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;

  &:hover {
    border-color: #00c4ff;
    background: rgba(0, 196, 255, 0.06);
    transform: translateY(-2px);
  }

  .left-content {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon-box {
      font-size: 1.3rem;
      color: #00c4ff;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: rgba(0, 196, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .text-box {
      .label {
        font-size: 0.72rem;
        color: rgba(255, 255, 255, 0.6);
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .val {
        font-size: 0.9rem;
        color: #ffffff;
        font-weight: 600;
        text-decoration: none;
      }
    }
  }

  .copy-btn {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 6px;
    transition: all 0.2s ease;

    &:hover {
      color: #00ffd0;
      background: rgba(0, 255, 208, 0.1);
    }
  }
`;

const FormColumn = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 196, 255, 0.18);
  border-radius: 22px;
  padding: 1.8rem;
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4);

  @media (max-width: 600px) {
    padding: 1.4rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 600;
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #ffffff;
    font-size: 0.88rem;
    outline: none;
    transition: all 0.25s ease;

    &:focus {
      border-color: #00c4ff;
      box-shadow: 0 0 12px rgba(0, 196, 255, 0.25);
      background: rgba(0, 196, 255, 0.04);
    }
  }

  textarea {
    resize: vertical;
    min-height: 90px;
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.85rem 1.8rem;
  border-radius: 50px;
  border: none;
  background: linear-gradient(135deg, #00c4ff, #00ffd0);
  color: #080a14;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 196, 255, 0.35);
  transition: all 0.3s ease;
  margin-top: 0.3rem;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 196, 255, 0.6);
    transform: translateY(-2px);
  }
`;

const Toast = styled(motion.div)`
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: #00ffd0;
  color: #080a14;
  padding: 0.75rem 1.4rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 0 20px rgba(0, 255, 208, 0.5);
  z-index: 99999;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [copiedText, setCopiedText] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:shaheenur2005@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact">
      <SectionHeader>
        <div className="subtitle">Let's Connect</div>
        <h2>
          Get In <span>Touch</span>
        </h2>
      </SectionHeader>

      <Container>
        <InfoColumn>
          <div>
            <h3>Let's Build Intelligent Systems</h3>
            <p>
              Whether you have an upcoming AI project, software engineering opportunity, or wish to collaborate, feel free to reach out.
            </p>
          </div>

          <ContactCard whileHover={{ scale: 1.01 }}>
            <div className="left-content">
              <div className="icon-box"><FaEnvelope /></div>
              <div className="text-box">
                <div className="label">Email Address</div>
                <a className="val" href="mailto:shaheenur2005@gmail.com">shaheenur2005@gmail.com</a>
              </div>
            </div>
            <button className="copy-btn" onClick={() => handleCopy("shaheenur2005@gmail.com", "Email")}>
              {copiedText === "Email" ? <FaCheck style={{ color: "#00ffd0" }} /> : <FaCopy />}
            </button>
          </ContactCard>

          <ContactCard whileHover={{ scale: 1.01 }}>
            <div className="left-content">
              <div className="icon-box"><FaPhone /></div>
              <div className="text-box">
                <div className="label">Phone Number</div>
                <a className="val" href="tel:+917010404772">+91 7010404772</a>
              </div>
            </div>
            <button className="copy-btn" onClick={() => handleCopy("+917010404772", "Phone")}>
              {copiedText === "Phone" ? <FaCheck style={{ color: "#00ffd0" }} /> : <FaCopy />}
            </button>
          </ContactCard>

          <ContactCard whileHover={{ scale: 1.01 }}>
            <div className="left-content">
              <div className="icon-box"><FaLinkedin /></div>
              <div className="text-box">
                <div className="label">LinkedIn Profile</div>
                <a
                  className="val"
                  href="https://www.linkedin.com/in/shaheenur-rahman-m-2263b3290"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shaheenur Rahman M
                </a>
              </div>
            </div>
          </ContactCard>

          <ContactCard whileHover={{ scale: 1.01 }}>
            <div className="left-content">
              <div className="icon-box"><FaGithub /></div>
              <div className="text-box">
                <div className="label">GitHub Profile</div>
                <a
                  className="val"
                  href="https://github.com/ShaheenurRahmanM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ShaheenurRahmanM
                </a>
              </div>
            </div>
          </ContactCard>
        </InfoColumn>

        <FormColumn>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Project Inquiry / Hiring"
                value={formData.subject}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Message</label>
              <textarea
                name="message"
                required
                placeholder="Describe your inquiry..."
                value={formData.message}
                onChange={handleChange}
              />
            </FormGroup>

            <SubmitButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit">
              Send Message <FaPaperPlane />
            </SubmitButton>
          </Form>
        </FormColumn>
      </Container>

      <AnimatePresence>
        {copiedText && (
          <Toast
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
          >
            <FaCheck /> {copiedText} copied to clipboard!
          </Toast>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Contact;
