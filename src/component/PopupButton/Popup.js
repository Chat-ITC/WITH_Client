import React from "react";
import { Button, Modal } from "react-bootstrap";
import DatetimePicker from "react-datetime-picker";

const MyModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* Button to trigger modal */}
      <Button className="btn" onClick={handleShow}>
        Launch demo modal
      </Button>
      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal header</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="datetimepicker1" className="input-append date">
            <DatetimePicker format="dd/MM/yyyy hh:mm:ss" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModa;
