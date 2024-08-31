import React, { useState} from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';

const DummyAlumni = [
  { company: 'Walmart', designation: 'Software Development Engineer', logo: '/walmart.png' },
  { company: 'Morgan Stanley', designation: 'Tech Analyst', logo: '/morgan-stanley.png' },
  { company: 'Apple', designation: 'Software Development Engineer', logo: '/apple-removebg-preview.png' },
  { company: 'CRED', designation: 'Software Development Engineer', logo: '/cred.png' },
  { company: 'Deloitte', designation: 'Solution Delivery Analyst', logo: '/deloitte.png' },
  { company: 'HCL', designation: 'Product Manager', logo: '/hcl.png' },
  { company: 'Oracle', designation: 'Software Development Engineer', logo: '/oracle.png' },
  { company: 'PwC', designation: 'Tech Consultant', logo: '/pwc.png' },
  { company: 'Cisco', designation: 'Big Data Analytics Engineer', logo: '/cisco.png' },
  { company: 'IBM', designation: 'Software Development Engineer', logo: '/ibm.png' },
  { company: 'SAP Labs', designation: 'Software Development Engineer', logo: '/SAP labs.png' },
  { company: 'Epsilon', designation: 'Software Development Engineer', logo: '/epsilon.png' },
  { company: 'Schneider Electric', designation: 'Full Stack Developer', logo: '/schneider-electric.png' },
  { company: 'Cloudera', designation: 'Software Development Engineer', logo: '/cloudera.png' },
  { company: 'Mercedes Benz', designation: 'Data Engineer', logo: '/mercedes-benz.png' },
  { company: 'Paypal', designation: 'Target Corporation', logo: '/paypal.png' },
  { company: 'GE', designation: 'Software Development Engineer', logo: '/ge.png' },
  { company: 'Allo Health', designation: 'Software Development Engineer', logo: '/allo-health.png' },
  { company: 'GSK', designation: 'Software Development Engineer', logo: '/gsk.png' },
  { company: 'Autodesk', designation: 'Software Development Engineer', logo: '/autodesk.png' },
  { company: 'Target', designation: 'Software Development Engineer', logo: '/target.png' },
  { company: 'KPMG India', designation: 'Data Analyst', logo: '/kpmg.png' },
  { company: 'Arcesium', designation: 'Software Development Engineer', logo: '/arcesium.png' },
  { company: 'Games 24x7', designation: 'Software Development Engineer', logo: '/games-24x7.png' },
  { company: 'Hewlett-Packard Enterprise', designation: 'Data Scientist', logo: '/hewlett-packard.png' },
  { company: 'Change Jar Technologies', designation: 'Software Development Engineer', logo: '/change-jar.png' },
  { company: 'LAM Research', designation: 'IT Engineer', logo: '/lam-research.png' },
  { company: 'Consillio', designation: 'Software Development Engineer', logo: '/consillio.png' },
  { company: 'Blue Yonder', designation: 'Software Development Engineer', logo: '/blue-yonder.png' },
  { company: 'Indian Navy', designation: 'Sub Lieutenant', logo: '/indian-navy.png' },
  { company: 'IIT Kanpur', designation: 'PhD', logo: '/iit-kanpur.png' },
  { company: 'IISc', designation: 'PhD', logo: '/iisc.png' },
  { company: 'Zebra Technologies', designation: 'Software Development Engineer', logo: '/zebra-technologies.png' },
  { company: 'Intel', designation: 'Applied Scientist', logo: '/intel.png' },
  { company: 'Commvault', designation: 'Software Development Engineer', logo: '/commvault.png' },
  { company: 'Tejas Networks', designation: 'Software Development Engineer', logo: '/tejas-networks.png' },
  { company: 'Akamai Technologies', designation: 'Software Development Engineer', logo: '/akamai.png' },
  { company: 'CGI', designation: 'Software Development Engineer', logo: '/cgi.png' },
  { company: 'Hewlett Packard Enterprise', designation: 'Cloud Developer', logo: '/hewlett-packard.png' },
  { company: 'TruckX', designation: 'Senior Software Development Engineer', logo: '/truckx.png' },
  { company: 'Reliance', designation: 'Software Development Engineer', logo: '/reliance.png' },
  { company: 'Tesco', designation: 'Software Development Engineer', logo: '/tesco.png' },
  { company: 'Via Play Group', designation: 'Data Engineer', logo: '/via-play-group.png' },
  { company: 'Sense', designation: 'Software Development Engineer', logo: '/sense.png' },
  { company: 'Hero-Vired', designation: 'Product Manager', logo: '/hero-vired.png' },
  { company: 'Caterpillar Inc', designation: 'Software Development Engineer', logo: '/caterpillar.png' },
  { company: 'RtBrick', designation: 'Software Development Engineer', logo: '/rtbrick.png' },
  { company: 'Adobe', designation: 'Software Development Engineer', logo: '/adobe.png' },
  { company: 'Itron', designation: 'Software Development Engineer', logo: '/itron.png' },
  { company: 'Rattle', designation: 'Software Development Engineer', logo: '/rattle.png' },
];
const Body = () => {
  const [company, setCompany] = useState('');
  const [searchType, setSearchType] = useState('learn');
  const uniqueCompanies = [...new Set(DummyAlumni.map(alumnus => alumnus.company))];
  const isButtonDisabled = !company.trim();
  const handleFormOption = () => {
    if (searchType === 'prepare') {
      window.location.href = 'https://interview-sooty-phi.vercel.app/';
    } else if (searchType === 'learn') {
      window.location.href = 'https://connectify-five-sable.vercel.app/';
    }
  };

  return (
    <PageContainer>
      <StarsContainer>
        <StarLayer />
      </StarsContainer>
      <Main>
        <SearchSection>
          <Heading>Student Search</Heading>
          <RadioGroup>
            <RadioLabel>
              <RadioInput
                type="radio"
                value="prepare"
                checked={searchType === 'prepare'}
                onChange={(e) => setSearchType(e.target.value)}
              />
              <RadioText>
                Connect to a mentor of your preferred organization if you have received an interview call and require tips on cracking it.
              </RadioText>
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                value="learn"
                checked={searchType === 'learn'}
                onChange={(e) => setSearchType(e.target.value)}
              />
              <RadioText>
                Connect to a mentor of your preferred organization if you require generic information about the organization (e.g. its work culture, prerequisites etc).
              </RadioText>
            </RadioLabel>
          </RadioGroup>
          <SearchWrapper>
            <Dropdown
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            >
              <option value="">Select an Organization</option>
              {uniqueCompanies.map((company, index) => (
                <option key={index} value={company}>{company}</option>
              ))}
            </Dropdown>
          </SearchWrapper>
          <OptionsSection>
            <Button
              style={{
                backgroundColor: isButtonDisabled ? '#ccc' : '#007BFF',
              }}
              onClick={handleFormOption}
              disabled={isButtonDisabled}
            >
              Send Details via Form
            </Button>
          </OptionsSection>
        </SearchSection>
        <CompanySection>
          <CompanyHeading>
            Organizations our mentors come from:
          </CompanyHeading>
          <SlidingSection>
            <SlidingContainer>
              {DummyAlumni.map((alumnus, index) => (
                <CompanyItem key={index}>
                  <CompanyLogo src={alumnus.logo} alt={alumnus.company} />
                </CompanyItem>
              ))}
            </SlidingContainer>
          </SlidingSection>
        </CompanySection>
      </Main>
    </PageContainer>
  );
};
const starMovement = keyframes`
  from {
    background-position: 0 0;
  }
  to {
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
 background-color: rgba(255, 255, 255, 0.1); /* Dark gradient background */
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
  z-index: 1;
`;

