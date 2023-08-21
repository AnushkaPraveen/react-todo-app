import { useContext } from "react";
import AddNewTask from "./addNewTask";
import TodoItem from "./todoItem";
import TodoContext from "../store/todoContext";
import { PiClipboardText } from "react-icons/pi";
import classes from "./home.module.css";

const Home = () => {
  const taskContext = useContext(TodoContext);
  const handleModal = () => {
    taskContext.todoDispatch({
      type: "MODALSHOW",
    });
  };

  return (
    <>
      <h1>todo</h1>
      <AddNewTask />

      <button type="button" className="btn btn-primary" onClick={handleModal}>
        Add new Task
      </button>
      <h5>Todo List</h5>
      {taskContext.loadingStatus === true ? (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        taskContext.items.map((task) => (
          <TodoItem key={task.id} content={task} />
        ))
      )}
      {taskContext.items.length < 1 ? (
        <div className={classes.noDataSection}>
          <p>No Data</p> <PiClipboardText size={55} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Home;
