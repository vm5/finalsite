import React from 'react';
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
  background-color: red;
  font-family: 'Verdana';
`;

const SlidingText = styled.span`
  display: inline-block;
  animation: ${slideRightToLeft} 15s linear infinite;
  color: white;
  font-size: 18px;
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
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

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

    &:hover {
      color: #3399ff;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SlidingDiv>
        <SlidingText>This portal is now functional for 2024-25. This portal can also be installed as an app through your phone browser(s)</SlidingText>
      </SlidingDiv>
      <HeaderContent>
        <LogoContainer>
          <StyledLogo src="/nucleus.png" alt="connectCOMPASS Logo" />
        </LogoContainer>
        <SlidingHeading>
          Welcome to nucleus<span>FUSION</span>
        </SlidingHeading>
        <NavLinks>
          <a href="/" aria-label="Home">
            <img src="/home-removebg-preview (1).png" alt="Home" />
            Home
          </a>
          <a href="#bottom" aria-label="FAQS" onClick={() => window.scrollTo({ top: document.body.scrollHeight / 2, behavior: 'smooth' })}>
            <img src="/faq.png" alt="FAQS" />
            FAQS
          </a>
          <a href="#bottom" aria-label="Contact Us" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            <img src="/contactus-removebg-preview.png" alt="Contact Us" />
            Contact Us
          </a>
        </NavLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
