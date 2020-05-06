import React from 'react';

import Part from './Part';

const Content = ({ parts }) => (
  <div>
    {parts.map(({ name, exercises }, i) => (
      <Part key={i} name={name} exercises={exercises} />
    ))}
  </div>
);

export default Content;
