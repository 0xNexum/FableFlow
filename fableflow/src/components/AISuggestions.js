import React, { useState, useEffect } from 'react';

function AISuggestions({ onSuggestionSelected }) {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetching AI suggestions
    const mockSuggestions = [
      "Introduce a new character who is secretly the villain.",
      "Change the setting to a mysterious island.",
      "Reveal that the protagonist has a hidden past.",
      "Add a twist where the mentor betrays the hero.",
    ];
    setTimeout(() => {
      setSuggestions(mockSuggestions);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSuggestionClick = (suggestion) => {
    onSuggestionSelected(suggestion);
  };

  return (
    <div>
      <h2>AI Suggestions</h2>
      {loading ? (
        <p>Loading suggestions...</p>
      ) : (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>
              <button onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AISuggestions;
