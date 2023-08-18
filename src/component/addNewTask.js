import { useContext, useState } from "react";
import TodoContext from "../store/todoContext";
import { Modal, Button } from "react-bootstrap";

const AddNewTask = ({show}) => {
  const [newTask, setNewTask] = useState();
  const ctx = useContext(TodoContext);

  const addNewTaskHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewTask(event.target.value);
  };

  const submit = () => {
    ctx.todoDispatch({
      type: "ADD",
      task: {
        id: Math.floor(Math.random() * 6) + 1,
        name: newTask,
        isCompleted: false,
      },
    });
  };

  return (
    <Modal show={show}>
      <Modal.Header >
        <Modal.Title>Add New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Title</label>
        <input type="text" id="task" name="task" onChange={addNewTaskHandler} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary" onClick={submit}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddNewTask;
