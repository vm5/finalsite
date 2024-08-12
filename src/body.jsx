import React, { useState } from 'react';
import './App.css';

const DummyAlumni = [
const DummyAlumni = [
  { designation: 'Software Development Engineer', logo: '/walmart.png' },
  { designation: 'Software Development Engineer', logo: '/apple-removebg-preview.png' },
  { designation: 'Tech Analyst', logo: '/morgan-stanley.png' },
  { designation: 'Software Development Engineer', logo: '/cred.png' },
  { designation: 'Solution Delivery Analyst', logo: '/deloitte.png' },
  { designation: 'Product Manager', logo: '/hcl.png' },
  { designation: 'Software Development Engineer', logo: '/oracle.png' },
  { designation: 'Tech Consultant', logo: '/pwc.png' },
  { designation: 'Big Data Analytics Engineer', logo: '/cisco.png' },
  { designation: 'Software Development Engineer', logo: '/ibm.png' },
  { designation: 'Software Development Engineer', logo: '/sap.png' },
  { designation: 'Software Development Engineer', logo: '/epsilon.png' },
  { designation: 'Full Stack Developer', logo: '/schneider-electric.png' },
  { designation: 'Software Development Engineer', logo: '/cloudera.png' },
  { designation: 'Data Engineer', logo: '/mercedes-benz.png' },
  { designation: 'Target Corporation', logo: '/paypal.png' },
  { designation: 'Software Development Engineer', logo: '/ge.png' },
  { designation: 'Software Development Engineer', logo: '/allo-health.png' },
  { designation: 'Software Development Engineer', logo: '/gsk.png' },
  { designation: 'Software Development Engineer', logo: '/autodesk.png' },
  { designation: 'Software Development Engineer', logo: '/target.png' },
  { designation: 'Data Analyst', logo: '/kpmg.png' },
  { designation: 'Software Development Engineer', logo: '/arcesium.png' },
  { designation: 'Software Development Engineer', logo: '/games-24x7.png' },
  { designation: 'Data Scientist', logo: '/hewlett-packard.png' },
  { designation: 'Software Development Engineer', logo: '/change-jar.png' },
  { designation: 'IT Engineer', logo: '/lam-research.png' },
  { designation: 'Software Development Engineer', logo: '/consillio.png' },
  { designation: 'Software Development Engineer', logo: '/blue-yonder.png' },
  { designation: 'Sub Lieutenant', logo: '/indian-navy.png' },
  { designation: 'PhD', logo: '/iit-kanpur.png' },
  { designation: 'PhD', logo: '/iisc.png' },
  { designation: 'Software Development Engineer', logo: '/zebra-technologies.png' },
  { designation: 'Applied Scientist', logo: '/intel.png' },
  { designation: 'Software Development Engineer', logo: '/commvault.png' },
  { designation: 'Software Development Engineer', logo: '/tejas-networks.png' },
  { designation: 'Software Development Engineer', logo: '/akamai.png' },
  { designation: 'Software Development Engineer', logo: '/cgi.png' },
  { designation: 'Cloud Developer', logo: '/hewlett-packard.png' },
  { designation: 'Senior Software Development Engineer', logo: '/truckx.png' },
  { designation: 'Software Development Engineer', logo: '/reliance.png' },
  { designation: 'Software Development Engineer', logo: '/tesco.png' },
  { designation: 'Data Engineer', logo: '/via-play-group.png' },
  { designation: 'Software Development Engineer', logo: '/sense.png' },
  { designation: 'Product Manager', logo: '/hero-vired.png' },
  { designation: 'Software Development Engineer', logo: '/caterpillar.png' },
  { designation: 'Software Development Engineer', logo: '/rtbrick.png' },
  { designation: 'Software Development Engineer', logo: '/adobe.png' },
  { designation: 'Software Development Engineer', logo: '/itron.png' },
  { designation: 'Software Development Engineer', logo: '/rattle.png' },
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
              {DummyAlumni.map((alumnus, index) => (
                <div key={index} style={styles.companyItem}>
                  <img src={alumnus.logo} alt={alumnus.company} style={styles.logo} />
                  <span style={styles.companyName}>{alumnus.company}</span>
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
    height: '4rem',
    backgroundColor: 'LightCyan',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    width: '100%', 
  },
  companyList: {
    display: 'flex',
    flexDirection: 'row',
    whiteSpace: 'nowrap',
    animation: 'slide-left 60s linear infinite', 
    width: '200%',
  },
  companyItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '1.2rem', 
    fontSize: '1.5rem', 
    fontFamily: 'Brush Script MT ',
  },
  logo: {
    width: '50px',
    height: 'auto',
    marginRight: '1rem',
  },
  companyName: {
    color: 'purple',
    fontWeight: 'bold',
  },
  '@keyframes slide-left': {
    '100%': {
      transform: 'translateX(-100%)',
    },
  },
};

export default Body;
