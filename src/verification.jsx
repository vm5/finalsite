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
      <SilverContainer>
        <VerificationWrapper>
          {user ? (
            <UserSection>
              <WelcomeMessage>Welcome, {user.name}</WelcomeMessage>
              <ButtonContainer>
                <Button onClick={handleSignOut}>Finish</Button>
                <Button onClick={onVerify} aria-label="Verify">
                  {processing ? 'Processing...' : 'Proceed'}
                </Button>
              </ButtonContainer>
            </UserSection>
          ) : (
            <SignInContainer>
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
              <Button onClick={handleVerify}>
                {processing ? 'Processing...' : 'Verify and Proceed'}
              </Button>
            </SignInContainer>
          )}
        </VerificationWrapper>
      </SilverContainer>
      {loadingMessage && (
        <LoadingOverlay>
          <LoadingSpinner />
          <LoadingMessage>{loadingMessage}</LoadingMessage>
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
  background: #f9f9f9;
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
`;

const MainTitle = styled.h1`
  color: #333;
  font-weight: bold;
  font-size: 2rem;
  font-family: 'Verdana', sans-serif;
  margin-top: 30px;
  animation: ${slideIn} 1s ease-out;

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
  font-weight: bold;
  margin: 10px 0;
  font-family: 'Verdana', sans-serif;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  font-family: 'Verdana', sans-serif;
  margin: 0;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeaderImage = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const SilverContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f5f5f5;
  padding: 20px 0;
`;

const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  padding: 20px;
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  background-color: white;
`;

const SignInTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-family: 'Verdana', sans-serif;
  color: #333;
  animation: ${slideIn} 1s ease-out;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const InputField = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px 0;
  font-size: 1rem;
  box-sizing: border-box;
  font-family: 'Verdana', sans-serif;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #6a1b9a;
  color: white;
  cursor: pointer;
  margin: 10px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5c0a8a;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 1s ease-out;
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #fff;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingMessage = styled.p`
  color: white;
  font-size: 1rem;
  margin-left: 10px;
  font-family: 'Verdana';
`;
const Span = styled.span`
  color: #6a1b9a;
  font-weight: bold;
  font-family: 'Verdana';
`;
const WelcomeMessage = styled.span`
  color: purple;
  font-weight: bold;
  font-size: 2rem;
  font-family: 'Verdana;'
`;

export default Verification;
