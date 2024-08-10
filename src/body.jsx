import React, { useState } from 'react';

const DummyAlumni = [
  { company: 'Apple', designation: 'Software Development Engineer' },
  { company: 'Walmart', designation: 'Software Dvelopment Engineer' },
  { company: 'Deloitte', designation: 'Solution Delivery Analyst' },
  { company: 'HCL Software', designation: 'Product Manager' },
  { company: 'Oracle', designation: 'Software Development Engineer' },
  { company: 'PwC', designation: 'Tech Consultant' },
  { company: 'Cisco', designation: 'Big Data Analytics Engineer' },
  { company: 'IBM', designation: 'Software Development Engineer' },
  { company: 'SAP Labs', designation: 'Software Development Engineer' },
  { company: 'PwC', designation: 'Associate consultant' },
  { company: 'Epsilon', designation: 'Software Development Engineer' },
  { company: 'Schneider Electric', designation: 'Full Stack Developer' },
  { company: 'Cloudera', designation: 'Software Development Engineer' },
  { company: 'Schneider Electric', designation: 'Full Stack developer' },
  { company: 'Mercedes Benz Research and Development', designation: 'Data Engineer' },
  { company: 'PwC', designation: 'Associate' },
  { company: 'Paypal', designation: 'Target Corporation' },
  { company: 'GE', designation: 'Software Dvelopment Engineer' },
  { company: 'Allo Health', designation: 'Software Development Engineer' },
  { company: 'GSK', designation: 'Software Development Engineer' },
  { company: 'Autodesk', designation: 'Software Development Engineer' },
  { company: 'Target', designation: 'Software Development Engineer' },
  { company: 'KPMG India', designation: 'Data Analyst' },
  { company: 'Arcesium', designation: 'Software Development Engineer' },
  { company: 'Games 24x7', designation: 'Software Development Engineer' },
  { company: 'Hewlett-Packard Enterprise', designation: 'Data Scientist' },
  { company: 'Change Jar Technologies', designation: 'Software Development Engineer' },
  { company: 'LAM Research', designation: 'IT Engineer' },
  { company: 'Hewlett-Packard Enterprise', designation: 'Software Dvelopment Engineer' },
  { company: 'Consillio', designation: 'Software Dvelopment Engineer' },
  { company: 'Blue Yonder', designation: 'Software Dvelopment Engineer' },
  { company: 'Indian Navy', designation: 'Sub Lieutenant' },
  { company: 'IIT Kanpur', designation: 'PhD' },
  { company: 'Zebra Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'Commvault', designation: 'Software Dvelopment Engineer' },
  { company: 'Tejas Networks', designation: 'Software Dvelopment Engineer' },
  { company: 'Akamai Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'Zebra Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'CGI', designation: 'Software Dvelopment Engineer' },
  { company: 'Hewlett Packard Enterprise', designation: 'Cloud Dveloper' },
  { company: 'TruckX', designation: 'Senior Software Dvelopment Engineer' },
  { company: 'IBM', designation: 'Software Dvelopment Engineer' },
  { company: 'Universal automation solutions private limited', designation: 'Software Dvelopment Engineer' },
  { company: 'Reliance', designation: 'Software Dvelopment Engineer' },
  { company: 'Tesco', designation: 'Software Dvelopment Engineer' },
  { company: 'Mercedes Benz Research and Development ', designation: 'Software Dvelopment Engineer' },
  { company: 'Via Play Group', designation: 'Data Engineer' },
  { company: 'Sense', designation: 'Software Dvelopment Engineer' },
  { company: 'Hero-Vired', designation: 'Product Manager' }
];

const Body = () => {
  const [company, setCompany] = useState('');
  const [searchType, setSearchType] = useState('learn');

  const uniqueCompanies = [...new Set(DummyAlumni.map(alumnus => alumnus.company))];
  const isButtonDisabled = !company.trim();

  const handleFormOption = () => {
    if (searchType === 'prepare') {
      window.location.href = 'https://nucleusfusionconnectify.netlify.app/';
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
                Connect to a mentor of your preferred organization if you require generic information about the organization (e.g., its work culture).
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
            Organizations our mentors are a part of:
          </h2>
          <div style={styles.companyList}>
            {uniqueCompanies.map((company, index) => (
              <div key={index} style={styles.companyContainer}>
                <strong>{company}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '2rem',
    boxSizing: 'border-box',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '2rem',
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'LightCyan',
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '1200px',
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
    justifyContent: 'center',
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
    padding: '2rem',
    boxSizing: 'border-box',
  },
  companyHeading: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333',
  },
  companyList: {
    display: 'flex',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
  },
  companyContainer: {
    backgroundColor: 'LightCyan',
    padding: '1rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    color: blue,
  },
};

export default Body;
