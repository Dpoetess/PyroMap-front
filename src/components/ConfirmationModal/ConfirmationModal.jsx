/* eslint-disable react/prop-types */

import Button from "../Button/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmationModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>¡Muchas gracias!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Inscripción realizada correctamente.</Modal.Body>
      <Modal.Footer>
        <Button
          handleClick={() => {
            handleClose();
          }}
          text={"Close"}
          type="button"
        />
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
