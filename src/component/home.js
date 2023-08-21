import { useContext } from "react";
import AddNewTask from "./addNewTask";
import TodoItem from "./todoItem";
import TodoContext from "../store/todoContext";
import { PiClipboardText } from "react-icons/pi";
import { MdAddCircleOutline } from "react-icons/md";
import classes from "./home.module.css";

const Home = () => {
  const taskContext = useContext(TodoContext);
  if (taskContext.loadingStatus === true) {
    <div className="spinner-border text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>;
  }
  return (
    <>
      <h1 className={classes.mainTitle}>todo</h1>
      <AddNewTask />
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={() => {
          taskContext.modalHandle();
        }}
      >
        Add new Task
        <MdAddCircleOutline size={20} color="white" />
      </button>
      <div className={classes.todolistSection}>
        <h5 className={classes.todoListTitle}>Todo List</h5>

        {taskContext.loadingStatus === true ? (
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          taskContext.items
            .slice()
            .sort((a, b) =>
              a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
            )
            .map((task) => <TodoItem key={task.id} content={task} />)
        )}

        {taskContext.items.length < 1 ? (
          <div className={classes.noDataSection}>
            <p>No Data</p> <PiClipboardText size={55} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Home;
