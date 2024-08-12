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
      <FormContainer>
        <VerificationWrapper>
          {user ? (
            <UserSection>
              <WelcomeMessage>Welcome, {user.name}</WelcomeMessage>
              <ButtonContainer>
                <Button onClick={handleSignOut}>Finish</Button>
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

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
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
  color: #222;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: 'Roboto', sans-serif;
  margin-top: 20px;
  animation: ${slideIn} 1s ease-out;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HighlightedText = styled.span`
  color: purple;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  color: #555;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  font-weight: normal;

  @media (min-width: 768px) {
    font-size: 1.2rem;
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

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  padding: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const SignInTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #333;
  animation: ${slideIn} 1s ease-out;
`;

const InputField = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1000;
  animation: ${fadeIn} 1s ease-out;
`;

const LoadingSpinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #007bff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
`;

const WelcomeMessage = styled.h2`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const Span = styled.span`
  font-weight: bold;
  color: #007bff;
`;


export default Verification;
