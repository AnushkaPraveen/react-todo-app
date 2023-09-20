// todoActions.js
import {
  DeleteTask,
  UpdateTask,
  CreateTask,
  GetAllTasks,
} from "../api/todoApi";

export const fetchData = async (dispatch) => {
  const result = await GetAllTasks();
  const tasksArray = result.items;
  console.log(tasksArray);
  tasksArray.forEach((task) => addTask(dispatch, task));
};

export const addTask = async (dispatch, task) => {
  const data = await CreateTask(task);
  const newItem = data.items[0];
  dispatch({ type: "ADD", task: newItem });
};

export const removeTask = async (dispatch, id, uuid) => {
  console.log(id, uuid);
  await DeleteTask(uuid);
  dispatch({ type: "REMOVE", id });
};

export const updateTask = async (dispatch, id, uuid, status) => {
  await UpdateTask(uuid, status);
  dispatch({ type: "UPDATE", id });
};

export const setModalShow = (dispatch) => {
  dispatch({ type: "MODALSHOW" });
};

export const setLoadingStatus = (dispatch, status) => {
  dispatch({ type: "LOADING", status });
};

export const todoActions = (dispatch) => {
  return {
    fetchData: () => fetchData(dispatch),
    addTask: (task) => addTask(dispatch, task),
    removeTask: (id, uuid) => removeTask(dispatch, id, uuid),
    updateTask: (id, uuid, status) => updateTask(dispatch, id, uuid, status),
    setModalShow: () => setModalShow(dispatch),
    setLoadingStatus: (status) => setLoadingStatus(dispatch, status),
  };
};
