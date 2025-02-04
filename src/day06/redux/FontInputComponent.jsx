import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { input_fontSize } from '../../modules/font';

const FontInputComponent = () => {
  const inputFontSize = useSelector((state) => state.inputFontSize);
  const dispatch = useDispatch();
  const [value, onChangeValue] = useInput("");

  return (
    <div>
      <p style={{inputFontSize}}>맛있는 점심 식사</p>
      <input value={value} onChange={onChangeValue}/>
      <button onClick={() => { dispatch(input_fontSize(value)) }}>폰트 사이즈 변경</button>
    </div>
  );
};

export default FontInputComponent;
