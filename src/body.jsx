import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';
import {QueryData} from './data';
import emailjs from "emailjs-com";

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
  const [mentorCode, setMentorCode] = useState('');
  const [isMentorAccessGranted, setMentorAccessGranted] = useState(false);
  const [selectedCompanyForMentor, setSelectedCompanyForMentor] = useState('');
  const [queries, setQueries] = useState([]);
  const [persons, setPersons] = useState([]);
  const [responseText, setSelectedSlot] = useState(''); 
  const [selectedSlot, setResponseText] = useState(''); 
  const [isMeetingScheduled, setIsMeetingScheduled] = useState(false);
  const [scheduleVideoCall, setScheduleVideoCall] = useState(false); // New state for scheduling video call

  const uniqueCompanies = [...new Set(DummyAlumni.map(alumnus => alumnus.company))];
  const isButtonDisabled = !company.trim();

  useEffect(() => {
    if (mentorCode && selectedCompanyForMentor) {
      const companyQueries = QueryData[selectedCompanyForMentor];
      if (companyQueries && companyQueries.codes.includes(mentorCode)) {
        setMentorAccessGranted(true);
        setQueries(companyQueries.queries);
        setPersons(companyQueries.persons || []);
      } else {
        setMentorAccessGranted(false);
        setQueries([]);
        setPersons([]);
      }
    }
  }, [mentorCode, selectedCompanyForMentor]);

  const handleFormOption = () => {
    if (searchType === 'prepare') {
      window.location.href = 'https://nucleusfusioninterviewform.netlify.app/';
    } else if (searchType === 'learn') {
      window.location.href = 'https://nucleusfusioninfo.netlify.app/';
    }
  };

  const handleSubmitSlots = () => {
    if (responseText.trim()) {
      const templateParams = {
        company: selectedCompanyForMentor,
        slot: scheduleVideoCall ? selectedSlot : 'No video call requested', // Only include slot if video call is scheduled
        mentorcode: mentorCode,
        response: responseText, 
        queries: queries.join(', '),
        persons: persons.map(person => `${person.name} (${person.icon})`).join(', '),
      };

      emailjs.send('service_skcxg47', 'template_9pyhzgb', templateParams, 'bZNzwiq7H32zsXN_e')
        .then((response) => {
          alert('Response submitted successfully.');
          setIsMeetingScheduled(true);
        })
        .catch((err) => {
          alert('Failed to send response. Please try again.');
          console.error('Error sending email:', err);
        });
    } else {
      alert('Please provide a response.');
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
                Connect to a mentor of your preferred organization if you require generic information about the organization (e.g. its work culture).
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
        {/* Mentor Section */}
        <MentorSection>
          <MentorHeading>Mentor Access</MentorHeading>
          <Mentorsub>We want to extend our heartfelt thanks to all the mentors on this platform. Your willingness to share your expertise and guide us is truly appreciated. Your support and advice make a significant difference. Thank you for being such an integral part of our community!</Mentorsub>
          <Dropdown
            value={selectedCompanyForMentor}
            onChange={(e) => setSelectedCompanyForMentor(e.target.value)}
          >
            <option value="">Select an Organization</option>
            {uniqueCompanies.map((company, index) => (
              <option key={index} value={company}>{company}</option>
            ))}
          </Dropdown>
          <Input
            type="text"
            placeholder="Enter Mentor Code"
            value={mentorCode}
            onChange={(e) => setMentorCode(e.target.value)}
          />

          {isMentorAccessGranted && (
            <>
              <QueriesSection>
                <QueriesHeading>Queries for {selectedCompanyForMentor}:</QueriesHeading>
                <ul>
                  {queries.map((query, index) => (
                    <li key={index} style = {{color:'silver'}}>{query}</li>
                  ))}
                </ul>
              </QueriesSection>

              <QueriesSection>
                <QueriesHeading>Person(s) requesting a response for {selectedCompanyForMentor}:</QueriesHeading>
                <ul>
                  {persons.map((person, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px',color:'silver' }}>
                      <img
                        src={person.icon}
                        alt={person.name}
                        style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                      />
                      <span>{person.name}</span>
                    </li>
                  ))}
                </ul>
              </QueriesSection>

              {/* Mentor's Response Section */}
              <ResponseSection>
                <ResponseHeading>Provide your response:</ResponseHeading>
                <TextArea
                  placeholder="Type your response here..."
                  value={responseText}
                  onChange={(e) => setResponseText(e.target.value)}
                />
              </ResponseSection>

              {/* Toggle for Scheduling Video Call */}
              <div style={{ marginTop: '20px',color:'silver',fontSize: '20px' }}>
                <input
                  type="checkbox"
                  checked={scheduleVideoCall}
                  onChange={(e) => setScheduleVideoCall(e.target.checked)}
                />
                <label style={{ marginLeft: '10px' ,color: 'silver, fontSize:30px'}}>I want to schedule a video call</label>
              </div>

              {/* Conditional Time Slot Selection */}
              {scheduleVideoCall && (
                <FreeSlotsSection>
                  <select value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)}>
                    <option value="">Select a time slot for the video call</option>
                    <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                    <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                    <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                  </select>
                </FreeSlotsSection>
              )}

              <Button onClick={handleSubmitSlots}>Submit Response</Button>

              {isMeetingScheduled && scheduleVideoCall && (
                <MeetingSection>
                  <MeetingHeading>Schedule a Google Meet</MeetingHeading>
                  <p>Schedule a Google Meet to connect with the student, click the button below and select a time slot that you preferred earlier</p>
                  <Button
                    style={{ backgroundColor: '#007BFF' }}
                    onClick={() => window.location.href = 'https://calendar.google.com/calendar/u/0/r?hl=en&pli=1'}
                  >
                    Schedule a Google Meet
                  </Button>
                </MeetingSection>
              )}
            </>
          )}
        </MentorSection>
      </Main>
    </PageContainer>
  );
};
const ResponseSection = styled.div`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
`;

