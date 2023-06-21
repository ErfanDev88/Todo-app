import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="p-4 rounded-lg bg-fuchsia-700 text-white font-medium  flex justify-between items-center">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`cursor-pointer text-xl ${
          task.completed ? "text-gray-300 line-through" : ""
        }`}
      >
        {task.task}
      </p>
      <div className="flex gap-x-3">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="cursor-pointer"
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Todo;
