import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Tokenomics from './components/Tokenomics';
import './App.css'

const App = () => {

  const appStyle = {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    marginTop: '40px',
    fontFamily: 'Hazelnut',
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '600px',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
    color: 'white',
  };

  return (
    <div className="App">
      <Navbar />
      <Main />    
    <div style={appStyle}>
    <div style={containerStyle}>
      <Tokenomics />
    </div>
    </div>
      <Footer />
    </div>
  );
};

export default App;