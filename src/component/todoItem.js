import { useContext } from "react";
import TodoContext from "../store/todoContext";
import classes from "./todoItem.module.css";

const TodoItem = ({ content }) => {
  const todoContext = useContext(TodoContext);

  const onCompleted = (taskId) => {
    console.log("task", taskId);
    todoContext.todoDispatch({
      type: "UPDATE",
      id: taskId,
    });
  };

  return (
    <div>
      <div className={classes.todoBoxSection}>
        <input
          type="checkbox"
          id="status"
          name="status"
          onChange={() => {
            onCompleted(content.id);
          }}
        />
        <h5
          className={content.isCompleted === true ? classes.completedTask : ""}
        >
          {content.name}
        </h5>
        <button
          onClick={() => {
            todoContext.todoDispatch({ type: "REMOVE", id: content.id });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
