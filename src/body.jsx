import React, { useState } from 'react';
import './App.css';

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

  // Create unique list of companies for the dropdown
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
          <div style={styles.searchWrapper}>
            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              style={styles.dropdown}
            >
              <option value="">Select a Company</option>
              {uniqueCompanies.map((company, index) => (
                <option key={index} value={company}>{company}</option>
              ))}
            </select>
          </div>
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
          <div style={styles.slidingSection}>
            <div style={styles.slidingContainer}>
              {DummyAlumni.map((alumnus, index) => (
                <div key={index} style={styles.companyItem}>
                  <img src={alumnus.logo} alt={alumnus.company} style={styles.logo} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Styles object
const styles = {
  container: {
    padding: '0 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  main: {
    padding: '20px',
  },
  searchSection: {
    marginBottom: '40px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  radioGroup: {
    marginBottom: '20px',
  },
  radioLabel: {
    display: 'block',
    marginBottom: '10px',
  },
  radioInput: {
    marginRight: '10px',
  },
  radioText: {
    fontSize: '16px',
  },
  searchWrapper: {
    marginBottom: '20px',
  },
  dropdown: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  optionsSection: {
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
  },
  companySection: {
    marginTop: '40px',
  },
  companyHeading: {
    fontSize: '20px',
    marginBottom: '20px',
  },
  slidingSection: {
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
  },
  slidingContainer: {
    display: 'flex',
    gap: '20px',
    animation: 'slide-left 60s linear infinite',
  },
  companyItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '50px',
    height: 'auto',
  },
  '@keyframes slide-left': {
    '50%': { transform: 'translateX(-50%)' },
    '100%': { transform: 'translateX(-100%)' },
  },
};

export default Body;
