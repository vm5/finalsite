import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animations
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

// Styled components
const SlidingDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0; /* Changed from right to left for better mobile positioning */
  width: 100%;
  overflow: hidden;
  background-color: red;
  font-family: 'Verdana';
`;

const SlidingText = styled.span`
  display: inline-block;
  animation: ${slideRightToLeft} 15s linear infinite;
  color: white;
  font-size: 18px; /* Adjusted font size for smaller screens */
  white-space: nowrap;
  font-family: 'Verdana';
  font-style: italic;
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: black;
  border-bottom: 2px solid #3399ff;
  font-size: 2rem;
  font-family: 'Veradna';
  color: #003366;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: ${fadeIn} 2.5s ease-in-out;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Adjusted font size for smaller screens */
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

  @media (max-width: 768px) {
    margin-bottom: 10px; /* Adjusted margin for mobile */
  }
`;

const StyledLogo = styled.img`
  width: 200px; /* Reduced size for better fit on small screens */
  height: 200px;
  margin: 40px; /* Reduced margin for mobile */
`;

const SlidingHeading = styled.h1`
  animation: ${slideDown} 3s ease-out;
  font-family: 'Verdana';
  color: grey;
  margin-bottom: 20px;
  text-align: center;
  font-size: 2.3rem; /* Adjusted font size for mobile */
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
  gap : 50px;
  display: flex;
  flex-wrap: wrap; /* Added flex-wrap for better wrapping on small screens */
  gap: 15px; /* Adjusted spacing between links */
  justify-content: center; /* Centered the nav links */

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: normal;
    color: lightblue;
    font-size: 15px; /* Adjusted font size for mobile */
    transition: color 0.3s;
    padding: 5px; /* Adjusted padding for mobile */
    
    img {
      width: 24px; /* Adjusted size of icons for mobile */
      height: auto;
      margin-right: 8px; /* Reduced space between icon and text */
    }
  }
`;

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const scrollToMiddle = () => {
    const middlePosition = document.body.scrollHeight / 2;
    window.scrollTo({
      top: middlePosition,
      behavior: 'smooth', 
    });
  };
  

  return (
    <HeaderContainer>
      <SlidingDiv>
        <SlidingText>This portal is now functional for 2024-25. Please note, this portal can be installed as a React App through your mobile browser(s)</SlidingText>
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
      
          <a href="#bottom" onClick={scrollToMiddle}>
            <img src="/faq.png" alt="FAQS" />
            FAQS
          </a>
          <a href="#bottom" onClick={scrollToBottom}>
            <img src="/contactus-removebg-preview.png" alt="Contact Us" />
            Contact Us
          </a>
        </NavLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
