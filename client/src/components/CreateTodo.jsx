import axios from "axios";
import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddFetch = async () => {
    await axios
      .post("http://localhost:3000/todo", {
        title: title,
        description: description,
      })
      .then(() => {
        alert("Todo added");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    <div>
      <form action="" className="space-x-5">
        <input
          type="text"
          placeholder="title"
          className="p-3 border "
          onChange={function (e) {
            const value = e.target.value;
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          className="p-3 border "
          onChange={function (e) {
            const value = e.target.value;
            setDescription(e.target.value);
          }}
        />

        <button
          type="submit"
          onClick={handleAddFetch}
          className="px-4 py-2 text-sm font-bold text-white bg-slate-900"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
