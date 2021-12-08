import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const show = useSelector(state => state.showCounter)

  const addHandler = () => {
    dispatch({type: 'increment'});
  };

  const incHandler = () => {
    dispatch({type: 'increase', amount: 5});
  };

  const removeHandler = () => {
    dispatch({type: 'decrement'});
  }

  const toggleHandler = () => {
    dispatch({type: 'toggle'})
  };

  return (
    <main className='counter'>
      <h1>order</h1>
      {show ? <div className='value'>{counter}</div>: null}
      <div>
        <button onClick={addHandler}>Add</button>
        <button onClick={incHandler}>Add by 5</button>
        <button onClick={removeHandler}>Remove</button>
      </div>
      <button onClick={toggleHandler}>Toggle</button>
    </main>
  );
};

export default Counter;
