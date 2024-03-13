import React from "react";

const CreateTodo = () => {
  return (
    <div>
      <form action="" className="space-x-5">
        <input type="text" placeholder="title" className="p-3 border " />
        <input type="text" placeholder="description" className="p-3 border " />

        <button
          type="submit"
          className="px-4 py-2 text-sm font-bold text-white bg-slate-900"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
