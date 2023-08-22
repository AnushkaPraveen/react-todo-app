import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoContext from "../store/todoContext";
import { CreateTask } from "../api/todoApi";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addnewtask.css";

const AddNewTask = () => {
  const [newTask, setNewTask] = useState();
  const [taskValidation, setTaskValidation] = useState(false);
  const taskContext = useContext(TodoContext);

  //input text box input value handle method
  const addNewTaskHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewTask(event.target.value);
  };

  //task create method.validate the text input.
  const submit = async () => {
    if (!newTask) {
      setTaskValidation(true);
    } else {
      try {
        taskContext.modalHandle();
        taskContext.setLoadingStatus(true);
        const newTaskObject = {
          id: uuidv4(),
          name: newTask,
          isCompleted: false,
        };
        await CreateTask(newTaskObject);
        taskContext.setTasks(newTaskObject);
        setTaskValidation(false);
        taskContext.setLoadingStatus(false);
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
    <Modal show={taskContext.modalShow}>
      <Modal.Header>
        <Modal.Title className="titleText">Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label className="titleText">Task</label>
        <input
          className=" form-control"
          type="text"
          id="task"
          name="task"
          placeholder="type your task..."
          onChange={addNewTaskHandler}
        />
        {taskValidation && (
          <p className="validationMessage">Please enter the any task..</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            taskContext.modalHandle();
          }}
        >
          Cancel
        </Button>
        <Button variant="primary" onClick={submit}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddNewTask;
