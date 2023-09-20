import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {TodoContext} from "../../store/todoContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addnewtask.css";
import AddModal from "./addModal";

const AddNewTask = () => {
  const [newTask, setNewTask] = useState();
  const [taskValidation, setTaskValidation] = useState(false);
  const [, todoAction] = useContext(TodoContext);

  //input text box input value handle method
  const addNewTaskHandler = (event) => {
    event.preventDefault();
    setNewTask(event.target.value);
  };

  //task create method.validate the text input.
  const submit = async () => {
    if (!newTask) {
      setTaskValidation(true);
    } else {
      try {
        todoAction.setModalShow();
        todoAction.setLoadingStatus(true);
        const newTaskObject = {
          id: uuidv4(),
          name: newTask,
          isCompleted: false,
        };
        await todoAction.addTask(newTaskObject);
        setTaskValidation(false);
        todoAction.setLoadingStatus(false);
        setNewTask("");
        toast.success("Task Created Successfully !", {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (err) {
        console.error("Error creating task:", err);
        toast.error("Something went wrong!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  return (
    <>
      <AddModal
        onSubmit={submit}
        onInputChange={addNewTaskHandler}
        validationState={taskValidation}
      />
    </>
  );
};
export default AddNewTask;
