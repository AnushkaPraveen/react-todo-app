import { useContext } from "react";
import TodoContext from "../store/todoContext";
import classes from "./todoItem.module.css";
import { BiTrash } from "react-icons/bi";
import { DeleteTask, UpdateTask } from "../api/todoApi";

const TodoItem = ({ content }) => {
  const todoContext = useContext(TodoContext);

  const onCompleted = async (taskId, uuid, status) => {
    try {
      todoContext.setLoadingStatus(true);
      await UpdateTask(uuid, status);
      todoContext.updateTask(taskId);
      todoContext.setLoadingStatus(false);
    } catch (err){
      console.error("Error updating task:", err);
      alert("Something went wrong!");
    }
  };

  const handleDelete = async (taskId, uuid) => {
    try {
      todoContext.setLoadingStatus(true);
      await DeleteTask(uuid);
      todoContext.removeTask(taskId);
      todoContext.setLoadingStatus(false);
    } catch (err) {
      console.error("Error updating task:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <div className={classes.todoBoxSection}>
        <div className={classes.todoBox}>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              id="status"
              name="status"
              defaultChecked={content.isCompleted}
              onChange={() => {
                onCompleted(content.id, content._uuid, content.isCompleted);
              }}
            />
          </div>
          <div >
            <h5
              className={
                content.isCompleted === true ? classes.completedTask : ""
              }
            >
              {content.name}
            </h5>
          </div>

          <div className={classes.taskText}>  
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                handleDelete(content.id, content._uuid);
              }}
            >
              <BiTrash size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
