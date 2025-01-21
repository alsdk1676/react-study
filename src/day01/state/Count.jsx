import React, { useState } from 'react';

const Count = () => {
  const [number, setNumber] = useState(0); // 초기값 : 0
  const onClickToDecrease = () => {
    setNumber(number - 10)
    // setNumber를 사용해서 값에 접근해야만 상태를 변경할 수 있음
    // 호출과 동시에 setNumber 함수가 사용됨
  }
  const onClickToIncrease = () => {
    setNumber(number + 10)
  }
  return (
    <div>
      {/* 버튼도 포함해서 전체가 컴포넌트 => 버튼을 누를 때 마다 버튼을 포함해서 다시 지우고 리랜더링됨과 동시에 상태 변경됨*/}
      <button onClick={onClickToDecrease}>-</button>
      {number}
      <button onClick={onClickToIncrease}>+</button>
    </div>
  );
};

export default Count;