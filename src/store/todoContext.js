import React, { useReducer } from "react";

const TodoContext = React.createContext({
  tasks: "sample",
});

const defaultTodoState = {
  tasks: [],
  modalShow: false,
};
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, tasks: [...state.tasks, action.task] };

    case "REMOVE": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    case "UPDATE": {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case "MODALSHOW": {
      return { ...state, modalShow: !state.modalShow };
    }
    default:
      return state;
  }
};
export const TodoContextProvider = (props) => {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );
  const todoContext = {
    items: todoState.tasks,
    modalShow: todoState.modalShow,
    todoDispatch: dispatchTodoAction,
  };
  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
