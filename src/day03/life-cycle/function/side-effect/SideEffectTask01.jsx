import React, { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/todos
// todos에서 false인 todos만
// 내림차순으로 변경 후 10개만 가져와서 화면에 타이틀을 출력한다.
const SideEffectTask01 = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const datas = await response.json();
      return datas;
    };

    getTodos()
      .then((todos) => todos.filter((todo) => !todo.completed)) // false인 todos만
      // .then((todos) => console.log(todos)) 
      .then((todos) => todos.sort((a, b) => b - a)) // 내림차순으로
      .then((todos) => setTodos(todos.slice(0, 10))) // 10개만
      .catch(console.err)
    }, []);

  return (
    <div>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo.title}</li>)}
      </ul>
    </div>
  );
};

export default SideEffectTask01;

