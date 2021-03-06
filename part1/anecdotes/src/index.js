import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(6).fill(0));

  const maxVotes = Math.max(...votes);
  const bestAnecdote = anecdotes[votes.indexOf(maxVotes)];

  const handleNextClick = () => {
    // Random number between 0 - 5
    const getRandomNumber = Math.floor(Math.random() * 6);
    setSelected(getRandomNumber);
  };

  const handleVoteClick = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  return (
    <div>
      <button onClick={handleNextClick}>Next anecdote</button>
      <h3>Anecdote of the day</h3>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <h3>Anecdote with the most votes</h3>
      <p>{bestAnecdote}</p>
      <p>has {maxVotes} votes</p>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
