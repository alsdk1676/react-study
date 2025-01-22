import React, { useRef, useState } from 'react';

const NameRef = () => {
  // 사용자가 입력한 이름을 p태그에 실시간으로 작성
  // 버튼을 클릭하면 이름 뒤에 "님"을 붙이도록 구현
  // 입력 후 엔터를 작성하면 p태그에 반영
  const [result, setResult] = useState("");
  const nameRef = useRef();

  const onChangeResultName = (e) => {
    console.log(e)
    setResult(e.target.value)
  }

  const pressEntertoPutNim = (e) => {
    // console.log(e)
    if(e.key === 'Enter'){
      // setResult(result.replaceAll("님", "") + "님")
      setResult(nameRef.current.innerText.replaceAll("님", "") + "님")
    }
  }

  const onClickToReset = () => {
    setResult("")
  }
  console.log(nameRef)


  return (
    <div>
      {/* 초기화버튼을 눌렀을 때 result가 사라져야 되기 때문에 */}
      <p ref={nameRef}>{result}</p>
      <input type="text"
        value={result}
        placeholder='이름을 입력하세요'
        onChange={onChangeResultName}
        onKeyDown={pressEntertoPutNim}/>

      <button onClick={onClickToReset}>초기화 버튼</button>
    </div>
  );
};

export default NameRef;