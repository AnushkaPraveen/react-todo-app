import { useContext } from "react";
import {TodoContext} from "../store/todoContext";
import TodoItem from "./module/todoItem";
const TodoItemList = () => {

  const [todoState, ] = useContext(TodoContext);
  return (
    <>
      {todoState.tasks
        .slice()
        .sort((a, b) =>
          a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
        )
        .map((task) => (
          <TodoItem key={task.id} content={task} />
        ))}
    </>
  );
};
export default TodoItemList;
