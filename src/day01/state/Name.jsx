import React, { useState } from 'react';

const Name = () => {
  const [name, setName] = useState("")

  return (
    <div>
      <h1>{name}</h1>
      <input onChange={(e) => {
        // console.log(e.target.value) // input에 작성되는 값
        setName(e.target.value) 
      }}
      type='text' placeholder='이름을 입력하세요'/>
    </div>
  );
};

export default Name;