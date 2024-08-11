import React, { useState } from 'react';
import './App.css';

const DummyAlumni = [
  { company: 'Apple', designation: 'Software Development Engineer', logo: '/apple.png' },
  { company: 'Walmart', designation: 'Software Development Engineer', logo: '/walmart.png' },
  { company: 'Morgan Stanley', designation: 'Tech Analyst', logo: '/morgan-stanley.png' },
  { company: 'CRED', designation: 'Software Development Engineer', logo: '/cred.png' },
  { company: 'Deloitte', designation: 'Solution Delivery Analyst', logo: '/deloitte.png' },
  { company: 'HCL', designation: 'Product Manager', logo: '/hcl.png' },
  { company: 'Oracle', designation: 'Software Development Engineer', logo: '/oracle.png' },
  { company: 'PwC', designation: 'Tech Consultant', logo: '/pwc.png' },
  { company: 'Cisco', designation: 'Big Data Analytics Engineer', logo: '/cisco.png' },
  { company: 'IBM', designation: 'Software Development Engineer', logo: '/ibm.png' },
  { company: 'SAP Labs', designation: 'Software Development Engineer', logo: '/sap.png' },
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
      window.location.href = 'https://nucleusfusioninterviewform.netlify.app/';
    } else if (searchType === 'learn') {
      window.location.href = 'https://nucleusfusioninfo.netlify.app/';
    }
  };

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <section style={styles.searchSection}>
          <h1 style={styles.heading}>Student Search</h1>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                value="prepare"
                checked={searchType === 'prepare'}
                onChange={(e) => setSearchType(e.target.value)}
                style={styles.radioInput}
              />
              <span style={styles.radioText}>
                Connect to a mentor of your preferred organization if you have received an interview call and require tips on cracking it.
              </span>
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                value="learn"
                checked={searchType === 'learn'}
                onChange={(e) => setSearchType(e.target.value)}
                style={styles.radioInput}
              />
              <span style={styles.radioText}>
                Connect to a mentor of your preferred organization if you require generic information about the organization (e.g. its work culture).
              </span>
            </label>
          </div>
          <input
            type="text"
            list="companySuggestions"
            placeholder="Search by Organization Name..."
            style={styles.input}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <datalist id="companySuggestions">
            {uniqueCompanies.map((company, index) => (
              <option key={index} value={company} />
            ))}
          </datalist>
          <div style={styles.optionsSection}>
            <button
              style={{
                ...styles.button,
                backgroundColor: isButtonDisabled ? '#ccc' : '#007BFF',
              }}
              onClick={handleFormOption}
              disabled={isButtonDisabled}
            >
              Send Details via Form
            </button>
          </div>
        </section>
        <section style={styles.companySection}>
          <h2 style={styles.companyHeading}>
            Organizations our mentors come from:
          </h2>
          <div style={styles.companyContainer}>
            <div style={styles.companyList}>
              {uniqueCompanies.map((company, index) => (
                <div key={index} style={styles.companyItem}>
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '1rem',
    boxSizing: 'border-box',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '1rem',
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'LightCyan',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    boxSizing: 'border-box',
  },
  heading: {
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#333',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '1rem',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  radioInput: {
    marginRight: '0.5rem',
  },
  radioText: {
    color: 'blue',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  optionsSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
  },
  button: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '0.5rem',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  companySection: {
    width: '100%',
    padding: '1rem',
    boxSizing: 'border-box',
  },
  companyHeading: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333',
  },
  companyContainer: {
    overflow: 'hidden',
    position: 'relative',
    height: '2.5rem', // Adjust based on content height
    backgroundColor: 'LightCyan',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    width: '100%', // Ensure the container is wide enough
  },
  companyList: {
    display: 'flex',
    flexDirection: 'row',
    whiteSpace: 'nowrap',
    animation: 'slide-left 60s linear infinite', // Adjust the duration here
    width: '200%', // Ensure the list is wide enough for seamless scrolling
  },
  companyItem: {
    padding: '1rem', // Reduced padding for better fit on smaller screens
    fontSize: '1 rem', // Reduced font size for smaller screens
    display: 'inline-block',
    color : 'purple',
    fontWeight: 'bold',
  },
  '@keyframes slide-left': {
    '100%': {
      transform: 'translateX(-100%)',
    },
    '10%': {
      transform: 'translateX(-10%)', // Adjust based on width of companyList
    },
  },
};

export default Body;
