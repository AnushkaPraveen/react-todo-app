import React, { useReducer, useEffect } from "react";
import { GetAllTasks } from "../api/todoApi";

const TodoContext = React.createContext({
  tasks: "sample",
});

const defaultTodoState = {
  tasks: [],
  modalShow: false,
  loadingStatus: false,
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
    case "LOADING": {
      return { ...state, loadingStatus: action.status };
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
  useEffect(() => {
    setLoadingStatus(true);
    const fetchData = async () => {
      try {
        const result = await GetAllTasks();
        const tasksArray = result.items; // Assuming result.items is an array of tasks
        const filteredNewTasks = tasksArray.filter((newTask) =>
          todoState.tasks.every(
            (existingTask) => existingTask.id !== newTask.id
          )
        );

        filteredNewTasks.map((task) => setTasks(task));

        setLoadingStatus(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, [todoState.tasks]);

  const setTasks = (payload) => {
    dispatchTodoAction({ type: "ADD", task: payload });
  };

  const removeTask = (id) => {
    dispatchTodoAction({ type: "REMOVE", id: id });
  };

  const updateTask = (id) => {
    dispatchTodoAction({ type: "UPDATE", id: id });
  };

  const setLoadingStatus = (status) => {
    dispatchTodoAction({ type: "LOADING", status: status });
  };

  const modalHandle = () => {
    dispatchTodoAction({ type: "MODALSHOW" });
  };

  const todoContext = {
    items: todoState.tasks,
    modalShow: todoState.modalShow,
    loadingStatus: todoState.loadingStatus,
    todoDispatch: dispatchTodoAction,
    setLoadingStatus: setLoadingStatus,
    modalHandle: modalHandle,
    setTasks: setTasks,
    removeTask: removeTask,
    updateTask: updateTask,
  };
  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
