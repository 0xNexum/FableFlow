import React, { useState } from 'react';

function VotingComponent() {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <div>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDownvote}>Downvote</button>
      <p>Total Votes: {votes}</p>
    </div>
  );
}

export default VotingComponent;
