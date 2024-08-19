import React, { useState } from 'react';
import styled from 'styled-components';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  PhoneAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import { auth, db, setupRecaptcha, handlePhoneSignIn, verifyCode } from './firebase';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
const WelcomeMessage = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  width: 50%;
`;
const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
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

const starMovement = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const shimmer = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
`;

// Spinner styling
const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #ff6f61;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite;
`;

// Overlay styling
const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/sky-2668711_1280.jpg'); /* Replace with your image path */
  background-size: cover;
  background-repeat: repeat;
  background-position: 0 0;
  z-index: -1;
  animation: ${starMovement} 10s linear infinite;
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
const LoadingText = styled.p`
  font-size: 18px;
  color: white;
  margin-top: 20px;
  text-align: center;
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
  animation: ${shimmer} 2s infinite alternate;
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
  font-family: 'Verdana';
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
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
  width: 75%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6c00;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

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
  font-size: 18px;
  color: white;
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
function Verification({ onVerify }) {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [user, setUser] = useState(null);
  const [isNotARobot, setIsNotARobot] = useState(false);
  const [role, setRole] = useState('student');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    try {
      const recaptchaVerifier = setupRecaptcha('recaptcha-container');
      const confirmationResult = await handlePhoneSignIn(phoneNumber, recaptchaVerifier);
      setVerificationId(confirmationResult.verificationId);
      console.log('SMS sent. Verification ID:', confirmationResult.verificationId);
    } catch (error) {
      console.error('Error during phone number submission:', error);
    }
  };

  const handleVerificationCodeSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
      const userCredential = await signInWithCredential(auth, credential);
      await verifyCode(verificationCode, email, name, role); // Update profile and store user data
  
      setUser(userCredential.user);
      console.log('User signed in successfully:', userCredential.user);
    } catch (error) {
      console.error('Error during verification code submission:', error);
    }
  };

  const handleCheckboxChange = () => {
    if (processing) return;

    setProcessing(true);
    setLoadingMessage(isNotARobot ? 'Verified...' : 'Verifying...');

    setTimeout(() => {
      setIsNotARobot((prevState) => !prevState);
      setProcessing(false);
      setLoadingMessage('');
    }, 1000);
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
        if (role === 'student') {
          userCredential = await createUserWithEmailAndPassword(auth, email, password);
        } else if (role === 'mentor') {
          // Trigger phone number authentication separately
          await handlePhoneNumberSubmit(new Event('submit'));
          return;
        }

        await updateProfile(auth.currentUser, { displayName: name });

        setUser(userCredential.user);
        setLoadingMessage('');
        onVerify();
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
      }

      if (userCredential?.user) {
        console.log(`User signed in successfully: ${userCredential.user.email}`);
        onVerify();
      }

    } catch (error) {
      alert(error.message);
      setLoadingMessage('');
    } finally {
      setProcessing(false);
    }
  };

  const handleSignOut = async () => {
    setProcessing(true);
    setLoadingMessage('Signing out...');

    try {
      await signOut(auth);
      setUser(null);
      setEmail('');
      setPassword('');
      setName('');
    } catch (error) {
      alert('Error signing out: ' + error.message);
    } finally {
      setProcessing(false);
      setLoadingMessage('');
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

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const toggleNewUser = () => {
    setIsNewUser((prev) => !prev);
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
              <div>
      <form onSubmit={handlePhoneNumberSubmit}>
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <button type="submit">Send Verification Code</button>
      </form>

      {verificationId && (
        <form onSubmit={handleVerificationCodeSubmit}>
          <label>
            Verification Code:
            <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
          </label>
          <button type="submit">Verify Code and Sign In</button>
        </form>
      )}

      <div id="recaptcha-container"></div>
    </div>
              <WelcomeMessage>Welcome, {user.email}</WelcomeMessage>
              <ButtonContainer>
                <Button onClick={handleSignOut}>Sign Out</Button>
                <Button onClick={() => {}} aria-label="Verify" disabled={processing}>
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
              <Description>
                Whether you're a mentor or a job-seeking student, log in to nucleusFUSION to connect and collaborate!
              </Description>

              {/* Role Selection */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <label style={{ color: 'white', marginLeft: '0' }}>
                  <input
                    type="radio"
                    value="student"
                    checked={role === 'student'}
                    onChange={handleRoleChange}
                  />
                  I'm a student
                </label>
                <label style={{ color: 'white', marginRight: '0' }}>
                  <input
                    type="radio"
                    value="mentor"
                    checked={role === 'mentor'}
                    onChange={handleRoleChange}
                  />
                  I'm a mentor
                </label>
              </div>

              {/* Conditionally Render Email or Phone Number Field */}
              {role === 'student' && (
                <>
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </>
                  )}
                </>
              )}

              {role === 'mentor' && (
                <>
                  <InputField
                    type="text"
                    placeholder="Enter your Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <form onSubmit={handlePhoneNumberSubmit}>
                    <button type="submit">Send Verification Code</button>
                  </form>

                  {verificationId && (
                    <form onSubmit={handleVerificationCodeSubmit}>
                      <InputField
                        type="text"
                        placeholder="Verification Code"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                      />
                      <button type="submit">Verify Code and Sign In</button>
                    </form>
                  )}
                  <div id="recaptcha-container"></div>
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
              <ForgotPasswordLink onClick={handlePasswordReset} disabled={processing}>
                Forgot Password?
              </ForgotPasswordLink>
              
              <div style={{ marginTop: '20px', color: 'white', textAlign: 'center' }}>
                {isNewUser ? (
                  <p>
                    Already have an account?{' '}
                    <span
                      style={{ color: '#4A90E2', cursor: 'pointer' }}
                      onClick={toggleNewUser}
                    >
                      Login
                    </span>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{' '}
                    <span
                      style={{ color: '#4A90E2', cursor: 'pointer' }}
                      onClick={toggleNewUser}
                    >
                      Sign Up
                    </span>
                  </p>
                )}
              </div>
            </>
          )}
        </VerificationWrapper>
      </FormContainer>
      {loadingMessage && (
        <LoadingOverlay>
          <div>
            <LoadingSpinner />
            <LoadingText>{loadingMessage}</LoadingText>
          </div>
        </LoadingOverlay>
      )}
    </PageContainer>
  );
}
export default Verification;
