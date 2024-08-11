import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

function Verification({ onVerify }) {
  const [srns, setSrns] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedSRN = localStorage.getItem('savedSRN');
    if (savedSRN) {
      setSrns(savedSRN);
    }
  }, []);

  const handleStudentVerification = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if ((srns.length === 13 || srns.length === 14) && srns.startsWith("PES") && srns.includes("UG")) {
        onVerify();
      } else {
        alert('Please provide a valid SRN');
      }
    }, 2000); // Simulating a delay for verification
  };

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setSrns(value);
    localStorage.setItem('savedSRN', value); // Save to localStorage
  };

  return (
    <PageContainer>
      <HeaderSection>
        <TextContainer>
          <TitleContainer>
            <MainTitle>nucleus<HighlightedText>FUSION</HighlightedText></MainTitle>
            <Subtitle>Bridging the gap between <Span>professionals</Span> and <Span>experienced mentors</Span> working across various organizations.</Subtitle>
          </TitleContainer>
          <Subtitle>What is nucleus<HighlightedText>FUSION</HighlightedText>?</Subtitle>
          <Answer>nucleus<HighlightedText>FUSION</HighlightedText> is a platform that provides a seamless way for current job-seeking individuals to connect with former alumni, industry experts, and mentors to gain valuable insights and guidance for their career development. Whether you’re looking for advice on job interviews, career transitions, or industry trends, nucleus<HighlightedText>FUSION</HighlightedText> offers a network of knowledgeable individuals ready to share their experiences and expertise. The platform ensures that users receive personalized support, helping them navigate their professional journey with confidence and clarity. Start your journey with nucleus<HighlightedText>FUSION</HighlightedText> today!</Answer>
        </TextContainer>
        <HeaderImage src="/networking.png" alt="Networking" />
      </HeaderSection>
      <SilverContainer>
        <VerificationWrapper>
          <VerificationContainer>
            <SectionTitle>Student Verification</SectionTitle>
            <SectionDescription>Verify your status as a student by entering your University SRN and then proceed.</SectionDescription>
            <Input
              type="text"
              placeholder="Enter your SRN (Case-sensitive)"
              value={srns}
              onChange={handleInputChange}
              aria-label="SRN Input"
            />
            <Button onClick={handleStudentVerification} aria-label="Verify SRN">
              {isLoading ? 'Verifying...' : 'Get Started >'}
            </Button>
          </VerificationContainer>
        </VerificationWrapper>
      </SilverContainer>
      {isLoading && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
    </PageContainer>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: white;
  padding: 20px;
  margin: 0;
  box-sizing: border-box;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  gap: 20px;
  animation: ${fadeIn} 1s ease-out;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
  margin-left: 20px;
`;

const MainTitle = styled.h1`
  color: #222;
  font-size: 2rem;
  font-family: 'Verdana';
  margin: 50px;
  font-weight: bold;
  animation: ${slideIn} 1s ease-out;
  margin-left:20px;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HighlightedText = styled.span`
  color: #6a1b9a;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  color: #555;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  margin-top: 10px;
  font-family: 'Verdana';
  margin-left:30px;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HeaderImage = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 0;
  }
`;

const SilverContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

const VerificationContainer = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.5s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  font-family: 'Verdana';
  margin-bottom: 20px;
  text-align: center;
  margin-left:20px;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #666;
  font-family: 'Verdana';
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 65%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 35%;
  padding: 12px;
  background-color: #6a1b9a;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a148c;
  }
`;

const Answer = styled.p`
  font-size: 1 rem;
  color: black;
  font-family: 'Verdana';
  line-height: 1.4;
  margin-left:30px;
`;

const Span = styled.span`
  font-weight: bold;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #fff;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export default Verification;
