import { useState } from "react";
import classes from "./todoItem.module.css";

const TodoItem = () => {
  const [completed, setCompleted] = useState(true);
  return (
    <div>
      <div className={classes.todoBoxSection}>
        <input type="checkbox" id="status" name="status" />
        <h5 className={completed == true ? classes.completedTask : ""}>Task</h5>
        <button>Delete</button>
      </div>
    </div>
  );
};
export default TodoItem;
