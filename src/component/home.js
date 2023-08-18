import { useState, useContext } from "react";
import AddNewTask from "./addNewTask";
import TodoItem from "./todoItem";
import TodoContext from "../store/todoContext";
import { Modal, Button } from "react-bootstrap";

const Home = () => {
  const [show, setShow] = useState(false);
  const taskContext = useContext(TodoContext);

  return (
    <>
      <h1>todo</h1>
      <AddNewTask show={show} />
      <Button onClick={() => setShow(!show)}>Add new Task</Button>
      {taskContext.items.map((task) => (
        <TodoItem key={task.id} content={task} />
      ))}
    </>
  );
};
export default Home;
