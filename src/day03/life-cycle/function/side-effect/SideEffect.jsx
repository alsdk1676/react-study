import React, { useEffect, useState } from 'react';

const SideEffect = () => {
  const [color, setColor] = useState("");
  const [number, setNumber] = useState(0);

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
  }
  
  const onClickToChangeColor = () => {
    setColor(getRandomColor())
  }

  const onClickToIncrease = () => {
    setNumber(number + 1)
  }

  useEffect(() => {
    console.log("리랜더링🎈") // number가 바뀔 때만 리랜더링!
  }, [number])

  // console.log("리랜더링🎈") // 리랜더링 시점 확인


  return (
    <div>
      <h1>안녕하세요🤗</h1>
      <button onClick={onClickToChangeColor}>색상 변경</button>
      <button onClick={onClickToIncrease}>+1 증가</button>
    </div>
  );
};

export default SideEffect;