import React, { useState } from "react";

function TodoForm({addTodo, task}) {
    const [value, setValue] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        addTodo(value)
        setValue('')
    }
  return (
    <form action="#" onSubmit={handleSubmit} className=" flex justify-between items-center">
      <input
        className=" pl-5 border border-fuchsia-700  bg-transparent py-2 placeholder:text-sm placeholder:font-light text-white focus:outline-none"
        type="text"
        placeholder="What is the task?"
        onChange={(e)=> setValue(e.target.value)}
        value={value}
      />
      <button
        type="submit"
        className=" py-2 px-3 bg-fuchsia-700 border border-fuchsia-700 text-white font-medium"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
