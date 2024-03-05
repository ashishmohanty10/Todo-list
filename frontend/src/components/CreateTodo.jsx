import React, { useState } from "react";

const CreateTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //   const addTodo = () => {
  //     useEffect(() => {
  //       fetch("http://localhost:3000/todos").then(async function (res) {
  //         const json = await res.json();
  //         setTodos(json.todos);
  //       });
  //     }, [todos]);
  //   };
  return (
    <div className="flex flex-col mb-5 items-center">
      <input
        id="title"
        type="text"
        placeholder="Title"
        className="p-2 border border-slate-300 mb-2"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      />

      <input
        id="desc"
        type="text"
        placeholder="Decription"
        className="p-2 border border-slate-300 mb-4"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      />

      <button
        className=" p-2 bg-blue-600 rounded-lg text-white font-medium text-sm"
        onClick={() => {
          // axios
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
};

export default CreateTodo;
