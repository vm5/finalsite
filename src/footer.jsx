import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Styled components
const FooterContainer = styled.footer`
  background: #111;
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-top: 1px solid #444;
  position: relative;
  width: 100%;
  font-family: 'Verdana', sans-serif;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const HighlightedText = styled.span`
  color: #6a1b9a;
  font-weight: bold;
`;

const AdditionalContent = styled.div`
  margin-top: 40px;
  font-size: 16px;
  animation: ${slideIn} 1s ease-out;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
    color: #ccc;
    line-height: 1.5;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: lightblue;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: yellow;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin: 30px auto;
  display: block;

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const FAQSection = styled.section`
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const FAQSubtitle = styled.h5`
  font-size: 1.5rem;
  color: #bbb;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const FAQContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const FAQBox = styled.div`
  background: #1c1c1c;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1.5s ease-out;
  width: 100%;
  max-width: 300px;
  color: #ddd;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Question = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #6a1b9a;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Answer = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const FeedbackSection = styled.section`
  margin-bottom: 60px;
  background: #2c2c2c;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const FeedbackTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const FeedbackDescription = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 20px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const FloatingWhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366; /* WhatsApp green */
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #128c7e; /* Darker WhatsApp green */
    transform: translateY(-3px);
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    bottom: 10px;
    right: 10px;
    padding: 6px 12px;
    font-size: 12px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  textarea {
    width: 100%;
    max-width: 600px;
    height: 150px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #444;
    background: #333;
    color: #fff;
    resize: vertical;
    font-size: 1rem;

    @media (max-width: 768px) {
      max-width: 500px;
    }

    @media (max-width: 480px) {
      max-width: 100%;
      font-size: 0.9rem;
    }
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #6a1b9a;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #8e24aa;
    }

    @media (max-width: 768px) {
      padding: 8px 16px;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 6px 12px;
      font-size: 0.8rem;
    }
  }
`;

const Footer = () => {
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_nra8ibh', 'template_7zhdusk', e.target, 'vW5x6b44wyKCaQKLb')
      .then((result) => {
        setStatus('Feedback submitted successfully!');
        setFeedback('');
      }, (error) => {
        setStatus('An error occurred. Please try again.');
      });
  };
  return (
    <FooterContainer>
      <FAQSection>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQSubtitle>Get instant answers to your queries!</FAQSubtitle>
        <FAQContainer>
          <FAQBox>
            <Question>How do I get started?</Question>
            <Answer>Enter the mentioned details in the Sign Up container and get started!</Answer>
          </FAQBox>
          <FAQBox>
            <Question>Who can use nucleus<HighlightedText>FUSION</HighlightedText>?</Question>
            <Answer>Current students and job-seeking individuals looking for mentorship and career guidance can use nucleus<HighlightedText>FUSION</HighlightedText>.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>Is there a fee to use nucleus<HighlightedText>FUSION</HighlightedText>?</Question>
            <Answer>No, nucleus<HighlightedText>FUSION</HighlightedText> is a free platform for students and job-seekers.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>How do I find a mentor?</Question>
            <Answer>After signing up, you can search for mentors based on your preferred organization with specific designations or specific career needs.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>What kind of guidance can I get?</Question>
            <Answer>You can receive guidance on job interviews, career transitions, industry trends, and more from experienced professionals.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>How do I contact a mentor?</Question>
            <Answer>Once you find a mentor, you can contact them through the platform's messaging system or you can also video call the mentor to seek guidance if you wish.</Answer>
          </FAQBox>
        </FAQContainer>
      </FAQSection>
      <FeedbackSection>
        <FeedbackTitle>How Was Your Experience with the Site?</FeedbackTitle>
        <FeedbackDescription>We value your feedback and strive to improve our platform. Please share your thoughts and experiences with us.</FeedbackDescription>
        <FeedbackForm onSubmit={handleSubmit}>
          <textarea 
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback and rating out of 5..."
            required
          />
          <button type="submit">Submit Feedback</button>
        </FeedbackForm>
        {status && <p>{status}</p>}
      </FeedbackSection>

      <Logo src="/nucleus.png" alt="nucleusFUSION Logo" />

      <LinkContainer>
       
        <Link href="https://nucleusfusioncontact.netlify.app/">
          <img src="/contactus-removebg-preview.png" alt="Contact Us" />
          Contact Us
        </Link>
      </LinkContainer>

      <AdditionalContent>
        <p>nucleus<HighlightedText>FUSION</HighlightedText>: Your go-to platform for establishing professional connections. Get the answers you need and stay informed with the latest insights!</p>
        <p>&copy; {new Date().getFullYear()} nucleus<HighlightedText>FUSION</HighlightedText>. All rights reserved.</p>
        <p>Version v1.0.1</p>
      </AdditionalContent>
      <FloatingWhatsAppButton href="https://wa.me/918951475102" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" />
        Chat with us
      </FloatingWhatsAppButton>
    </FooterContainer>
  );
};

export default Footer;