const StarLayer = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  background: url('/sky-2668711_1280.jpg') no-repeat center center;
  background-size: cover; /* Ensures the image covers the entire element */
  animation: ${starMovement} 30s linear infinite;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const SearchSection = styled.section`
  width: 100%;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  border-radius: 10px;
  backdrop-filter: blur(10px); /* Background blur effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: silver;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  text-align: left;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: silver;
`;

const RadioInput = styled.input`
  margin-right: 1rem;
`;

const RadioText = styled.span`
  font-size: 1rem;
  line-height: 1.5;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const Dropdown = styled.select`
  padding: 1rem;
  width: 100%;
  max-width: 400px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: silver;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const OptionsSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const CompanySection = styled.section`
  margin-top: 3rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* Dark background similar to the image */
  border-radius: 10px;
  padding: 2rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SlidingSection = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  
`;

const SlidingContainer = styled.div`
  display: flex;
  animation: slide 20s linear infinite;

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const CompanyItem = styled.div`
  flex-shrink: 0;
  width: 150px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
  background-color: transparent; 
  border-radius: 10px;
`;

const CompanyLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  filter: brightness(1) invert(0); /* White logo color */
`;
const CompanyHeading = styled.h3`
  font-size: 2rem; /* Adjust the size as needed */
  margin-bottom: 2rem; /* Space below the heading */
  color: #ffffff; /* White text color */
  text-align: center; /* Center the heading */
  font-weight: bold; /* Bold font */
`;

export default Body;
