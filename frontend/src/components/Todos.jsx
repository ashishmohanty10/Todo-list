import React from "react";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="flex items-center gap-5 mb-2">
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>

            <button className="p-2 bg-green-400 font-medium text-sm rounded-md">
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
