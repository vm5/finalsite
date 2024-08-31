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

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #111;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-size: cover;
`;

const Content = styled.div`
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 90%;
  width: 100%;
  box-sizing: border-box;
  opacity: 1;
  font-family: 'Verdana';
  color: #333;
  font-weight: bold;
  transform: translateY(0);
  animation: ${slideUp} 1s ease-in-out;

  @media (min-width: 768px) {
    padding: 40px;
    max-width: 800px;
  }
`;

const Header = styled.h1`
  font-size: 1.8rem;
  color: silver;
  margin-bottom: 20px;
  animation: ${slideUp} 1s ease-out;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 20px;
  animation: ${slideUp} 1s ease-out;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  color: purple;
  margin-bottom: 10px;
  font-family: 'Verdana';
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 20px;
  font-family: 'Verdana';
  font-weight: normal;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Highlight = styled.span`
  color: #007BFF;
  font-weight: bold;
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
    </Container>
  );
}

export default Why;
