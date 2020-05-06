import React from 'react';

const Total = ({ parts }) => {
  const total = parts
    .map(({ exercises }) => exercises)
    .reduce((acc, curr) => acc + curr);

  return <p>Number of exercises {total}</p>;
};

export default Total;
