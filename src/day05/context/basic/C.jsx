import React from 'react';
import CharContext from './CharContext';

const C = () => {
  return (
    <CharContext.Consumer>
      {
        // 받을 준비가 안 된 상태에서 받을 수 있는 건 callback 함수
        // (context) => { console.log(context)}
        (context) => <p style={{color : context.color}}>리액트 context 환영해!🤗</p>
      }
      
    </CharContext.Consumer>
  );
};

export default C;