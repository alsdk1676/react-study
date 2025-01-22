import React from 'react';

const User = ({users}) => {
  const { name, phone, company, address } = users;
  console.log(users)
  return (
    <div style={{display: "inline-block", margin: "20px"}}>
      <div>
        <li>이름 : {name}</li>
        <li>전화번호 : {phone}</li>
        <li>회사명 : {company.name}</li>
        <li>도시명 : {address.city}</li>
      </div>
    </div>
  );
};

export default User;