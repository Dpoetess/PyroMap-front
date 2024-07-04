import React, { useContext } from "react";
import './UserView.scss';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UserView = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="userview-container">
      <main>
        <input type="text" placeholder="Buscar incendios" />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>País</th>
              <th>Duración</th>
              <th>Fecha</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Incendio A</td>
              <td>Ciudad A</td>
              <td>País A</td>
              <td>1 semana</td>
              <td>01/07/2024</td>
              <td>
                <Button className="button" variant="primary" onClick={handleShow}>
                  ME APUNTO
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>PyroMap</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Inscripción realizada correctamente. ¡Muchas gracias!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className="close-button" variant="primary" onClick={handleClose}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
            <tr>
              <td>Incendio B</td>
              <td>Ciudad B</td>
              <td>País B</td>
              <td>2 semanas</td>
              <td>02/07/2024</td>
              <td>
                <Button className="button" variant="primary" onClick={handleShow}>
                  ME APUNTO
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>PyroMap</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Inscripción realizada correctamente. ¡Muchas gracias!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className="close-button" variant="primary" onClick={handleClose}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
            <tr>
              <td>Incendio C</td>
              <td>Ciudad C</td>
              <td>País C</td>
              <td>3 días</td>
              <td>03/07/2024</td>
              <td>
                <Button className="button" variant="primary" onClick={handleShow}>
                  ME APUNTO
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>PyroMap</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Inscripción realizada correctamente. ¡Muchas gracias!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className="close-button" variant="primary" onClick={handleClose}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default UserView;
