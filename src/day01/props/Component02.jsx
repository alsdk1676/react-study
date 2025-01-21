import React from 'react';

// 자식 요소(자식 태그)도 props로 받아야 함
const Component02 = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default Component02;