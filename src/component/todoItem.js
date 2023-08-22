import { useContext } from "react";
import TodoContext from "../store/todoContext";
import classes from "./todoItem.module.css";
import { BiTrash } from "react-icons/bi";
import { DeleteTask, UpdateTask } from "../api/todoApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoItem = ({ content }) => {
  const todoContext = useContext(TodoContext);

  //update isComplete state according to user checkbox handle
  const onCompleted = async (taskId, uuid, status) => {
    try {
      todoContext.setLoadingStatus(true);
      await UpdateTask(uuid, status);
      todoContext.updateTask(taskId);
      todoContext.setLoadingStatus(false);
      toast.success("Task Updated Successfully !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      console.error("Error updating task:", err);
      toast.error("Something went wrong!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  //delete task method
  const handleDelete = async (taskId, uuid) => {
    try {
      todoContext.setLoadingStatus(true);
      await DeleteTask(uuid);
      todoContext.removeTask(taskId);
      todoContext.setLoadingStatus(false);
      toast.success("Task Deleted Successfully !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      console.error("Error deleting task:", err);
      toast.error("Something went wrong!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <div className={classes.todoBoxSection}>
        <div className={classes.todoBox}>
          <div>
            <input
              className={`form-check-input ${classes.checkbox}`}
              type="checkbox"
              id="status"
              name="status"
              defaultChecked={content.isCompleted}
              onChange={() => {
                onCompleted(content.id, content._uuid, content.isCompleted);
              }}
            />
          </div>
          <div>
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
