import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase'; 

function Verification({ onVerify }) {
  const [email, setEmail] = useState(() => localStorage.getItem('email') || '');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(() => localStorage.getItem('name') || '');
  const [srn, setSrn] = useState(() => localStorage.getItem('srn') || '');
  const [isNewUser, setIsNewUser] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Save form data to localStorage whenever it changes
    localStorage.setItem('email', email);
    localStorage.setItem('name', name);
    localStorage.setItem('srn', srn);
  }, [email, name, srn]);

  const handleAuth = async () => {
    setProcessing(true);
    setLoadingMessage(isNewUser ? 'Signing up...' : 'Logging in...');

    try {
      let userCredential;

      if (isNewUser) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }

      const user = userCredential.user;
      setUser(user);
      setLoadingMessage('');

      if (user) {
        await sendConfirmationEmail(user.email);
      }

      onVerify(); // Callback to parent on successful verification

    } catch (error) {
      alert(error.message);
      setLoadingMessage('');
    } finally {
      setProcessing(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setEmail('');
      setPassword('');
      setName('');
      setSrn('');
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('srn');
    } catch (error) {
      alert('Error signing out: ' + error.message);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      alert('Please enter your email to reset your password.');
      return;
    }

    setProcessing(true);
    setLoadingMessage('Sending reset link...');

    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset link sent to your email.');
    } catch (error) {
      alert(error.message);
    } finally {
      setProcessing(false);
      setLoadingMessage('');
    }
  };

  const sendConfirmationEmail = async (email) => {
    // Integrate with your email service to send a confirmation email
    console.log(`Sending confirmation email to ${email}`);
  };

  return (
    <PageContainer>
      <StarsContainer>
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
            nucleus<HighlightedText>FUSION</HighlightedText> is a platform that
            provides a seamless way for current job-seeking individuals to
            connect with former alumni, industry experts, and mentors to gain
            valuable insights and guidance for their career development.
            Whether you’re looking for advice on job interviews, career
            transitions, or industry trends, nucleus
            <HighlightedText>FUSION</HighlightedText> offers a network of
            knowledgeable individuals ready to share their experiences and
            expertise. The platform ensures that users receive personalized
            support, helping them navigate their professional journey with
            confidence and clarity. Start your journey with nucleus
            <HighlightedText>FUSION</HighlightedText> today!
          </Description>
        </TextContainer>
        <HeaderImage src="/networking.png" alt="Networking" />
      </HeaderSection>
      <FormContainer>
        <VerificationWrapper>
          {user ? (
            <UserSection>
              <WelcomeMessage>Welcome, {user.email}</WelcomeMessage>
              <ButtonContainer>
                <Button onClick={handleSignOut}>Sign Out</Button>
                <Button onClick={onVerify} aria-label="Verify" disabled={processing}>
                  {processing ? 'Processing...' : 'Proceed'}
                </Button>
              </ButtonContainer>
            </UserSection>
          ) : (
            <>
              <SignInTitle>
                {isNewUser ? 'Sign Up' : 'Login'} to nucleus
                <HighlightedText>FUSION</HighlightedText>!
              </SignInTitle>
              <InputField
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                type="password"
                placeholder="Set a Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isNewUser && (
                <InputField
                  type="text"
                  placeholder="Enter your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              {isNewUser && (
                <InputField
                  type="text"
                  placeholder="Enter your University SRN"
                  value={srn}
                  onChange={(e) => setSrn(e.target.value)}
                />
              )}
              <Button onClick={handleAuth} disabled={processing}>
                {processing ? 'Processing...' : isNewUser ? 'Sign Up' : 'Login'}
              </Button>
              <SwitchAuthMode onClick={() => setIsNewUser(!isNewUser)}>
                {isNewUser ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
              </SwitchAuthMode>
              {!isNewUser && (
                <ForgotPasswordLink onClick={handlePasswordReset}>
                  Forgot Password?
                </ForgotPasswordLink>
              )}
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

// Styled Components (unchanged)
const ForgotPasswordLink = styled.p`
  color: #ffffff;
  margin-top: 10px;
  cursor: pointer;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

// Animations (unchanged)
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

const starMovement = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

// Styled Components (unchanged)
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0a, #1b1b1b); /* Dark gradient background */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const StarsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
`;

const StarLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 20%, rgba(0, 0, 0, 0) 60%);
  animation: ${starMovement} 100s linear infinite;
`;

const HeaderSection = styled.section`
  text-align: center;
  margin-top: 20px;
`;

const TitleContainer = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin: 0;
`;

const HighlightedText = styled.span`
  color: #00bcd4;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
  margin: 10px 0;
`;

const Span = styled.span`
  color: #00bcd4;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ffffff;
  margin: 20px auto;
  max-width: 800px;
`;

const HeaderImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignInTitle = styled.h2`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 20px;
  animation: ${slideIn} 1s ease-in-out;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #00bcd4;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #0097a7;
  }
`;

const SwitchAuthMode = styled.p`
  color: #000000;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeMessage = styled.h3`
  color: #000000;
  margin-bottom: 20px;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoadingSpinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #00bcd4;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingMessage = styled.p`
  color: #ffffff;
  margin-top: 10px;
  font-size: 1rem;
`;

export default Verification;
