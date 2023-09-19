import { useContext } from "react";
import AddNewTask from "./addNewTask";
import TodoContext from "../store/todoContext";
import { PiClipboardText } from "react-icons/pi";
import { MdAddCircleOutline } from "react-icons/md";
import classes from "./home.module.css";
import TodoItemList from "./todoItemList";

const Home = () => {
  const taskContext = useContext(TodoContext);
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
        
        {/* task item sort according to not completed order.*/}
        {taskContext.loadingStatus === true ? (
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (<TodoItemList/>)}

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
