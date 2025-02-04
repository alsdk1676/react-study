import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change_2rem } from '../../modules/font';

const FontButtonComponent = () => {
  console.log(useSelector((state) => state)) // fontSize : 1rem ....

  const fontSize = useSelector((state) => state.fontSize);
  const dispatch = useDispatch();

  return (
    <div>
      <p style={{fontSize}}>재밌는 리덕스 수업</p>
      <button onClick={() => { dispatch(change_2rem()) }}>3rem으로 변경하기</button>
    </div>
  );
};

export default FontButtonComponent;
