import React, { useReducer } from "react";

const TodoContext = React.createContext({
  tasks: "sample",
});

const tasks = [];
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.task];
    }
    case "REMOVE": {
      return state.filter((task) => task.id !== action.id);
    }
    case "UPDATE": {
      let taskIndex = state.findIndex((task) => task.id === action.id);
      const updatedState = state.map((task, index) => {
        if (index === taskIndex) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });

      // Return the updated state
      return updatedState;
    }
    default:
      return state;
  }
};
export const TodoContextProvider = (props) => {
  const [todoState, dispatchTodoAction] = useReducer(todoReducer, tasks);
  const todoContext = {
    items: todoState,
    todoDispatch: dispatchTodoAction,
  };
  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
