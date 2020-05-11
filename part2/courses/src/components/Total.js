import React from 'react';

const Total = ({ parts }) => {
  const total = parts
    .map(({ exercises }) => exercises)
    .reduce((acc, curr) => acc + curr);

  return <strong>Total of exercises {total}</strong>;
};

export default Total;
