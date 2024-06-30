import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Tokenomics from './components/Tokenomics'
import Accordion from './components/Accordion';
import './App.css'

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Main />    
      <Tokenomics />
      <Accordion/>
      <Footer />
    </div>
  );
};

export default App;