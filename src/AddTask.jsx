import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./store";

const AddTask = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTask(input));
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
