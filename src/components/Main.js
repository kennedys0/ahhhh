import React from 'react';
import Illustration from './Illustration';
import JoinPresaleButton from './JoinPresaleButton';

const Main = () => {
  return (
    <main className="App-main" id='home'>
      <div className="content">
        <h1>Unleashing Fun and Innovation</h1>
        <p>Welcome to the world of Yubi, a revolutionary digital currency designed for the meme-loving community and beyond.</p>
        <JoinPresaleButton />
      </div>
      <Illustration />
    </main>
  );
};

export default Main;