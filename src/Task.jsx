// Task.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "./store";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask(task.id, editText));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task ${task.isDone ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
};

export default Task;
