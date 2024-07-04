/* eslint-disable react/prop-types */

import Button from '../Button/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmationModal({show, handleClose}) {

    return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button handleClick={() => {handleClose()}} text={"Close"} type="button"/>
                </Modal.Footer>
            </Modal>
    );
}

export default ConfirmationModal;

