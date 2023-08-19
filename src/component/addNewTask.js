import { useContext, useState, Alert } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoContext from "../store/todoContext";
import { Modal, Button } from "react-bootstrap";

const AddNewTask = () => {
  const [newTask, setNewTask] = useState();
  const [taskValidation, setTaskValidation] = useState(false);
  const taskContext = useContext(TodoContext);

  const addNewTaskHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewTask(event.target.value);
  };

  const submit = () => {
    if (!newTask) {
      setTaskValidation(true);
    } else {
      try {
        const newTaskObject = {
          id: uuidv4(),
          name: newTask,
          isCompleted: false,
        };
        taskContext.todoDispatch({
          type: "ADD",
          task: newTaskObject,
        });
        handleModal();
        setTaskValidation(false);
        setNewTask("");
      } catch (err) {
        alert("Something Went Wrong!");
      }
    }
  };

  const handleModal = () => {
    try {
      taskContext.todoDispatch({
        type: "MODALSHOW",
      });
    } catch (err) {
      alert("Something Went Wrong!");
    }
  };

  return (
    <Modal show={taskContext.modalShow}>
      <Modal.Header>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Title</label>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="type your task..."
          onChange={addNewTaskHandler}
        />
        {taskValidation && <p>Please enter the any task..</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModal}>
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
