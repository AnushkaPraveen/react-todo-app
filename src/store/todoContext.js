import React, { useReducer} from "react";
import { todoActions } from './todoActions';

//create context object
export const TodoContext = React.createContext({});

//define default state
const defaultTodoState = {
  tasks: [],
  modalShow: false,
  loadingStatus: false,
};

//reducer action function define,pass state and action into function.there is swicth case for handle new task add,task update,task delete,modal toggle,loading state.
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
    case "LOADING": {
      return { ...state, loadingStatus: action.status };
    }
    default:
      return state;
  }
};

//context provider wrap around the other components.
export const TodoContextProvider = ({children}) => {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const dispatchActions = todoActions(dispatchTodoAction);
  
  return (
    <TodoContext.Provider value={[todoState,dispatchActions]}>
      {children}
    </TodoContext.Provider>
  );
};

//export default TodoContext;
