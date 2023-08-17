import { Modal, Button } from "react-bootstrap";

const AddNewTask = () => {
  return (
    <Modal show={true}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Title</label>
        <input type="text" id="task" name="task" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddNewTask;
