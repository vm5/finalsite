import React, { useState } from 'react';
import './App.css';

const DummyAlumni = [
  // ... your alumni data
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
    fontSize: '1.5rem',
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
    fontSize: '1rem',
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
    fontSize: '1rem',
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
    fontSize: '1.5rem',
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
    padding: '0.5rem',
  },
  companyList: {
    display: 'flex',
    flexDirection: 'row',
    whiteSpace: 'nowrap',
    animation: 'slide-left 30s linear infinite',
  },
  companyItem: {
    flexShrink: 0,
    padding: '0 1rem',
  },
  logo: {
    width: '40px',
    height: 'auto',
  },
  '@keyframes slide-left': {
    '100%': {
      transform: 'translateX(-50%)',
    },
  },
};

export default Body;
