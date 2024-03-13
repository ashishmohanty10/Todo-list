import React from "react";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.completed}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
