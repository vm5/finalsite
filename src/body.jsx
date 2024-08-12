import React, { useState } from 'react';
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
  { company: 'Rattle', designation: 'Software Development Engineer', logo: '/rattle.png' }
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

// Styles object with media queries
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
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '20px',
    },
    radioText: {
      fontSize: '14px',
    },
    dropdown: {
      padding: '8px',
    },
    button: {
      padding: '8px 16px',
      fontSize: '14px',
    },
    companyHeading: {
      fontSize: '18px',
    },
    slidingContainer: {
      gap: '10px',
    },
    logo: {
      width: '40px',
    },
  },
  '@media (max-width: 480px)': {
    heading: {
      fontSize: '18px',
    },
    radioText: {
      fontSize: '12px',
    },
    dropdown: {
      padding: '6px',
    },
    button: {
      padding: '6px 12px',
      fontSize: '12px',
    },
    companyHeading: {
      fontSize: '16px',
    },
    slidingContainer: {
      gap: '5px',
    },
    logo: {
      width: '30px',
    },
  },
};

export default Body;
