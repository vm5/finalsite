import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from './firebase';


function Verification({ onVerify }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Error during sign-in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error('Error during sign-out:', error);
      });
  };

  const handleVerify = () => {
    if (user) {
      setProcessing(true);
      setLoadingMessage('Processing...');
      setTimeout(() => {
        setProcessing(false);
        setLoadingMessage('');
        onVerify();
      }, 2000); // Simulate a processing time of 2 seconds
    } else {
      alert('Please sign in first');
    }
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
              <Span>experienced mentors</Span> working across various organizations.
            </Subtitle>
          </TitleContainer>
          <Subtitle>
            What is nucleus<HighlightedText>FUSION</HighlightedText>?
          </Subtitle>
          <Answer>
            nucleus<HighlightedText>FUSION</HighlightedText> is a platform that provides a seamless way for current job-seeking individuals to connect with former alumni, industry experts, and mentors to gain valuable insights and guidance for their career development. Whether you’re looking for advice on job interviews, career transitions, or industry trends, nucleus<HighlightedText>FUSION</HighlightedText> offers a network of knowledgeable individuals ready to share their experiences and expertise. The platform ensures that users receive personalized support, helping them navigate their professional journey with confidence and clarity. Start your journey with nucleus<HighlightedText>FUSION</HighlightedText> today!
          </Answer>
        </TextContainer>
        <HeaderImage src="/networking.png" alt="Networking" />
      </HeaderSection>
      <SilverContainer>
        <VerificationWrapper>
          {user ? (
            <div>
              <WelcomeMessage>Welcome, {user.displayName}</WelcomeMessage>
              <Button onClick={handleSignOut}>Sign Out</Button>
              <Button onClick={handleVerify} aria-label="Verify">
                {processing ? 'Processing...' : 'Verify and Proceed'}
              </Button>
            </div>
          ) : (
            <SignInContainer>
              <SignInTitle>Sign in to explore nucleus<HighlightedText>FUSION</HighlightedText>!</SignInTitle>
              <Description>
                Discover the full range of offerings provided by the nucleus<HighlightedText>FUSION</HighlightedText>platform. By signing in, users gain access to a portal that connects them with mentors of their preferred organization(s) and take advantage of various tools designed to support their career growth. This step is essential for unlocking the tailored resources and connecting with the broader network of professionals within nucleus<HighlightedText>FUSION</HighlightedText>.
              </Description>
              <GoogleSignInButton onClick={handleSignIn}>
                {isLoading ? 'Signing in...' : <><GoogleLogo src="/google-logo-removebg-preview.png" alt="Google logo" /> Sign in with Google</>}
              </GoogleSignInButton>
            </SignInContainer>
          )}
        </VerificationWrapper>
      </SilverContainer>
      {isLoading && !loadingMessage ? (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      ) : (
        loadingMessage && <LoadingMessage>{loadingMessage}</LoadingMessage>
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
  font-weight: bold;
  font-size: 2rem;
  font-family: 'Verdana';
  margin: 50px;
  animation: ${slideIn} 1s ease-out;
  margin-left: 20px;

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
  margin: 0;
  margin-top: 10px;
  font-family: 'Verdana';
  margin-left: 20px;

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
  max-width: 600px;
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SignInTitle = styled.h2`
  font-size: 2rem;
  color: black;
  margin: 0;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  font-weight: 10000;
  font-family: 'Verdana;'
  text-align: center;
  margin: 0 0 20px;
`;

const GoogleSignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 24px;
  font-size: 1rem;
  color: #fff;
  background-color: #4285f4;
  font-family: 'Verdana';
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  font-weight: bold;

  &:hover {
    background-color: #357ae8;
  }
`;

const GoogleLogo = styled.img`
  width: 24px;
  height: 24px;
`;

const Button = styled.button`
  background-color: #6a1b9a;
  color: white;
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5e35b1;
  }
`;

const WelcomeMessage = styled.p`
  font-size: 1.2rem;
  color: purple;
  font-weight: bold;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 999;
`;

const LoadingSpinner = styled.div`
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #6a1b9a;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: #6a1b9a;
  font-weight: bold;
`;

const Answer = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 20px 0;
  text-align: center;
  font-weight: bold;
  font-family: 'Verdana';
`;

const Span = styled.span`
  font-weight: bold;
`;

export default Verification;
