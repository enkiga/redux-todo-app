import { configureStore, combineReducers } from "redux";

// Action Types
const ADD_TASK = "ADD_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";
const EDIT_TASK = "EDIT_TASK";
const SET_FILTER = "SET_FILTER";

// Action Creators
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { id: Date.now(), description, isDone: false },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

// Reducers
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    case EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, description: action.payload.description }
          : task
      );
    default:
      return state;
  }
};

const visibilityFilterReducer = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});

export const store = configureStore(rootReducer);
