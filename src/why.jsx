// pages/WhyNucleusFusion.jsx

import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: url('https://img.freepik.com/free-vector/education-pattern-background-doodle-style_53876-115365.jpg') no-repeat center center/cover;
  animation: ${fadeIn} 5s ease-in-out;
  z-index: 1;
  overflow: hidden;
  background-size: cover;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  animation: ${slideUp} 1s ease-out;
`;

const Section = styled.section`
  margin-bottom: 40px;
  animation: ${slideUp} 5s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 10px;
  font-family: 'Verdana';
  font-weight: bold;
  color: 'purple';
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ddd;
  margin-bottom: 20px;
  font-family: 'Verdana';
  font-weight: bold;
  color: 'purple';
`;

const Highlight = styled.span`
  color: #007BFF;
  font-weight: bold;
`;

// Why nucleusFUSION Component
function Why(){
  return (
    <Container>
      <Header>Why nucleusFUSION?</Header>
      <Section>
        <SectionTitle>Empowering Your Career Journey</SectionTitle>
        <Paragraph>
          In today’s fast-paced and ever-evolving job market, having the right guidance can make all the difference. <Highlight>nucleusFUSION</Highlight> is dedicated to providing job seekers with access to a network of seasoned professionals and mentors who are eager to share their knowledge and experience.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Access to a Network of Experts</SectionTitle>
        <Paragraph>
          At <Highlight>nucleusFUSION</Highlight>, you’re not just connecting with anyone; you’re engaging with former alumni, industry leaders, and career mentors who have navigated the challenges you’re facing. Our platform brings together a diverse range of professionals who offer valuable insights tailored to your specific needs.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Personalized Guidance</SectionTitle>
        <Paragraph>
          Every career path is unique, and so are the challenges you face. <Highlight>nucleusFUSION</Highlight> ensures you receive personalized support that aligns with your career goals. Whether you need help preparing for interviews, transitioning to a new role, or understanding industry trends, our mentors provide advice and support tailored to your needs.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Why;
