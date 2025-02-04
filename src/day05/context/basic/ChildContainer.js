import React from 'react';
import { FontSizeConsumer } from './FontContext';
import ChildComponent from './ChildComponent';

const ChildContainer = () => {
  return (
    <div>
      {/* callback함수 받아야되니까 <></>구조 */}
      <FontSizeConsumer>
        { (context) => (
          <>
          <h1 style={{fontSize : context.state.fontSize }}>반갑습니다😊</h1>
          {/* context.action.setFontSize는 선언이기 때문에 setFontSize("5rem")으로 사용해줘야 함 */}
          <button onClick={() => { context.action.setFontSize("5rem") }}>커지게 하는 버튼</button>
          </>
        )}
      </FontSizeConsumer>
      <ChildComponent />
    </div>
  );
};

export default ChildContainer;