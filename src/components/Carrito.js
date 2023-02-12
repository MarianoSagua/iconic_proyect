import React from 'react'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Carrito = () => {
    return (
      <div className="modal show" style={{ display: 'block', position: 'initial', height: "84vh"}}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Carrito de Compras</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p></p>
          </Modal.Body>

          <Modal.Footer>
            <Link to={"/"}>
              <Button variant="secondary">Cerrar</Button>
            </Link>
            <Button variant="success">Terminar Compra</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
}

export default Carrito