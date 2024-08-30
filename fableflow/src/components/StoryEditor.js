// src/components/StoryEditor.js
import React from 'react';

function StoryEditor({ storyText, setStoryText }) {
  const handleInputChange = (e) => {
    setStoryText(e.target.value);
  };

  return (
    <div>
      <h1>FableFlow Story Editor</h1>
      <textarea
        value={storyText}
        onChange={handleInputChange}
        placeholder="Start your story here..."
        rows="10"
        cols="50"
      />
    </div>
  );
}

export default StoryEditor;
