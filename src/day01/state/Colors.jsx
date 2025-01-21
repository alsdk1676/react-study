import React, { useState } from 'react';

// 빨간색 버튼을 누르면 빨간색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색을 입력하면 글자의 색깔을 없앤다

const Colors = () => {
  const [color, setColor] = useState("");
  const [result, setResult] = useState("");
  
  const onClickToRed = () => { setColor("red") }
  const onClickToBlue = () => { setColor("blue") }

  // const onChangeInputColor = (e) => {console.log(e.target.value)} // input 입력값 ..
  const onChangeInputColor = (e) => {
    setResult(e.target.value) // input 입력값 .. 핑크색 ..
    
    if(e.target.value === "핑크색"){
      setColor("")
    }
  } 
  
  return (
    <div>
      {/* <p style={{color : "red"}}>{result}</p> */}
      {/* <p style={{color : "blue"}}>{result}</p> */}
      <p style={{color : color}}>{result}</p>
      <input type='text' onChange={onChangeInputColor}/>
      <button onClick={onClickToRed}>빨간색</button>
      <button onClick={onClickToBlue}>피란색</button>
    </div>
  );
};

export default Colors;