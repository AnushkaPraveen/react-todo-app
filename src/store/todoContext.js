import React, { useReducer, useEffect } from "react";
import { GetAllTasks } from "../api/todoApi";

//create context object
const TodoContext = React.createContext({
  tasks: [],
  modalShow: false,
  loadingStatus: false,
});

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
export const TodoContextProvider = (props) => {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );

  //when task of defined state change,this useEffect work.
  useEffect(() => {
    setLoadingStatus(true);
    const fetchData = async () => {
      try {
        const result = await GetAllTasks(); //get task from API call
        const tasksArray = result.items;
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

  //define functions accroding to dispatch action in switch case
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
