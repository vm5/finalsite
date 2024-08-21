// pages/WhyNucleusFusion.jsx

import React from 'react';
import styled, { keyframes } from 'styled-components';



const slideUp = keyframes`
  from {
    transform: translateY(15px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const moveBackground = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

// Styled Components
const Container = styled.div`
  background: url('https://st2.depositphotos.com/2171279/6793/i/450/depositphotos_67934195-stock-photo-blackboard-chalkboard-texture-infographics-collection.jpg') no-repeat center center/cover;
  animation: ${moveBackground} 60s linear infinite;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-size: cover;
`;

const Content = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  opacity: 1;
  font-family: 'Verdana', sans-serif;
  color: #333;
  font-weight: bold;
  transform: translateY(0);
  animation: ${slideUp} 1s ease-in-out;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  animation: ${slideUp} 1s ease-out;
  font-weight: bold;
`;

const Section = styled.section`
  margin-bottom: 30px;
  animation: ${slideUp} 1s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #000;
  margin-bottom: 10px;
  font-family: 'Verdana', sans-serif;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Verdana', sans-serif;
  font-weight: normal;
`;

const Highlight = styled.span`
  color: #007BFF;
  font-weight: bold;
`;

const SvgContainer = styled.div`
  width: 500px;
  height: 500px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Why() {
  return (
    <Container>
      <Content>
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
      </Content>
      <SvgContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="20" fill="#FFA500" />
          <circle cx="60" cy="60" r="40" fill="#4DB6E9" />
          <text x="60" y="60" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, sans-serif">
            Experience
          </text>
          <circle cx="140" cy="60" r="40" fill="#E56BA5" />
          <text x="140" y="60" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, sans-serif">
            Knowledge
          </text>
          <circle cx="60" cy="140" r="40" fill="#97E95D" />
          <text x="60" y="140" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, sans-serif">
            Competitive
          </text>
          <circle cx="140" cy="140" r="40" fill="#FDCB32" />
          <text x="140" y="140" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, sans-serif">
            Focused
          </text>
        </svg>
      </SvgContainer>
    </Container>
  );
}

export default Why;
