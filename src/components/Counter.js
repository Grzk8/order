import React from 'react';

const Counter = () => {
  const toggleHandler = () => {};

  return (
    <main className='counter'>
      <h1>order</h1>
      <div className='value'>----</div>
      <button onClick={toggleHandler}>Toggle</button>
    </main>
  );
};

export default Counter;
