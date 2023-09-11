import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import TodoContext from "../store/todoContext";
import "./addnewtask.css";

const AddModal = (props) => {
  const taskContext = useContext(TodoContext);
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
          onChange={props.onInputChange}
        />
        {props.validationState && (
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
        <Button variant="primary" onClick={props.onSubmit}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
