import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm on the very very best home component</div>
      <button onClick={() => alert('Hi there!')}>Press me</button>
    </div>
  );
};

export default {
  component: Home
};
