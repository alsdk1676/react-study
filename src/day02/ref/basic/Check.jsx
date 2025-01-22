import React, { useRef, useState } from 'react';

const Check = () => {
  const [result, setResult] = useState("");
  const inputRef = useRef([]);
  const onClickToPrinthobby = () => {
    // console.log(inputRef.current)
    let hobby = "";
    // for(let input of inputRef.current){
    for(let i = 0; i < inputRef.current.length; i++){
      let input = inputRef.current[i];
      // console.log(input.checked)
      if(input.checked){
        hobby += i === inputRef.current.length - 1 ? input.value : input.value + ", "
        // hobby += input.value + ", "
      }
    }
    setResult(hobby)
  }

  return (
    <div>
      <p>{result}</p>
      <div>
        <label>
          <span>축구</span><input value="축구" ref={(el) => {inputRef.current[0] = el}} type="checkbox" name="hobby" />
        </label>
        <label>
          <span>야구</span><input value="야구" ref={(el) => {inputRef.current[1] = el}} type="checkbox" name="hobby" />
        </label>
        <label>
          <span>농구</span><input value="농구" ref={(el) => {inputRef.current[2] = el}} type="checkbox" name="hobby" />
        </label>
      </div>
      <button onClick={onClickToPrinthobby}>취미 확인하기!😎</button>
    </div>
  );
};

export default Check;