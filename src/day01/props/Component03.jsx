import React from 'react';

// box 3개를 만들고 가로로 배치하기
// 단 box의 크기는 넓이 100px, 높이 100px, 백그라운드 컬러는 오렌지이다.
// 모든 변수는 컨테이너에서 선언한다.

// const Component03 = (props) => {
const Component03 = ({ containerStyle, boxStyle }) => {
  // const { containerStyle, boxStyle } = props;
  // console.log(props)
  return (
    // <div style={props.containerStyle}>
    //   <div style={props.boxStyle}></div>
    //   <div style={props.boxStyle}></div>
    //   <div style={props.boxStyle}></div>
    // </div>
    // 비구조할당
    <div style={containerStyle}>
      <div style={boxStyle}></div>
      <div style={boxStyle}></div>
      <div style={boxStyle}></div>
    </div>
  );
};

export default Component03;