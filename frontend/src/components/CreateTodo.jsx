import React, { useState, useEffect } from "react";

const CreateTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const json = await response.json();
      setTodos(json.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await response.json();
      alert("Todo added");
      fetchTodos(); // Fetch todos again to update the list
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div className="flex flex-col mb-5 items-center">
      <input
        id="title"
        type="text"
        placeholder="Title"
        className="p-2 border border-slate-300 mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        id="desc"
        type="text"
        placeholder="Description"
        className="p-2 border border-slate-300 mb-4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="p-2 bg-blue-600 rounded-lg text-white font-medium text-sm"
        onClick={addTodo}
      >
        Add a Todo
      </button>

      <div>
        <h2>Todos:</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <strong>{todo.title}</strong>:{todo.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateTodo;
