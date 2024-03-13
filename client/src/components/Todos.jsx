import React, { useState } from "react";

const Todos = ({ todos }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="my-5">
      {todos.map((todo, index) => {
        return (
          <div key={index} className="grid grid-cols-3 gap-5 mb-4 ">
            <h2 className="text-base font-semibold text-green-700">
              {todo.title}:
            </h2>
            <p className="text-sm font-medium text-blue-600">
              {todo.description}
            </p>
            <button
              className="text-sm font-medium text-white bg-blue-600"
              onClick={handleClick}
            >
              {clicked
                ? todo.completed
                  ? "false"
                  : "true"
                : "Click to reveal"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
