import { useState } from "react";
import AddNewTask from "./addNewTask";
import TodoItem from "./todoItem";

const Home = () => {
  const [show, setShow] = useState(false);
  const tasks = [
    { id: 10, task: "sample" },
    { id: 10, task: "sample" },
    { id: 10, task: "sample" },
  ];
  return (
    <>
      <h1>todo</h1>
      <button onClick={() => setShow(!show)}>Add new Task</button>
      {tasks.map((task) => (
        <TodoItem />
      ))}
      {show && <AddNewTask />}
    </>
  );
};
export default Home;
