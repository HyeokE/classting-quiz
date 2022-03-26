import React from 'react';

const Result = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Result</h1>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
