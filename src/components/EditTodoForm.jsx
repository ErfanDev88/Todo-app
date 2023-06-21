import React, { useState } from "react";

function EditTodoForm({editTodo, task}) {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e)=>{
        e.preventDefault()
        editTodo(value, task.id)
        setValue('')
    }
  return (
    <form action="#" onSubmit={handleSubmit} className="mb-5 flex">
      <input
        className="w-4/5 pl-5 border border-fuchsia-700  bg-transparent py-2 placeholder:text-sm placeholder:font-light text-white focus:outline-none"
        type="text"
        placeholder="Update Task"
        onChange={(e)=> setValue(e.target.value)}
        value={value}
      />
      <button
        type="submit"
        className="w-2/5 py-2 px-3 bg-fuchsia-700 border border-fuchsia-700 text-white font-medium"
      >
        Update Task
      </button>
    </form>
  );
}

export default EditTodoForm;
