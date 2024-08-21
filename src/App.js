import React, { useState } from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import Verification from './verification';
import './animations.css';
import './App.css';
import Why from './why.jsx';



function App() {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    setIsVerified(true);
  };

  return (
    <div className="App">
      <Header />
      {!isVerified ? (
        <Verification onVerify={handleVerify} />
      ) : (
        <Body />
      )}
        
      <Why />
      <Footer />
    </div>
  );
}

export default App;
