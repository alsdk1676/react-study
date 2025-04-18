import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../modules/count';
import useInput from '../hooks/useInput';

const Counter2 = () => {

  const { number } = useSelector((state) => state)

  const dispatch = useDispatch()

  const [value, onChangeValue] = useInput("")


  return (
    <div>
      <h1>{number}</h1>
      <input value={value} onChange={onChangeValue} />
      <div>
        <button onClick={() => { dispatch(decrease(value)) }}>감소</button>
        <button onClick={() => { dispatch(increase(value)) }}>증가</button>
      </div>
    </div>
  );
};

export default Counter2;