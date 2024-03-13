import React, { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => {
      console.log(res.data.todos);
      setTodos(res.data.todos);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
