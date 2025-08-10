import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, newTodo]);
    setNewTodo("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
        <button type="submit"> Submit</button>
      </form>

      <ul>
        {todo.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
