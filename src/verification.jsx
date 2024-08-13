import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

function Verification({ onVerify }) {
  const [srn, setSrn] = useState('');
  const [name, setName] = useState('');
  const [processing, setProcessing] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedSrn = localStorage.getItem('srn');
    const storedName = localStorage.getItem('name');
    if (storedSrn) setSrn(storedSrn);
    if (storedName) setName(storedName);
  }, []);

  useEffect(() => {
    localStorage.setItem('srn', srn);
    localStorage.setItem('name', name);
  }, [srn, name]);

  const handleVerify = () => {
    if (srn.length === 13 || srn.length === 14) {
      if (name) {
        setProcessing(true);
        setLoadingMessage('Processing...');
        setTimeout(() => {
          setProcessing(false);
          setLoadingMessage('');
          setUser({ name });
        }, 2000);
      } else {
        alert('Please enter your name');
      }
    } else {
      alert('SRN must be 13 or 14 digits');
    }
  };

  const handleSignOut = () => {
    window.location.href = "https://nucleusfusion.netlify.app";
    setUser(null);
    localStorage.removeItem('srn');
    localStorage.removeItem('name');
  };

  return (
    <PageContainer>
      <StarsContainer>
        <StarLayer />
        <StarLayer />
        <StarLayer />
      </StarsContainer>
      <HeaderSection>
        <TextContainer>
          <TitleContainer>
            <MainTitle>
              nucleus<HighlightedText>FUSION</HighlightedText>
            </MainTitle>
            <Subtitle>
              Bridging the gap between <Span>professionals</Span> and{' '}
              <Span>experienced mentors</Span>.
            </Subtitle>
          </TitleContainer>
          <Subtitle>
            What is nucleus<HighlightedText>FUSION</HighlightedText>?
          </Subtitle>
          <Description>
            nucleus<HighlightedText>FUSION</HighlightedText> is a platform that provides a seamless way for current job-seeking individuals to connect with former alumni, industry experts, and mentors to gain valuable insights and guidance for their career development. Whether you’re looking for advice on job interviews, career transitions, or industry trends, nucleus<HighlightedText>FUSION</HighlightedText> offers a network of knowledgeable individuals ready to share their experiences and expertise. The platform ensures that users receive personalized support, helping them navigate their professional journey with confidence and clarity. Start your journey with nucleus<HighlightedText>FUSION</HighlightedText> today!
          </Description>
        </TextContainer>
        <HeaderImage src="/networking.png" alt="Networking" />
      </HeaderSection>
      <FormContainer>
        <VerificationWrapper>
          {user ? (
            <UserSection>
              <WelcomeMessage>Welcome, {user.name}</WelcomeMessage>
              <ButtonContainer>
                <Button onClick={handleSignOut}>Exit</Button>
                <Button onClick={onVerify} aria-label="Verify" disabled={processing}>
                  {processing ? 'Processing...' : 'Proceed'}
                </Button>
              </ButtonContainer>
            </UserSection>
          ) : (
            <>
              <SignInTitle>Enter your details to explore nucleus<HighlightedText>FUSION</HighlightedText>!</SignInTitle>
              <Description>
                To access the full range of offerings provided by the nucleus<HighlightedText>FUSION</HighlightedText> platform, please enter your University SRN and name. This step is essential for unlocking tailored resources and connecting with mentors.
              </Description>
              <InputField
                type="text"
                placeholder="Enter your SRN"
                value={srn}
                onChange={(e) => setSrn(e.target.value)}
                maxLength="14"
              />
              <InputField
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button onClick={handleVerify} disabled={processing}>
                {processing ? 'Processing...' : 'Verify and Proceed'}
              </Button>
            </>
          )}
        </VerificationWrapper>
      </FormContainer>
      {loadingMessage && (
        <LoadingOverlay>
          <LoadingSpinner />
          <LoadingMessage>{loadingMessage}</LoadingMessage>
        </LoadingOverlay>
      )}
    </PageContainer>
  );
}

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
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

const shimmer = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
`;


const starAnimation = keyframes`
  from {
    transform: translateY(-200px);
    opacity: 1;
  }
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
`;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1e1e1e, #2e2e2e);
  padding: 20px;
  margin: 0;
  box-sizing: border-box;
`;

const StarsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
`;

const StarLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  pointer-events: none;
  background-image: url('/path-to-your-star-image.png');
  animation: ${starAnimation} 20s linear infinite;

  &:nth-child(1) {
    top: -200px;
    left: -200px;
    animation-duration: 25s;
    opacity: 0.8;
  }
  &:nth-child(2) {
    top: -400px;
    left: -300px;
    animation-duration: 20s;
    opacity: 0.6;
  }
  &:nth-child(3) {
    top: -600px;
    left: -100px;
    animation-duration: 30s;
    opacity: 0.9;
  }
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
  z-index: 1;
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
`;

const MainTitle = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: 'Roboto', sans-serif;
  margin-top: 20px;
  animation: ${slideIn} 1s ease-out;
  background: linear-gradient(90deg, #ffffff, #ff6bcb, #ffffc7);
  background-size: 200% 200%;
  animation: ${shimmer} 3s infinite linear;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HighlightedText = styled.span`
  color: #ff6bcb;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  color: #ddd;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Span = styled.span`
  color: #ff6bcb;
`;

const Description = styled.p`
  color: #ccc;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
`;

const HeaderImage = styled.img`
  max-width: 90%;
  max-height: 400px;
  animation: ${fadeIn} 1.5s ease-out;
  z-index: 1;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  z-index: 1;
`;

const VerificationWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 2s ease-out;
`;

const SignInTitle = styled.h2`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;

  &::placeholder {
    color: #bbb;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  background: linear-gradient(45deg, #ff6bcb, #ff4e50);
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background: linear-gradient(45deg, #ff4e50, #ff6bcb);
  }

  &:disabled {
    background: #999;
    cursor: not-allowed;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingSpinner = styled.div`
  border: 5px solid rgba(255, 255, 255, 0.2);
  border-top: 5px solid #ffffff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingMessage = styled.p`
  color: #ffffff;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WelcomeMessage = styled.h3`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export default Verification;
