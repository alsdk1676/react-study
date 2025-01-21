import React from 'react';
import Component01 from './Component01';
import Component02 from './Component02';
import Component03 from './Component03';
import Component04 from './Component04';

const Container = () => {

  // const name = "홍길동"
  const containerStyle = {
    display : "flex",
    gap : "4px"
  }
  const boxStyle = {
    width: "100px",
    height: "100px",
    backgroundColor : "orange"
  }

  const buttonStyle = {
    width: "100px",
    height: "30px",
    backgroundColor: "pink"
  }

  const name = "서민아"
  
  const printName = (name) => {
    console.log(name)
  }
  printName(name)

  const printValue = () => {
    printName(name)
  }

  return (
    <div>
      {/* k=v(속성) 프로퍼티로 넘겨줌 */}
      {/* <Component01 name={name}/> */}
      {/* <Component02>
        <span style={{ backgroundColor : "pink" }}>안녕하세요!!😎</span>
      </Component02> */}
      {/* <Component03 containerStyle={containerStyle} boxStyle={boxStyle} /> */}
      <Component04 printName={printName} name={name} buttonStyle={buttonStyle} printValue={printValue}/>
    </div>
  );
};

export default Container;