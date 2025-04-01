import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "./store";

const FilterTasks = () => {
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <button onClick={() => dispatch(setFilter("SHOW_ALL"))}>All</button>
      <button onClick={() => dispatch(setFilter("SHOW_COMPLETED"))}>
        Completed
      </button>
      <button onClick={() => dispatch(setFilter("SHOW_ACTIVE"))}>Active</button>
    </div>
  );
};

export default FilterTasks;
