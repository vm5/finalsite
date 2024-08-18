import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

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

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideRightToLeft = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 1;
  }
`;

const SlidingDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to right, #ff5733, #ffbd00);
  padding: 10px 0;
  z-index: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const SlidingText = styled.span`
  display: inline-block;
  animation: ${slideRightToLeft} 15s linear infinite;
  color: white;
  font-size: 18px;
  white-space: nowrap;
  font-family: 'Verdana';
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: black;
  border-bottom: 2px solid #3399ff;
  font-size: 2rem;
  font-family: 'Verdana';
  color: #003366;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: ${fadeIn} 2.5s ease-in-out;
  text-align: center;
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 10px;
    width: 100%;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 0;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const StyledLogo = styled.img`
  width: 200px;
  height: 200px;
  margin: 40px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 20px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    margin: 10px;
  }
`;

const SlidingHeading = styled.h1`
  animation: ${slideDown} 3s ease-out;
  font-family: 'Verdana';
  color: grey;
  margin-bottom: 20px;
  text-align: center;
  font-size: 2.3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  span {
    color: purple;
  }
`;

const NavLinks = styled.div`
  margin-top: 10px;
  font-family: 'Verdana';
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: normal;
    color: lightblue;
    font-size: 15px;
    transition: color 0.3s;
    padding: 5px;

    img {
      width: 24px;
      height: auto;
      margin-right: 8px;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    flex-direction: column;
    gap: 5px;
  }
`;

const fallAnimation = keyframes`
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const UpdatesContainer = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%);
  color: #f8f8f8;
  padding: 20px 30px;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  width: 80%;
  text-align: left;
  font-size: 1.1rem;
  font-family: 'Verdana';
  font-weight: bold;
  animation: ${fallAnimation} 1.5s ease-in-out;

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: yellow;
    line-height: 1.6;
    font-weight: bold;
  }

  ol {
    list-style-position: inside;
    margin-left: 0;
    padding-left: 20px;

    li {
      margin-bottom: 10px;
      font-size: 1rem;
      color: purple;
      line-height: 1.4;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 1rem;
    padding: 15px 25px;

    p {
      font-size: 1.1rem;
    }

    li {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    width: 95%;
    font-size: 0.9rem;
    padding: 10px 20px;

    p {
      font-size: 1rem;
    }

    li {
      font-size: 0.85rem;
    }
  }
`;


const SignInButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 1rem;
  font-family: 'Verdana';
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  z-index: 2000;

  &:hover {
    background-color: #357ae8;
    transform: scale(1.05);
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
`;

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    if (!isSignedIn) {
      setIsSignedIn(true);
      const middlePosition = document.body.scrollHeight / 3;
      window.scrollTo({
        top: middlePosition,
        behavior: 'smooth',
      });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <>
      <HeaderContainer>
        <SignInButton onClick={handleSignIn}>
          <img src="/dm-removebg-preview.png" alt="Google Logo" />
          {isSignedIn ? 'Exit' : 'Get Started'}
        </SignInButton>
        <SlidingDiv>
          <SlidingText>This portal is now functional for 2024-25. This portal can also be installed as an app through your web browser(s)</SlidingText>
        </SlidingDiv>
        <HeaderContent>
          <LogoContainer>
            <StyledLogo src="/nucleus.png" alt="connectCOMPASS Logo" />
          </LogoContainer>
          <SlidingHeading>
            Welcome to nucleus<span>FUSION</span>
          </SlidingHeading>
          <NavLinks>
            <a href="/">
              <img src="/home-removebg-preview (1).png" alt="Home" />
              Home
            </a>
            <a href="#bottom" onClick={() => window.scrollTo({ top: document.body.scrollHeight / 2, behavior: 'smooth' })}>
              <img src="/faq.png" alt="FAQS" />
              FAQS
            </a>
            <a href="#bottom" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
              <img src="/contactus-removebg-preview.png" alt="Contact Us" />
              Contact Us
            </a>
          </NavLinks>
          <UpdatesContainer>
  <p>Things have changed. What's New?</p>
  <ol>
    <li>A designated section for signing up and logging in to users' respective accounts ensuring uniformity and ease of accessing the portal.</li>
    <li>Addition of a mentor section ensuring easy access to queries, ensuring that no query goes unanswered.</li>
    <li>An improved user interface for a better user experience.</li>
    <li>Fixing of minor bugs.</li>
  </ol>
</UpdatesContainer>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};

export default Header;
