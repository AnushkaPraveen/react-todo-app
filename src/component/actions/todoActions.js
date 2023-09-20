/* import { useContext } from "react";
import TodoContext from "../../store/todoContext";
import { DeleteTask, UpdateTask } from "../../api/todoApi";

export const UpdateTodoTask = async ({ taskId, uuid, status }) => {
  const todoContext = useContext(TodoContext);
  todoContext.setLoadingStatus(true);
  await UpdateTask(uuid, status);
  todoContext.updateTask(taskId);
  todoContext.setLoadingStatus(false);
};

export const DeleteTodoTask = async ({taskId, uuid}) => {
  const todoContext = useContext(TodoContext);
  todoContext.setLoadingStatus(true);
  await DeleteTask(uuid);
  todoContext.removeTask(taskId);
  todoContext.setLoadingStatus(false);
};
 */