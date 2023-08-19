import { useContext } from "react";
import AddNewTask from "./addNewTask";
import TodoItem from "./todoItem";
import TodoContext from "../store/todoContext";
import { Button } from "react-bootstrap";

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
      <Button onClick={handleModal}>Add new Task</Button>
      <h5>Todo List</h5>
      {taskContext.items.length < 1 ? <p>No Data</p> : ""}
      {taskContext.items.map((task) => (
        <TodoItem key={task.id} content={task} />
      ))}
    </>
  );
};
export default Home;
