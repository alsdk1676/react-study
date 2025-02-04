import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { inputBigger } from '../../modules/font';

const FontInputComponent = () => {

  // const inputFontSize = useSelector((state) => state); 
  // console.log(inputFontSize) // {font:, count:}
  const inputFontSize = useSelector((state) => state.font.inputFontSize); 
  console.log(inputFontSize)
  const dispatch = useDispatch();
  const [value, onChangeValue] = useInput("");

  const onKeyDownChangeFontSize = (e) => {
    if(e.key === 'Enter'){
      console.log(value)
      dispatch(inputBigger(value))
    }
  }

  return (
    <div>
      <p style={{fontSize : inputFontSize}}>맛있는 점심 식사😊</p>
      <input type="text" value={value} onChange={onChangeValue} onKeyDown={onKeyDownChangeFontSize}/>
    </div>
  );
};

export default FontInputComponent;
