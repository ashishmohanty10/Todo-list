import React, { useState, useEffect } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="min-w-7xl h-screen flex flex-col justify-center items-center ">
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
