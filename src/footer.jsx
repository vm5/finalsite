import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Styled components
const FooterContainer = styled.footer`
  background: #111;
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-top: 1px solid #444;
  position: relative;
  width: 100%;
  font-family: 'Verdana', sans-serif;
  animation: ${fadeIn} 1s ease-in-out;
`;

const HighlightedText = styled.span`
  color: #6a1b9a;
  font-weight: bold;
`;

const AdditionalContent = styled.div`
  margin-top: 40px;
  font-size: 16px;
  animation: ${slideIn} 1s ease-out;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  p {
    margin-top: 20px;
    color: #ccc;
    line-height: 1.5;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: lightblue;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: yellow;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin: 30px auto;
  display: block;
`;

const FAQSection = styled.section`
  margin-bottom: 60px;
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
  text-transform: uppercase;
`;

const FAQSubtitle = styled.h5`
  font-size: 1.5rem;
  color: #bbb;
  margin-bottom: 40px;
`;

const FAQContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FAQBox = styled.div`
  background: #1c1c1c;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1.5s ease-out;
  width: 100%;
  max-width: 300px;
  color: #ddd;
`;

const Question = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #6a1b9a;
`;

const Answer = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FAQSection>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQSubtitle>Get instant answers to your queries!</FAQSubtitle>
        <FAQContainer>
          <FAQBox>
            <Question>How do I get started?</Question>
            <Answer>Enter your University SRN in the verification box and click 'Get Started' to proceed with verification.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>Who can use nucleus<HighlightedText>FUSION</HighlightedText>?</Question>
            <Answer>Current students and job-seeking individuals looking for mentorship and career guidance can use nucleus<HighlightedText>FUSION</HighlightedText>.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>Is there a fee to use nucleus<HighlightedText>FUSION</HighlightedText>?</Question>
            <Answer>No, nucleus<HighlightedText>FUSION</HighlightedText> is a free platform for students and job-seekers.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>How do I find a mentor?</Question>
            <Answer>After verifying your SRN, you can search for mentors based on your preferred organization with specific designations or specific career needs.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>What kind of guidance can I get?</Question>
            <Answer>You can receive guidance on job interviews, career transitions, industry trends, and more from experienced professionals.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>How do I contact a mentor?</Question>
            <Answer>Once you find a mentor, you can contact them through the platform's messaging system or you can also video call the mentor to seek guidance if you wish.</Answer>
          </FAQBox>
        </FAQContainer>
      </FAQSection>

      <Logo src="/nucleus.png" alt="nucleusFUSION Logo" />

      <LinkContainer>
       
        <Link href="https://nucleusfusioncontact.netlify.app/">
          <img src="/contactus-removebg-preview.png" alt="Contact Us" />
          Contact Us
        </Link>
      </LinkContainer>

      <AdditionalContent>
        <p>nucleus<HighlightedText>FUSION</HighlightedText>: Your go-to platform for establishing professional connections. Get the answers you need and stay informed with the latest insights!</p>
        <p>&copy; {new Date().getFullYear()} nucleus<HighlightedText>FUSION</HighlightedText>. All rights reserved.</p>
      </AdditionalContent>
    </FooterContainer>
  );
};

export default Footer;
