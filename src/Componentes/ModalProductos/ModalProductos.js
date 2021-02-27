import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModalProductos.css';

export default function ModalProductos(props) {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
  
    return (
        <>
            <p className="botonModalProductos" onClick={() => setLgShow(true)}>{props.TextoBoton}</p>
            
            <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {props.TituloModal}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                CERRAR
                </Button>
            </Modal.Footer> 
            </Modal>
        </>
  );
}