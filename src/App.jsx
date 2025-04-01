import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import FilterTasks from "./FilterTasks";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <h1>Todo App</h1>
      <AddTask />
      <FilterTasks />
      <ListTask />
    </div>
  </Provider>
);

export default App;