const ResponseHeading = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: silver;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical; /* Allows vertical resizing of the text area */
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
  outline: none;
  &:focus {
   background-color: rgba(255, 255, 255, 0.1);
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
const FreeSlotsSection = styled.div`
  margin-top: 20px;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: Cyan;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);

  select {
    width: 75%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: silver;
    color: purple;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    margin-top: 20px;
    font-weight: bold;
    font-family:'Verdana';

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const MeetingSection = styled.div`
  margin-top: 20px;
  padding: 10px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
`;

const MeetingHeading = styled.h3`
  font-size: 18px;
  color: silver;
  margin-bottom: 10px;
  font-weight: bold;
  font-family: 'Verdana';
`;


const starMovement = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;
// MentorSection
const MentorSection = styled.section`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin: 20px 0;
`;

// MentorHeading
const MentorHeading = styled.h2`
  font-size: 240x;
  color: silver;
  margin-bottom: 10px;
  font-famiy:'Verdana';
  font-weight: bold;
`;
const Mentorsub = styled.h4`
  font-size: 15px;
  color: white;
  margin-bottom: 10px;
  font-famiy:'Verdana';
  font-weight: bold;
`;


// Input
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 75%;
  box-sizing: border-box;
`;

// QueriesSection
const QueriesSection = styled.section`
  padding: 20px;
 background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin: 20px 0;
`;

// QueriesHeading
const QueriesHeading = styled.h3`
  font-size: 20px;
  color: silver;
  font-weight: bold;
  font-family: 'Verdana';
  margin-bottom: 10px;
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
  animation: ${starMovement} 20s linear infinite;
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
  background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  border-radius: 10px;
  backdrop-filter: blur(10px); /* Background blur effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  padding: 2rem;
`;

const CompanyHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #ffffff; /* White text color */
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
      transform: translateX(-100%);
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
  margin-right: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CompanyLogo = styled.img`
  max-width: 80%;
  max-height: 80%;
`;

export default Body;
