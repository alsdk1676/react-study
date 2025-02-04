import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bigger } from '../../modules/font';

const FontButtonComponent = () => {

  const fontSize = useSelector((state) => state.font.fontSize);
  console.log(fontSize) // 초기값 잘 들어감 = redux 적용됨
  const dispatch = useDispatch();

  const onClickToBigger = () => {
    dispatch(bigger()) // 액션을 리듀서로 날려주는 기능을 하는 함수
  }

  return (
    <div>
      {/* <p style={{fontSize : fontSize}}>재밌는 리덕스 수업😎</p> */}
      <p style={{fontSize}}>재밌는 리덕스 수업😎</p>
      <button onClick={onClickToBigger}>3rem으로 변경하기</button>
    </div>
  );
};

export default FontButtonComponent;
