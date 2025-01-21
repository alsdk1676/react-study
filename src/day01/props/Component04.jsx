import React from 'react';

// 버튼을 눌렀을 때
// 컨테이너에서 함수와 이름을 받아서
// 콘솔에 출력하기
// 1) 함수는 어떤 값을 받으면 콘솔에 출력해주는 함수
// 2) 이름은 본인 이름의 변수

const Component04 = (props) => {
  console.log(props) // 서민아
  const {buttonStyle, printValue} = props;

  // const printValue = () => {
  //   printName(name)
  // }

  return (
    <div>
      {/* {props.name} */}
      <button onClick={printValue} style={buttonStyle}>버튼</button>
    </div>
  );
};

export default Component04;