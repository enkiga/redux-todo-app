import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const { todos, visibilityFilter } = useSelector((state) => ({
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
  }));

  const filteredTodos = todos.filter((task) => {
    if (visibilityFilter === "SHOW_COMPLETED") return task.isDone;
    if (visibilityFilter === "SHOW_ACTIVE") return !task.isDone;
    return true;
  });

  return (
    <div className="task-list">
      {filteredTodos.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
