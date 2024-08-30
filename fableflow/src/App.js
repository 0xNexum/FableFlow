// src/App.js
import React, { useState } from 'react';
import StoryEditor from './components/StoryEditor';
import WalletConnect from './components/WalletConnect';
import VotingComponent from './components/VotingComponent';
import AISuggestions from './components/AISuggestions';
import './App.css';

function App() {
  const [storyText, setStoryText] = useState('');

  const handleSuggestionSelected = (suggestion) => {
    setStoryText((prevText) => `${prevText} ${suggestion}`);
  };

  return (
    <div className="App">
      <WalletConnect />
      <AISuggestions onSuggestionSelected={handleSuggestionSelected} />
      <StoryEditor storyText={storyText} setStoryText={setStoryText} />
      <VotingComponent />
    </div>
  );
}

export default App;
