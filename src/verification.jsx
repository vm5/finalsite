import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase'; 

function Verification({ onVerify }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirming password
  const [name, setName] = useState('');
  const [isNewUser, setIsNewUser] = useState(false); 
  const [processing, setProcessing] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [user, setUser] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isNotARobot, setIsNotARobot] = useState(false); // New state for "I'm not a robot" checkbox

  const handleCheckboxChange = () => {
    if (isProcessing) return; // Prevent multiple toggles while processing

    setIsProcessing(true);

    // Delay before updating state
    setTimeout(() => {
      setIsNotARobot(prevState => !prevState);
      setIsProcessing(false); // Allow further toggles after delay
    }, 2000); 
  };
  const handleAuth = async () => {
    if (isNewUser && password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    if (!isNotARobot) {
      alert('Please confirm that you are not a robot.');
      return;
    }

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
  
      // Ensure user is set before attempting to send a confirmation email
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
              <Description>Whether you're a mentor or a job-seeking student, log in to nucleusFUSION to connect and collaborate!</Description>
              <InputField
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {isNewUser && (
                <>
                  <InputField
                    type="text"
                    placeholder="Enter your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputField
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword} // Bind the confirmPassword state
                    onChange={(e) => setConfirmPassword(e.target.value)} // Update the confirmPassword state
                  />
                </>
              )}

              <CheckboxContainer>
                <Checkbox
                  type="checkbox"
                  checked={isNotARobot} 
                  onChange={handleCheckboxChange}
                />
                <CheckboxLabel>I’m not a robot</CheckboxLabel>
              </CheckboxContainer>

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
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  width: 30px;
  height: 30px;
`;

const CheckboxLabel = styled.div`
  font-size: 18x;
  color: grey;
`;
const ForgotPasswordLink = styled.p`
  color: #ffffff;
  margin-top: 10px;
  cursor: pointer;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;
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

const starMovement = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
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
  overflow: hidden;
  z-index: 0;
`;

const StarLayer = styled.div`
  position: absolute; /* Adjusted to cover the entire viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/sky-2668711_1280.jpg'); /* Replace with your image path */
  background-size: cover; /* Ensure the background image covers the entire area */
  background-repeat: repeat; /* Allow image to repeat */
  background-position: 0 0; /* Start position */
  z-index: -1; /* Make sure it stays behind other content */
  animation: ${starMovement} 10s linear infinite; /* Animation for movement */
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 500px;
  padding: 20px;
  text-align: left;
`;

const TitleContainer = styled.div`
  text-align: left;
`;

const MainTitle = styled.h1`
  font-size: 50px;
  color: silver;
  font-weight: bold;
  text-align: left;
  line-height: 1.2;
  font-family: 'Verdana';
`;

const HighlightedText = styled.span`
  color: purple;
  animation: ${shimmer} 2s infinite alternate; /* Optional shimmer animation */
  font-family: 'Verdana';
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 25px;
  color: silver;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: left;
  margin-left: 0;
  font-family:'Verdana';
`;

const Span = styled.span`
  color: #ff8c00;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 20px;
  color: silver;
  margin-top: 0;
  text-align: left;
  line-height: 1.6;
  font-family: 'Verdana';
  font-weight: bold;
`;

const HeaderImage = styled.img`
  width: 300px;
  height: auto;
  z-index: 1;
  animation: ${slideIn} 2s ease-out;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 10px;
  margin: 0 auto;
  padding: 20px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Optional shadow for depth */
  margin-bottom: 30px;
`;

const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100%;
  margin-bottom: 40px;
`;

const SignInTitle = styled.h2`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Verdana';
  font-weight: bold;
`;

const InputField = styled.input`
  width: 60%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #d0d0d0;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  color: #333333;
`;

const Button = styled.button`
  background-color: #ff8c00;
  color: white;
  padding: 12px 24px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  width: 75%
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6c00;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const SwitchAuthMode = styled.p`
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WelcomeMessage = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  width: 75%;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Black overlay */
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingSpinner = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.2);
  border-top: 8px solid #ffffff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1.5s linear infinite;
`;

const LoadingMessage = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;

export default Verification;
