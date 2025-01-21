import React from 'react';

const Component01 = (props) => {
  console.log(props) // {name : "홍길동"} 

  return (
    <div>
      {/* key값(name)으로 value("홍길동") 들고오기 */}
      {props.name}
    </div>
  );
};

export default Component01;